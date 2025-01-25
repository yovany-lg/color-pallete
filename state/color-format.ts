import { atom } from "jotai";

export enum ColorFormat {
  Hex = "hex",
  Rgb = "rgb",
  Hsl = "hsl",
}

export const colorFormatAtom = atom<ColorFormat>(ColorFormat.Hex);
