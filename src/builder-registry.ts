"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register('editor.settings', {
  styleStrictMode: false,
  allowOverridingTokens: true, // This lets you edit values (eg set to 20px instead of choosing "large" etc)
  designTokensOptional: false, // If true it lets you keep built in options available

  designTokens: {
    colors: [
      { name: 'Primary', value: "var(--primary, #E6C744)" },
      { name: 'Accent', value: "var(--accent, #FFF5BF)" },
      { name: 'Secondary', value: "var(--secondary, #C2C8DA)" },
      { name: 'Background', value: "var(--background, #ffffff)" },
      { name: 'Background Light', value: "var(--background-light, #e8e8e8)" },
      { name: 'Foreground', value: "var(--foreground, #171717)" }
    ],
    fontFamily: [
      { name: 'Primary', value: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' },
      { name: 'Alternative', value: 'Arial, Helvetica, sans-serif' }
    ],
    fontSize: [
      { name: 'Largest', value: 'var(--size-xxlarge, 57px)' },
      { name: 'Larger', value: 'var(--size-xlarge, 46px)' },
      { name: 'Large', value: 'var(--size-large, 24px)' },
      { name: 'Medium', value: 'var(--size-medium, 18px)' },
      { name: 'Small', value: 'var(--size-small, 15px)' },
    ],
    spacing: [
      { name: 'XLarge', value: 'var(--space-xlarge, 46px)' },
      { name: 'Large', value: 'var(--space-large, 24px)' },
      { name: 'Medium', value: 'var(--space-medium, 18px)' },
      { name: 'Small', value: 'var(--space-small, 15px)' },
      { name: 'None', value: 'var(--space-none, 0px)' },
    ]
  }
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
