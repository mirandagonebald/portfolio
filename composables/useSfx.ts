import { Howl } from "howler";

export const useSfx = (path: string) => {
  const sfx = new Howl({
    src: [path],
    volume: 0.4,
  });

  return sfx;
};
