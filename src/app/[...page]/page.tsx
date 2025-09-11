import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { commonOptions } from "@/common";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page(props: PageProps) {
  const model = "page";
  const content = await builder
    // Get the page content from Builder with the specified options
    .get(model, {
      ...commonOptions,
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + ((await props?.params)?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();
  // builder.track("myEvent", { contentId: "c7849f818f6546dcbb347a8fbd82c9f9" });
  // builder.trackConversion(20);

  return (
    <>
      {/* Render the Builder page */}

      <RenderBuilderContent
        content={content}
        model={model}
      ></RenderBuilderContent>
    </>
  );
}
