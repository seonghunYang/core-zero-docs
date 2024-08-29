import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>CoreZero</span>,
  project: {
    link: "https://github.com/seonghunYang/core-zero",
  },
  docsRepositoryBase: "https://github.com/seonghunYang/core-zero",
  footer: {
    text: "CoreZero documentation",
  },
  darkMode: true,
  primaryHue: 120,
  primarySaturation: 40,
  i18n: [{ locale: "ko-KR", text: "한국어" }],
};

export default config;
