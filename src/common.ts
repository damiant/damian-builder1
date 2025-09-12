import { GetContentOptions } from "@builder.io/sdk";

export const commonOptions: GetContentOptions = {
  cacheSeconds: 4,
  staleCacheSeconds: 0,
  fetchOptions: {
    //cache: "no-store", // Turn off Nextjs fetch caching https://nextjs.org/docs/app/guides/caching#opting-out-1
    headers: {
      "Cache-Control": "max-age=30", // This doesnt work for 30 seconds and remains cached forever?
      "x-builder-no-stale-cache": "true", // Wont work until deployed
      "x-builder-custom-fastly-maxage": 0,
    },
  },
};
