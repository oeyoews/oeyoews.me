'use client';

import { createI18nClient } from 'next-international/client';

// locales/client.ts

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
  en: () => import('./en'),
  fr: () => import('./zh'),
});
