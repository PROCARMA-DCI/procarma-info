// utils/lottieCache.ts
const lottieCache = new Map<string, unknown>();

export const getLottieFromCache = async (url: string) => {
  if (lottieCache.has(url)) {
    return lottieCache.get(url);
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  const json = await res.json();
  lottieCache.set(url, json);
  return json;
};

export const preloadLottieBatch = async (urls: string[]) => {
  await Promise.all(urls.map(getLottieFromCache));
};
