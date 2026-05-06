/**
 * Renders README.md and README_<lang>.md from prompts/_index.yml + README_TEMPLATE.md.tpl
 *
 * For now, this script regenerates the English README only — non-English files
 * are produced by `pnpm translate` (see translate.ts).
 *
 * Run: pnpm build:readme
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadAllPrompts } from './lib/load-prompts.ts';
import { CATEGORY_META, SUPPORTED_LANGS } from './lib/prompt-schema.ts';

/** Mirror of slugify() in site/lib/load-prompts.ts. Same input → same output. */
function slugify(title: string, maxWords = 7): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .slice(0, maxWords)
    .join('-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const REPO_ROOT = resolve(import.meta.dirname, '..');
const SITE_URL = process.env.SITE_URL ?? 'https://gptimage2.veilo.dev';
const REPO_URL = 'https://github.com/XZXY-AI/awesome-gpt-image-2-playground';
const X_URL = 'https://x.com/gptimage2';
const DISCORD_URL = 'https://discord.gg/TODO';
const TOP_COUNT = 10;

function renderHeroGrid(prompts: { id: string; preview: string; title: string }[]) {
  const top = prompts.slice(0, 5);
  const cells = top
    .map(
      (p) =>
        `<td><img src="images/${p.preview}" alt="${p.title}" width="180"/></td>`,
    )
    .join('\n');
  return `<table>\n<tr>\n${cells}\n</tr>\n</table>`;
}

function renderTopGrid(
  prompts: { id: string; preview: string; title: string; category: string }[],
) {
  return prompts
    .slice(0, TOP_COUNT)
    .map((p) => {
      const cat = CATEGORY_META[p.category];
      const slug = slugify(p.title);
      return `### ${cat?.emoji ?? '🎨'} ${p.title}
<a href="${SITE_URL}/p/${slug}?utm_source=github&utm_medium=top-grid"><img src="images/${p.preview}" width="320" align="left" hspace="20"/></a>

[ 🟢 **Try it free →** ](${SITE_URL}/p/${slug}?utm_source=github&utm_medium=top-grid)

<br clear="left"/>

---`;
    })
    .join('\n\n');
}

/**
 * Full index of every prompt, grouped by category, with descriptive slug links.
 * This is the most important SEO surface in the README — every prompt is one
 * crawlable link that targets a unique long-tail keyword via its slug.
 */
function renderFullIndex(
  prompts: { id: string; title: string; intent: string; preview: string; category: string }[],
): string {
  const byCategory: Record<string, typeof prompts> = {};
  for (const p of prompts) {
    (byCategory[p.category] ??= []).push(p);
  }
  const sections: string[] = [];
  for (const [cat, items] of Object.entries(byCategory)) {
    const meta = CATEGORY_META[cat];
    sections.push(`### ${meta?.emoji ?? '🎨'} ${meta?.label ?? cat} (${items.length})

| Preview | Prompt | Intent | Try |
|---------|--------|--------|-----|
${items
  .map((p) => {
    const slug = slugify(p.title);
    return `| <img src="images/${p.preview}" width="100"/> | **${p.title}** | ${p.intent} | [▶️](${SITE_URL}/p/${slug}?utm_source=github&utm_medium=full-index) |`;
  })
  .join('\n')}`);
  }
  return sections.join('\n\n');
}

async function main() {
  const prompts = await loadAllPrompts(REPO_ROOT);
  const tplPath = resolve(REPO_ROOT, 'README_TEMPLATE.md.tpl');
  const tpl = readFileSync(tplPath, 'utf8');

  const sortedByHot = [...prompts].sort((a, b) => b.hot_score - a.hot_score);

  const counts: Record<string, number> = {};
  for (const cat of Object.keys(CATEGORY_META)) counts[cat] = 0;
  for (const p of prompts) counts[p.category] = (counts[p.category] ?? 0) + 1;

  const replacements: Record<string, string> = {
    site_url: SITE_URL,
    site_domain: SITE_URL.replace(/^https?:\/\//, ''),
    repo_url: REPO_URL,
    x_url: X_URL,
    discord_url: DISCORD_URL,
    prompts_count: String(prompts.length),
    langs_count: String(SUPPORTED_LANGS.length),
    top_count: String(TOP_COUNT),
    hero_grid: renderHeroGrid(prompts),
    top_grid: renderTopGrid(sortedByHot),
    full_index: renderFullIndex(prompts),
    generated_at: new Date().toISOString().slice(0, 10),
    last_rebuilt: new Date().toISOString(),
    count_ecommerce: String(counts.ecommerce ?? 0),
    count_social_media: String(counts['social-media'] ?? 0),
    count_poster: String(counts.poster ?? 0),
    count_ui_mockup: String(counts['ui-mockup'] ?? 0),
    count_infographic: String(counts.infographic ?? 0),
    count_packaging: String(counts.packaging ?? 0),
    count_photography: String(counts.photography ?? 0),
    count_illustration: String(counts.illustration ?? 0),
  };

  let rendered = tpl;
  for (const [key, value] of Object.entries(replacements)) {
    rendered = rendered.replaceAll(`{{${key}}}`, value);
  }

  // Strip the editor warning header from template (lines between <!-- ... -->)
  rendered = rendered.replace(/^<!--[\s\S]*?-->\n*/, '');

  const outPath = resolve(REPO_ROOT, 'README.md');
  writeFileSync(outPath, rendered);
  console.log(`✅ Wrote ${outPath} (${prompts.length} prompts)`);
}

main().catch((e) => {
  console.error('❌ build-readme failed:', e);
  process.exit(1);
});
