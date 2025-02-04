import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";
import { robots } from "vite-plugin-robots";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    robots({}),
    createSvgSpritePlugin({
      symbolId: "icon-[name]-[hash]",
      // include: ["**/icons/**.svg", "**/icons/sections/**.svg"],
      include: ["**/sprite/**.svg"],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
