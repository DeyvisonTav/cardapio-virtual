import { BannerComponent } from "@/components/banner";
import { ProductsComponent } from "@/components/products";
import { TicktsComponent } from "@/components/tickets";

export default function Home() {
  return (
    <div>
      <BannerComponent />
      <TicktsComponent />
      <ProductsComponent />
    </div>
  );
}
