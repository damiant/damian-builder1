"use client";

import { Builder } from "@builder.io/sdk";

const BynderImage = (props: BynderImageProps) => {
  const description: string =
    props.bynderAsset?.assets?.[0]?.description ?? "Bynder Asset";
  const asset =
    props.bynderAsset?.additionalInfo?.selectedFile ??
    props.bynderAsset?.assets?.[0]?.files?.webImage;

  console.log({ description, asset, props });
  if (!props.bynderAsset || !asset) {
    return "Choose a Bynder Asset";
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset.url}
      width={asset.width}
      height={asset.height}
      alt={description}
      style={{
        objectFit: props.imageFit ?? "inherit",
        // to fix fitting in a flex parent
        minHeight: 0,
        width: "100%",
      }}
    />
  );
};

export default BynderImage;

// types copied from Bynder's package or from the Bynder plugin

interface File {
  url: string;
  altText: string;
  width?: number;
  height?: number;
  fileSize?: number;
  isFakeOriginal?: boolean;
}
type AdditionalInfo = {
  selectedFile?: File;
};
type BynderImageProps = {
  bynderAsset: { assets?: BaseAsset[]; additionalInfo?: AdditionalInfo };
  imageFit: "cover" | "contain" | "fill" | "none";
};

// eslint-disable-next-line
interface BaseAsset extends Record<string, any> {
  __typename: string;
  id: string;
  name: string;
  description: string | null;
  databaseId: string;
  createdAt: string;
  originalUrl: string | null;
  publishedAt: string;
  tags: string[];
  type: string;
  updatedAt: string;
  url: string;
  extensions: string[];
  metaproperties: {
    // eslint-disable-next-line
    nodes: any[]; // esline-disable-line
  };
  // eslint-disable-next-line
  textMetaproperties: any[]; // esline-disable-line
  derivatives: {
    thumbnail: string;
    webImage: string;
  };
  files: {
    webImage: File;
    thumbnail: File;
    mini: File;
  };
}

export function registerBynderImage() {
  Builder.registerComponent(BynderImage, {
    name: "BynderImage",
    friendlyName: "Custom Image Using Bynder",
    image: "https://unpkg.com/css.gg@2.0.0/icons/svg/image.svg",
    inputs: [
      {
        name: "bynderAsset",
        type: "BynderAsset",
      },
      {
        name: "imageFit",
        type: "string",
        defaultValue: "cover",
        enum: ["cover", "contain", "fill", "none"],
      },
    ],
  });
}
