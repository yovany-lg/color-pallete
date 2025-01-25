"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Color } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { ColorFormat, colorFormatAtom } from "@/state/color-format";
import { useAtom } from "jotai";

interface ColorPickerProps {
  colors: Color;
  onColorSelect?: (color: Color["colors"][number]) => void;
}

export default function ColorPicker({
  colors,
  onColorSelect,
}: ColorPickerProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [colorFormat] = useAtom(colorFormatAtom);

  return (
    <div className="rounded-lg shadow-sm ring-1 ring-border">
      <h2 className="font-medium p-4 pb-0 capitalize">{colors.name}</h2>
      <div className="flex flex-row p-4">
        {colors.colors.map((color, index) => (
          <motion.button
            key={color.id}
            className={`group relative flex flex-col items-center justify-start aspect-[2/3] max-h-[180px] w-[calc(20%+60px)] -ml-[10%] first:-ml-0 rounded-xl drop-shadow-lg`}
            style={{
              backgroundColor: color.hex,
            }}
            animate={{
              scale:
                hoveredIndex === null
                  ? 1
                  : 1 - Math.abs(hoveredIndex - index) * 0.025,
              zIndex:
                hoveredIndex === index
                  ? 11
                  : 10 - Math.abs((hoveredIndex ?? 0) - index),
            }}
            whileHover={{
              scale: 1.1,
              y: 0,
              zIndex: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => onColorSelect?.(color)}
          >
            <div
              className={cn(
                "absolute top-4 left-0 right-0 text-center transition-all duration-200",
                "group-hover:opacity-100 group-hover:translate-y-0",
                "opacity-0 -translate-y-5 pointer-events-none",
                index > 6 ? "text-foreground/70" : "text-white"
              )}
            >
              <h3 className={cn("text-lg font-bold drop-shadow-lg")}>
                {color.id}
              </h3>
              <p className={cn("text-sm drop-shadow-lg")}>
                {colorFormat === ColorFormat.Hex
                  ? color.hex
                  : colorFormat === ColorFormat.Rgb
                  ? color.rgb
                  : color.hsl}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
