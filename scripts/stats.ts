/**
 * Updates the README badges (prompt count) by re-running build-readme after
 * the index has been refreshed. Also writes a small docs/stats.json that the
 * site can fetch to display live numbers.
 *
 * Run: pnpm stats
 */
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadAllPrompts } from './lib/load-prompts.ts';

const REPO_ROOT = resolve(import.meta.dirname, '..');
const DOCS_DIR = resolve(REPO_ROOT, 'docs');

async function main() {
  const prompts = await loadAllPrompts(REPO_ROOT);

  const byCategory: Record<string, number> = {};
  for (const p of prompts) byCategory[p.category] = (byCategory[p.category] ?? 0) + 1;

  const today = new Date().toISOString().slice(0, 10);

  const stats = {
    generated_at: new Date().toISOString(),
    total: prompts.length,
    by_category: byCategory,
    languages: 12,
    last_added: prompts
      .sort((a, b) => b.created.localeCompare(a.created))
      .slice(0, 5)
      .map((p) => ({ id: p.id, created: p.created, title: p.title })),
    today_added: prompts.filter((p) => p.created === today).length,
  };

  if (!existsSync(DOCS_DIR)) mkdirSync(DOCS_DIR, { recursive: true });
  writeFileSync(resolve(DOCS_DIR, 'stats.json'), JSON.stringify(stats, null, 2));
  console.log(`✅ Wrote docs/stats.json (${stats.total} prompts, +${stats.today_added} today)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
