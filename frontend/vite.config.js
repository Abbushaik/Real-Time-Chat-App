import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import daisyui from "daisyui";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: { extend: {} },
        plugins: [
          // wrap DaisyUI in a function so it executes correctly
          daisyui,
        ],
        daisyui: {
          themes: [
            "light",
            "dark",
            "retro",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
          ],
        },
      },
    }),
  ],
});