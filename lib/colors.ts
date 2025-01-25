import { colors } from "@/registry/registry-colors";

export function getColors(){
  return Object.entries(colors)
      .map(([name, color]) => {
        const sortedColor = color.sort((a, b) => b.scale - a.scale);
        return {
          name: name,
          colors: sortedColor.map((shade) => ({
            ...shade,
            id: `${name}-${shade.scale}`,
          })),
        };
      })
}

export type Color = ReturnType<typeof getColors>[number];