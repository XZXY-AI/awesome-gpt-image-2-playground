<!--
This file is the source-of-truth template for README.md and all README_<lang>.md files.
The build script `pnpm build:readme` reads this template, fills in {{placeholders}} from
prompts/_index.yml + image manifests, and writes the rendered README files.

DO NOT edit README.md directly — your changes will be overwritten.
-->

<div align="center">

# 🎨 awesome-gpt-image-2-playground

**The only GPT Image 2 prompt library you can run for free in your browser.**

[ ▶️ **Try It Free Online** ]({{site_url}}?utm_source=github&utm_medium=readme&utm_campaign=hero) &nbsp;·&nbsp; [Docs]({{site_url}}/docs) &nbsp;·&nbsp; [Discord]({{discord_url}}) &nbsp;·&nbsp; [X]({{x_url}})

![stars](https://img.shields.io/github/stars/XZXY-AI/awesome-gpt-image-2-playground?style=for-the-badge&color=ffd700)
![prompts](https://img.shields.io/badge/prompts-{{prompts_count}}-blue?style=for-the-badge)
![langs](https://img.shields.io/badge/languages-{{langs_count}}-green?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/XZXY-AI/awesome-gpt-image-2-playground?style=for-the-badge)
![license](https://img.shields.io/badge/code-MIT-orange?style=for-the-badge)

{{hero_grid}}

🌐 **Languages**: [English](README.md) · [简体中文](README_zh-CN.md) · [繁體中文](README_zh-TW.md) · [日本語](README_ja.md) · [한국어](README_ko.md) · [Español](README_es.md) · [Português](README_pt.md) · [Français](README_fr.md) · [Deutsch](README_de.md) · [العربية](README_ar.md) · [Русский](README_ru.md) · [Tiếng Việt](README_vi.md)

</div>

---

## 🎁 Why this exists

Other GPT Image 2 prompt lists make you copy, paste, and pray. **We let you run every prompt right from your browser, for free.** Click any 🟢 `Try` button below — no signup needed for your first 3 generations.

- 🚀 **{{prompts_count}} curated prompts**, each with a real preview image
- 🎯 **Use-case first** — find prompts by what you want to make ("Amazon main image", "Xiaohongshu cover"), not by abstract style
- 🧪 **Prompt Lab** — visual prompt builder, tweak any element and re-generate
- 🌍 **{{langs_count}} languages** — built for global creators
- 🔄 **Daily updates** — fresh viral prompts every morning

---

## 🔥 Top {{top_count}} this week

> Auto-ranked by play count from [{{site_domain}}]({{site_url}})

{{top_grid}}

---

## 🧭 Find by Need

What are you trying to make?

| Use case | Count | Browse |
|----------|-------|--------|
| 🛒 E-commerce main image | {{count_ecommerce}} | [→](prompts/ecommerce/) |
| 📱 Social media cover (Xiaohongshu / Instagram / X) | {{count_social_media}} | [→](prompts/social-media/) |
| 📰 Poster & marketing | {{count_poster}} | [→](prompts/poster/) |
| 🎨 UI mockup / app screenshot | {{count_ui_mockup}} | [→](prompts/ui-mockup/) |
| 📊 Infographic / flow diagram | {{count_infographic}} | [→](prompts/infographic/) |
| 📦 Product packaging | {{count_packaging}} | [→](prompts/packaging/) |
| 📷 Photography / photorealism | {{count_photography}} | [→](prompts/photography/) |
| 🖌️ Illustration / artistic | {{count_illustration}} | [→](prompts/illustration/) |

---

## 🧪 Prompt Lab — build your own

Don't see exactly what you need? Open the [Prompt Lab]({{site_url}}/lab) and assemble a prompt from atoms:

- **Subject** — what's in the image
- **Style** — photorealistic / illustration / 3D / flat
- **Lighting** — studio / natural / cinematic / neon
- **Text** — what words appear (gpt-image-2 nails text rendering)
- **Aspect** — square / vertical / horizontal
- **Camera** — close-up / wide / isometric / overhead

The Lab will compose a structured prompt for you and run it instantly.

---

## 📚 Prompting Cheatsheet

The 5 things gpt-image-2 does better than other models, and how to exploit them:

1. **Pixel-perfect text** — quote what you want: `that reads "BLUE BOTTLE"`. Best at 1–5 words.
2. **Multi-element composition** — dense 200-word prompts work; describe scene + subject + lighting + camera + palette
3. **2K native resolution** — ask for it explicitly: "8K detail" or "ultra-sharp focus on..."
4. **Cross-image consistency** — reference earlier outputs by ID for sequels
5. **Reasoning before generating** — give the model the goal, not just keywords ("a marketing poster that emphasizes safety")

Full guide: [{{site_url}}/docs/prompting]({{site_url}}/docs/prompting)

---

## 🤝 Contribute

We accept new prompts via PR. Quality bar:
- ✅ Real preview image (≤200 KB WebP)
- ✅ Clear category
- ✅ Original or sourced (with credit)
- ❌ No celebrity / brand / NSFW

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📜 License

- **Code**: MIT
- **Prompts & previews**: CC-BY-4.0 — free for commercial use, just credit this repo

See [LICENSE](LICENSE).

---

## 💼 Sponsors

Building this is free for users. If your team uses these prompts in production, consider [supporting the project]({{site_url}}/pricing) — it pays the API bills.

---

<div align="center">

**Built by [@XZXY-AI](https://github.com/XZXY-AI)** &nbsp;·&nbsp; **[⭐ Star]({{repo_url}})** to follow updates &nbsp;·&nbsp; **[Try it now →]({{site_url}})**

Last updated: {{generated_at}}

</div>
