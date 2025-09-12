import { GetContentOptions } from "@builder.io/sdk";

export const commonOptions: GetContentOptions = {
  cacheSeconds: 4,
  staleCacheSeconds: 0,
  fetchOptions: {
    //cache: "no-store", // Turn off Nextjs fetch caching https://nextjs.org/docs/app/guides/caching#opting-out-1
    cache: 'force-cache', // NextJS force caching
    next: { revalidate: 2}, // Revalidate this page every 30 seconds
    headers: {
      "x-builder-no-stale-cache": "true", // Wont work until deployed
      "x-builder-custom-fastly-maxage": 0,
    },
  },
};
