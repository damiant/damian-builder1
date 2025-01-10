
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Home() {
  const content = await builder
    .get("page", {
      cachebust: (process.env.IS_DEVELOPMENT === "true") ? true : false,
      userAttributes: {
        urlPath: "/",
      },
    })
    .toPromise();

  return (

    <main>
      <div className="page">
        <RenderBuilderContent content={content} model="page"></RenderBuilderContent>
      </div>
      {process.env.IS_DEVELOPMENT === 'true' &&
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background min-w-44 gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://www.builder.io/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              Blog
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://www.builder.io/c/docs/developers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </div>
        </div>
      }
    </main>
  );
}
