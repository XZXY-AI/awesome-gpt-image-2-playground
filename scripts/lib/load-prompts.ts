import { readFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import fg from 'fast-glob';
import { parse as parseYaml } from 'yaml';
import { PromptSchema, type Prompt } from './prompt-schema.ts';

export interface LoadedPrompt extends Prompt {
  /** Source file path, relative to the repo root */
  _file: string;
}

export async function loadAllPrompts(repoRoot: string): Promise<LoadedPrompt[]> {
  const files = await fg('prompts/*/[0-9]*.yml', { cwd: repoRoot, absolute: true });
  const prompts: LoadedPrompt[] = [];
  const errors: { file: string; error: string }[] = [];

  for (const file of files.sort()) {
    try {
      const raw = readFileSync(file, 'utf8');
      const parsed = parseYaml(raw);
      const validated = PromptSchema.parse(parsed);

      const expectedCategory = file.match(/prompts\/([^/]+)\//)?.[1];
      if (expectedCategory && expectedCategory !== validated.category) {
        errors.push({
          file,
          error: `category "${validated.category}" does not match folder "${expectedCategory}"`,
        });
        continue;
      }

      prompts.push({ ...validated, _file: relative(repoRoot, file) });
    } catch (e) {
      errors.push({ file, error: e instanceof Error ? e.message : String(e) });
    }
  }

  if (errors.length > 0) {
    const msg = errors.map((e) => `  ${e.file}\n    → ${e.error}`).join('\n');
    throw new Error(`Failed to load ${errors.length} prompt file(s):\n${msg}`);
  }

  return prompts;
}
