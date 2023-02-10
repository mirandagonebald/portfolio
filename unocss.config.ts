import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      scale: 1.2,
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
      },
    }),
    presetTypography(),
    presetHeroPatterns(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
