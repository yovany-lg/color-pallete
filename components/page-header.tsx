"use client";

import { useAtom } from "jotai";
import { ColorFormat, colorFormatAtom } from "@/state/color-format";

export function PageHeader() {
  return (
    <section className="border-b">
      <div className="container-wrapper">
        <div className="container py-12 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Color Picker</h1>
          <p className="text-foreground/70">
            Pick a color from the palette and copy the code to your clipboard.
          </p>
          <ColorFormatSelect />
        </div>
      </div>
    </section>
  );
}

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ColorFormatSelect() {
  const [colorFormat, setColorFormat] = useAtom(colorFormatAtom);

  return (
    <Select
      value={colorFormat}
      onValueChange={(value) => setColorFormat(value as ColorFormat)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={ColorFormat.Hex}>Hex</SelectItem>
          <SelectItem value={ColorFormat.Rgb}>RGB</SelectItem>
          <SelectItem value={ColorFormat.Hsl}>HSL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
