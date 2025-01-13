"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register('editor.settings', {
  styleStrictMode: false,
  designTokens: {
    colors: [
      { name: 'Primary', value: "var(--primary, #E6C744)" },
      { name: 'Accent', value: "var(--accent, #FFF5BF)" },
      { name: 'Secondary', value: "var(--secondary, #C2C8DA)" },
      { name: 'Background', value: "var(--background, #ffffff)" },
      { name: 'Foreground', value: "var(--foreground, #171717)" }
    ],
    fontFamily: [
      { name: 'Primary', value: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif' },
      { name: 'Alternative', value: 'Arial, Helvetica, sans-serif' }
    ],
    fontSizing: [
      { name: 'XLarge', value: 'var(--space-xlarge, 46px)' },
      { name: 'Large', value: 'var(--space-large, 24px)' },
      { name: 'Medium', value: 'var(--space-medium, 18px)' },
      { name: 'Small', value: 'var(--space-small, 15px)' },
    ],
    spacing: [
      { name: 'XLarge', value: 'var(--space-xlarge, 46px)' },
      { name: 'Large', value: 'var(--space-large, 24px)' },
      { name: 'Medium', value: 'var(--space-medium, 18px)' },
      { name: 'Small', value: 'var(--space-small, 15px)' },
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
