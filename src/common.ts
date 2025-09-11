import { GetContentOptions } from "@builder.io/sdk";

export const commonOptions: GetContentOptions = {
  cacheSeconds: 5,
  fetchOptions: {
    headers: {
      "x-builder-no-stale-cache": "true",
    },
  },
};
