import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'HUSH Timer Docs';
export const appDescription = 'Documentation for HUSH Timer app.';
export const siteUrl = 'https://docs.hushtimer.app';
export const docsRoute = '/';
export const docsImageRoute = '/og/docs';

export const gitConfig = {
  user: 'ricky9667',
  repo: 'hushtimer-docs',
  branch: 'master',
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
