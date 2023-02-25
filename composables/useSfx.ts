import { Howl } from "howler";

type Options = {
  loop?: boolean;
  volume?: number;
  duration?: number;
};

export const useSfx = (path: string, options?: Options) => {
  const sound = useLocalStorage("sound", true);
  let sfx: Howl;

  const playSound = () => {
    if (!sfx) {
      sfx = new Howl({
        src: [`${path}.webm`, `${path}.mp3`],
        ...options,
        onplay: () => {
          if (options?.duration) {
            setTimeout(() => {
              sfx.stop();
            }, options.duration);
          }
        },
      });
    }

    if (sound.value) sfx.play();
  };

  return { playSound };
};
