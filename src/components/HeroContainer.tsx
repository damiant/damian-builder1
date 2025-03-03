import { withChildren } from "@builder.io/react";
import { Builder } from "@builder.io/sdk";
import { PropsWithChildren } from "react";

const HeroContainer = (props: PropsWithChildren) => {
  return (
    <>
      <div>Hero Container</div>
      {props.children}
    </>
  );
};

export default HeroContainer;

export function RegisterHeroContainer() {
  Builder.registerComponent(withChildren(HeroContainer), {
    name: "HeroContainer",
    inputs: [],
    canHaveChildren: true,
    childRequirements: {
      message: "Only Hero components can be added here",
      query: { "component.name": "Hero" },
    },
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Hero",
        },
      },
    ],
  });
}