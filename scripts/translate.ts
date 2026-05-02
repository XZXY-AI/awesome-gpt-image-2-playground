/**
 * Translates README.md to all supported languages using GPT-4o-mini.
 *
 * Strategy:
 *   1. Read README.md (English source)
 *   2. For each target language, call OpenAI to translate
 *   3. Cache translations by hash(README.md + lang) so unchanged sections are not re-translated
 *   4. Write README_<lang>.md
 *
 * Skipped if OPENAI_API_KEY is not set (so local dev doesn't need a key).
 *
 * Run: pnpm translate
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SUPPORTED_LANGS } from './lib/prompt-schema.ts';

const REPO_ROOT = resolve(import.meta.dirname, '..');
const CACHE_DIR = resolve(REPO_ROOT, '.cache/translations');

const LANG_NAMES: Record<string, string> = {
  'zh-CN': 'Simplified Chinese (简体中文)',
  'zh-TW': 'Traditional Chinese (繁體中文)',
  ja: 'Japanese (日本語)',
  ko: 'Korean (한국어)',
  es: 'Spanish (Español)',
  pt: 'Portuguese (Português)',
  fr: 'French (Français)',
  de: 'German (Deutsch)',
  ar: 'Arabic (العربية)',
  ru: 'Russian (Русский)',
  vi: 'Vietnamese (Tiếng Việt)',
};

async function translate(content: string, targetLang: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.warn(`⚠️  OPENAI_API_KEY not set — skipping ${targetLang}`);
    return '';
  }

  const langName = LANG_NAMES[targetLang] ?? targetLang;
  const systemPrompt = `You are a professional technical translator. Translate the following GitHub README from English to ${langName}.

Rules:
- Preserve ALL Markdown structure: headings, links, tables, code fences, image tags
- Preserve ALL HTML tags exactly: <div>, <table>, <img>, <a>
- Preserve ALL URLs, image paths, badge URLs unchanged
- Preserve emoji
- Keep the language switcher line near the top untouched (already includes all language names)
- Translate UI strings naturally (e.g., "Try It Free" → idiomatic equivalent)
- Keep the project name "awesome-gpt-image-2-playground" in English
- Keep technical terms like "GPT Image 2", "API", "Prompt Lab", "WebP" in English
- Output ONLY the translated Markdown, no explanation, no wrapping code fence`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  }
  const data = (await res.json()) as { choices: { message: { content: string } }[] };
  return data.choices[0]?.message.content ?? '';
}

async function main() {
  if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });

  const source = readFileSync(resolve(REPO_ROOT, 'README.md'), 'utf8');
  const sourceHash = createHash('sha256').update(source).digest('hex');

  for (const lang of SUPPORTED_LANGS) {
    if (lang === 'en') continue;

    const cachePath = resolve(CACHE_DIR, `${lang}.${sourceHash}.md`);
    const outPath = resolve(REPO_ROOT, `README_${lang}.md`);

    if (existsSync(cachePath)) {
      writeFileSync(outPath, readFileSync(cachePath, 'utf8'));
      console.log(`✅ ${lang}: served from cache`);
      continue;
    }

    console.log(`🌐 Translating to ${lang}...`);
    try {
      const translated = await translate(source, lang);
      if (!translated) continue;
      writeFileSync(cachePath, translated);
      writeFileSync(outPath, translated);
      console.log(`✅ ${lang}: translated and cached`);
    } catch (e) {
      console.error(`❌ ${lang} failed:`, e);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
