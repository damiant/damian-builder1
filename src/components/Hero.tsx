import { Builder, withChildren } from "@builder.io/react";
import { PropsWithChildren } from "react";

const Hero = (props: PropsWithChildren) => {
  return (
    <>
      <div>Hero</div>
      {props.children}
    </>
  );
};

export default Hero;

const HeroWithBuilderChildren = withChildren(Hero);

export function RegisterHero() {
    Builder.registerComponent(HeroWithBuilderChildren, {
      name: "Hero",
      inputs: [],
      canHaveChildren: true,
      defaultChildren: [
        {
          "@type": "@builder.io/sdk:Element",
          component: {
            name: "Text",
            options: {
              text: "This is Builder text",
            },
          },
        },
      ],
    });
}