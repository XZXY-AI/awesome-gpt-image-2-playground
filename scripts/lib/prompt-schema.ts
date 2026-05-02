import { z } from 'zod';

export const PromptSchema = z.object({
  id: z.string().regex(/^[a-z]{2,3}-\d{3}$/, 'id must be like "ec-001"'),
  title: z.string().min(10).max(120),
  title_i18n: z.record(z.string(), z.string()).optional(),
  category: z.enum([
    'ecommerce',
    'social-media',
    'poster',
    'ui-mockup',
    'infographic',
    'packaging',
    'photography',
    'illustration',
  ]),
  tags: z.array(z.string()).optional().default([]),
  intent: z.string().min(5).max(200),
  prompt: z.string().min(30).max(2000),
  variables: z.record(z.string(), z.string()).optional(),
  preview: z.string().regex(/^previews\/[a-z]{2,3}-\d{3}\.webp$/),
  preview_variants: z.array(z.string()).optional().default([]),
  size: z.enum(['1024x1024', '1024x1536', '1536x1024']),
  source: z.string().optional().default(''),
  license: z.literal('CC-BY-4.0'),
  created: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  hot_score: z.number().int().min(0).default(0),
});

export type Prompt = z.infer<typeof PromptSchema>;

export const SUPPORTED_LANGS = [
  'en',
  'zh-CN',
  'zh-TW',
  'ja',
  'ko',
  'es',
  'pt',
  'fr',
  'de',
  'ar',
  'ru',
  'vi',
] as const;

export const CATEGORY_META: Record<string, { emoji: string; en: string; zh: string }> = {
  ecommerce: { emoji: '🛒', en: 'E-commerce main image', zh: '电商主图' },
  'social-media': { emoji: '📱', en: 'Social media cover', zh: '社媒封面' },
  poster: { emoji: '📰', en: 'Poster & marketing', zh: '海报与营销' },
  'ui-mockup': { emoji: '🎨', en: 'UI mockup / app screenshot', zh: 'UI Mockup / App 截图' },
  infographic: { emoji: '📊', en: 'Infographic / flow diagram', zh: '信息图 / 流程图' },
  packaging: { emoji: '📦', en: 'Product packaging', zh: '产品包装' },
  photography: { emoji: '📷', en: 'Photography / photorealism', zh: '摄影 / 写实' },
  illustration: { emoji: '🖌️', en: 'Illustration / artistic', zh: '插画 / 艺术' },
};
