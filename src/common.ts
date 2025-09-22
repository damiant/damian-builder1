import { GetContentOptions } from "@builder.io/sdk";

export const commonOptions: GetContentOptions = {
  cacheSeconds: 2,
  //staleCacheSeconds: 0,
  fetchOptions: {
    //cache: "no-store", // Turn off Nextjs fetch caching https://nextjs.org/docs/app/guides/caching#opting-out-1
    //cache: 'force-cache', // NextJS force to use caching
    next: { revalidate: 2}, // Revalidate if 2 seconds or longer
    // headers: {
    //   "x-builder-no-stale-cache": "true", // Wont work until deployed
    //   "x-builder-custom-fastly-maxage": 0,
    // },
  },
};
