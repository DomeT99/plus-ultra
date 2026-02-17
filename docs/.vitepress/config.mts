import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Plus Ultra",
  description: "Documentation of Plus Ultra",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Core Components", link: "/core/components/card" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [{ text: "Getting Started", link: "/guide/getting-started" }],
      },
      {
        text: "Components",
        items: [
          { text: "Card", link: "/core/components/card" },
          { text: "Icon", link: "/core/components/icon" },
          { text: "Modal", link: "/core/components/modal" },
          { text: "Navbar", link: "/core/components/navbar" },
          { text: "Tabs", link: "/core/components/tabs" },
        ],
      },
      {
        text: "Elements",
        items: [
          { text: "Box", link: "/core/elements/box" },
          { text: "Button", link: "/core/elements/button" },
          { text: "Delete", link: "/core/elements/delete" },
          { text: "Notification", link: "/core/elements/notification" },
          { text: "Progress", link: "/core/elements/progress" },
          { text: "Table", link: "/core/elements/table" },
          { text: "Tag", link: "/core/elements/tag" },
        ],
      },
      {
        text: "Form",
        items: [
          { text: "Checkbox", link: "/core/form/checkbox" },
          { text: "File", link: "/core/form/file" },
          { text: "Input", link: "/core/form/input" },
          { text: "Radio", link: "/core/form/radio" },
          { text: "Select", link: "/core/form/select" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Domenico-Tenace-Open-Labs/plus-ultra",
      },
    ],
  },
});
