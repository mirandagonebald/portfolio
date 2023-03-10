import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
        mdi: () =>
          import("@iconify-json/mdi/icons.json").then((i) => i.default),
        akar: () =>
          import("@iconify-json/akar-icons/icons.json").then((i) => i.default),
      },
    }),
    presetTypography(),
    presetWebFonts({
      provider: "bunny",
      fonts: { aldrich: "Aldrich" },
    }),
    presetHeroPatterns(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
