import { GetContentOptions } from "@builder.io/sdk";

export const commonOptions: GetContentOptions = {
  cacheSeconds: 4,
  staleCacheSeconds: 0,
  fetchOptions: {
    cache: 'no-store',
    headers: {
      "x-builder-no-stale-cache": "true", // Wont work until deployed
      "x-builder-custom-fastly-maxage": 4
    },
  },
};
