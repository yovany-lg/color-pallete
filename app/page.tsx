import { ColorPallete } from "@/components/color-pallete";
import { getColors } from "@/lib/colors";
import { PageHeader } from "@/components/page-header";

const colors = getColors();

export default function Home() {
  return (
    <div>
      <PageHeader />
      <section className="border-b">
        <div className="container-wrapper py-6">
          <ColorPallete colors={colors} />
        </div>
      </section>
    </div>
  );
}
