"use client";

import { Color } from "@/lib/colors";
import ColorPicker from "./ColorPicker";
import { useAtom } from "jotai";
import { ColorFormat, colorFormatAtom } from "@/state/color-format";
import { toast } from "sonner";

export function ColorPallete({ colors }: { colors: Color[] }) {
  const [colorFormat] = useAtom(colorFormatAtom);
  const copyToClipboard = (color: Color["colors"][number]) => {
    const value =
      colorFormat === ColorFormat.Hex
        ? color.hex
        : colorFormat === ColorFormat.Rgb
        ? color.rgb
        : color.hsl;

    navigator.clipboard.writeText(value);
    toast.success(`Copied ${value} to clipboard`);
  };

  return (
    <div className="container grid gap-8">
      {colors.map((color) => (
        <ColorPicker
          key={color.name}
          colors={color}
          onColorSelect={(color) => {
            copyToClipboard(color);
          }}
        />
      ))}
    </div>
  );
}
