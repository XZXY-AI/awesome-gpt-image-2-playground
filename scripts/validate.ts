/**
 * Validates every prompt YAML in prompts/<category>/.
 * Exits 1 on any failure. Used by CI to gate PRs.
 *
 * Run: pnpm validate
 */
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadAllPrompts } from './lib/load-prompts.ts';

const REPO_ROOT = resolve(import.meta.dirname, '..');

async function main() {
  console.log('🔍 Validating prompt files...');
  const prompts = await loadAllPrompts(REPO_ROOT);

  const ids = new Set<string>();
  const dupes: string[] = [];
  const missingPreviews: string[] = [];

  for (const p of prompts) {
    if (ids.has(p.id)) dupes.push(p.id);
    ids.add(p.id);

    const previewPath = resolve(REPO_ROOT, 'images', p.preview);
    if (!existsSync(previewPath)) {
      missingPreviews.push(`${p.id} → images/${p.preview}`);
    }
  }

  if (dupes.length > 0) {
    console.error('❌ Duplicate IDs:', dupes.join(', '));
    process.exit(1);
  }

  if (missingPreviews.length > 0) {
    console.warn('⚠️  Missing preview images (will need to be generated):');
    missingPreviews.forEach((m) => console.warn('   ', m));
    // Don't fail CI on missing previews during early phase — just warn.
    // Switch to process.exit(1) after D7 once gallery is filled.
  }

  console.log(`✅ ${prompts.length} prompts validated, ${ids.size} unique IDs`);
}

main().catch((e) => {
  console.error('❌ Validation failed:');
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
