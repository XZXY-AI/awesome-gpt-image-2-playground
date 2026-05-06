<!--
This file is the source-of-truth template for README.md and all README_<lang>.md files.
The build script `pnpm build:readme` reads this template, fills in {{placeholders}} from
prompts/_index.yml + image manifests, and writes the rendered README files.

DO NOT edit README.md directly — your changes will be overwritten.
-->

<div align="center">

# 🎨 awesome-gpt-image-2-playground

**The only GPT Image 2 prompt library you can run for free in your browser.**

[ ▶️ **Try It Free Online** ]({{site_url}}?utm_source=github&utm_medium=readme&utm_campaign=hero) &nbsp;·&nbsp; [Edit Your Image]({{site_url}}/edit?utm_source=github) &nbsp;·&nbsp; [Prompt Lab]({{site_url}}/lab?utm_source=github) &nbsp;·&nbsp; [Docs]({{site_url}}/docs/prompting?utm_source=github)

![stars](https://img.shields.io/github/stars/XZXY-AI/awesome-gpt-image-2-playground?style=for-the-badge&color=ffd700)
![prompts](https://img.shields.io/badge/prompts-{{prompts_count}}-blue?style=for-the-badge)
![langs](https://img.shields.io/badge/languages-{{langs_count}}-green?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/XZXY-AI/awesome-gpt-image-2-playground?style=for-the-badge)
![license](https://img.shields.io/badge/code-MIT-orange?style=for-the-badge)

{{hero_grid}}

🌐 **Languages**: [English](README.md) · [简体中文](README_zh-CN.md) · [繁體中文](README_zh-TW.md) · [日本語](README_ja.md) · [한국어](README_ko.md) · [Español](README_es.md) · [Português](README_pt.md) · [Français](README_fr.md) · [Deutsch](README_de.md) · [العربية](README_ar.md) · [Русский](README_ru.md) · [Tiếng Việt](README_vi.md)

</div>

---

## 🚀 30-second pitch

Other GPT Image 2 prompt lists make you copy, paste, and pray. **We let you run every prompt right from your browser, for free.**

- ⚡ Click any 🟢 `Try` button → image in 30 seconds. **No signup needed for your first generation.**
- 🎨 **{{prompts_count}} hand-vetted prompts** with real preview images, organized by use-case (Amazon listing, Xiaohongshu cover, iOS mockup, infographic — not abstract style)
- 🖼️ **Image-to-image edit** + **mask inpaint** — features no other awesome-list offers
- 🧪 **Visual Prompt Lab** to remix any prompt from atoms (subject / style / lighting / camera)
- 🌍 **{{langs_count}} languages** built in
- ⭐ **Star this repo** to unlock 3 free generations per day (vs 1 for anonymous)

---

## 📑 Table of Contents

- [🔥 Top {{top_count}} this week](#-top-{{top_count}}-this-week)
- [🧭 Find by Need](#-find-by-need)
- [📚 Full Prompt Index](#-full-prompt-index)
- [🧪 Prompt Lab — build your own](#-prompt-lab--build-your-own)
- [📖 Prompting Cheatsheet](#-prompting-cheatsheet)
- [🆚 Comparisons](#-comparisons)
- [🤝 Contribute](#-contribute)
- [📜 License](#-license)

---

## 🔥 Top {{top_count}} this week

> Auto-ranked by play count from [{{site_domain}}]({{site_url}})

{{top_grid}}

---

## 🧭 Find by Need

What are you trying to make?

| Use case | Count | Browse |
|----------|-------|--------|
| 🛒 E-commerce main image (Amazon, Shopify) | {{count_ecommerce}} | [→]({{site_url}}/gallery?cat=ecommerce&utm_source=github) |
| 📱 Social media cover (Xiaohongshu / Instagram / X) | {{count_social_media}} | [→]({{site_url}}/gallery?cat=social-media&utm_source=github) |
| 📰 Poster & marketing | {{count_poster}} | [→]({{site_url}}/gallery?cat=poster&utm_source=github) |
| 🎨 UI mockup / app screenshot | {{count_ui_mockup}} | [→]({{site_url}}/gallery?cat=ui-mockup&utm_source=github) |
| 📊 Infographic / flow diagram | {{count_infographic}} | [→]({{site_url}}/gallery?cat=infographic&utm_source=github) |
| 📦 Product packaging | {{count_packaging}} | [→]({{site_url}}/gallery?cat=packaging&utm_source=github) |
| 📷 Photography / photorealism | {{count_photography}} | [→]({{site_url}}/gallery?cat=photography&utm_source=github) |
| 🖌️ Illustration / artistic | {{count_illustration}} | [→]({{site_url}}/gallery?cat=illustration&utm_source=github) |

---

## 📚 Full Prompt Index

Every prompt in the library, grouped by category. Click 🟢 to open the live page with one-click generation, full prompt text, sample variations, and use-case guidance.

{{full_index}}

---

## 🧪 Prompt Lab — build your own

Don't see exactly what you need? Open the [Prompt Lab]({{site_url}}/lab?utm_source=github) and assemble a prompt from atoms:

- **Subject** — what's in the image
- **Style** — photorealistic / illustration / 3D / flat
- **Lighting** — studio / natural / cinematic / neon
- **Text** — what words appear (gpt-image-2 nails text rendering)
- **Aspect** — square / vertical / horizontal
- **Camera** — close-up / wide / isometric / overhead

The Lab will compose a structured prompt for you and run it instantly.

---

## 📖 Prompting Cheatsheet

The 5 things gpt-image-2 does better than other models, and how to exploit them:

1. **Pixel-perfect text** — quote what you want: `that reads "BLUE BOTTLE"`. Best at 1–5 words.
2. **Multi-element composition** — dense 200-word prompts work; describe scene + subject + lighting + camera + palette
3. **2K native resolution** — ask for it explicitly: "8K detail" or "ultra-sharp focus on..."
4. **Cross-image consistency** — reference earlier outputs by ID for sequels
5. **Reasoning before generating** — give the model the goal, not just keywords ("a marketing poster that emphasizes safety")

Full guide: [{{site_url}}/docs/prompting]({{site_url}}/docs/prompting?utm_source=github)

---

## 🆚 Comparisons

How does this stack up against other tools?

- [vs. EvoLinkAI awesome-prompts]({{site_url}}/vs/evolink) (11.3k★) — feature-rich library with no playground
- [vs. YouMind-OpenLab]({{site_url}}/vs/youmind) (4.1k★) — high volume, lower hand-curation
- [vs. freestylefly]({{site_url}}/vs/freestylefly) (3.1k★) — engineering-flavored "Prompt as Code" framework
- [vs. DALL·E 3]({{site_url}}/vs/dalle3) — OpenAI's previous-gen image model
- [vs. Midjourney]({{site_url}}/vs/midjourney) — premium aesthetic-focused generator

---

## 🤝 Contribute

We accept new prompts via PR. Quality bar:

- ✅ Real preview image (≤200 KB WebP)
- ✅ Clear use-case category
- ✅ Original or sourced (with credit)
- ❌ No celebrity / brand / NSFW

See [CONTRIBUTING.md](CONTRIBUTING.md).

Looking for a good first issue? Try:

- Add a 33rd prompt for a category that has 4 items currently
- Translate one prompt into a language not yet covered
- Improve the cheatsheet with a new technique

---

## 📜 License

- **Code**: MIT
- **Prompts & previews**: CC-BY-4.0 — free for commercial use, just credit this repo

See [LICENSE](LICENSE).

---

## 💼 Sponsors

Building this is free for users. If your team uses these prompts in production, consider [supporting the project]({{site_url}}/pricing?utm_source=github) — it pays the API bills.

---

<div align="center">

**Built by [@XZXY-AI](https://github.com/XZXY-AI)** &nbsp;·&nbsp; **[⭐ Star]({{repo_url}})** to unlock +1 daily free generation &nbsp;·&nbsp; **[Try it now →]({{site_url}}?utm_source=github)**

Last updated: {{generated_at}} &nbsp;·&nbsp; <sub>Generated at {{last_rebuilt}}</sub>

</div>
