# Contributing to awesome-gpt-image-2-playground

Thanks for considering a contribution! This repo is a curated, **quality-first** prompt library for OpenAI's gpt-image-2. Every prompt must come with a real preview image and clear category — no exceptions.

## Quick start

```bash
git clone https://github.com/XZXY-AI/awesome-gpt-image-2-playground.git
cd awesome-gpt-image-2-playground
pnpm install
```

## Submitting a new prompt

1. Pick a category folder under `prompts/` (or propose a new one in the PR description)
2. Create a new file: `prompts/<category>/NNN-short-slug.yml`, where `NNN` is the next available number in that folder
3. Fill in the YAML following the schema below
4. Generate a preview image with gpt-image-2 and save it as `images/previews/<id>.webp` (≤ 200 KB, WebP preferred)
5. Run `pnpm validate` to check schema
6. Open a PR

### Prompt YAML schema

```yaml
id: ec-001                                  # required, kebab-case, prefixed by category short code
title: "Amazon-style product main image"    # required, English
title_i18n:                                 # optional, will be auto-translated if missing
  zh-CN: "亚马逊风格产品主图"
category: ecommerce                         # required, must match parent folder
tags: [product, packshot, white-bg]         # optional but recommended
intent: "电商主图 / Amazon listing"          # search intent (Chinese + English ok)
prompt: |                                   # required, the actual prompt
  A professional product photograph of [PRODUCT] on pure white background...
variables:                                  # optional, placeholder values for [BRACKETED] tokens
  PRODUCT: "Premium dark chocolate bar"
preview: previews/ec-001.webp               # required
preview_variants:                           # optional, 0-4 alternate versions
  - previews/ec-001-a.webp
size: 1024x1024                             # required: 1024x1024 / 1024x1536 / 1536x1024
source: "https://x.com/.../status/..."      # optional but recommended (give credit)
license: CC-BY-4.0                          # required
created: 2026-05-05                         # required, YYYY-MM-DD
hot_score: 0                                # leave at 0; system updates this
```

## Quality bar

PRs will be **rejected** if any of the following are true:

- ❌ Preview image is missing, blurry, watermarked from another tool, or contains visible artifacts
- ❌ Prompt copies a known living celebrity, trademarked character, or specific brand identity (DMCA risk)
- ❌ Prompt is < 30 characters or > 800 characters (too vague / too verbose)
- ❌ Category does not match folder
- ❌ Duplicate of an existing prompt (we run cosine similarity check)
- ❌ NSFW, political, or otherwise risky content

## Source attribution

If your prompt is inspired by someone else (X / Twitter, Reddit, blog post), **always** fill in the `source` field. We respect original creators.

## Code contributions

For changes to `scripts/`, `app/`, or workflow files, please:

- Run `pnpm test` and `pnpm typecheck` locally
- Keep PRs focused (one feature / fix per PR)
- Add a one-line description in the PR title

## Code of Conduct

Be excellent to each other. We won't tolerate harassment, spam, or low-effort PRs.

## License

By contributing, you agree that your contributions will be licensed under the same terms as the repository:
- Code under MIT
- Prompts and preview images under CC-BY-4.0
