
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

// This is needed so that you can edit symbols in Builder without using the fallback editor.
// See https://www.builder.io/c/docs/integrate-symbols

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const EditSymbolPage = () => {
  return <RenderBuilderContent model="symbol" />
};

export default EditSymbolPage;