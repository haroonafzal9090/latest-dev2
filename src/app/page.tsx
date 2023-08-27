import {
  LeatherBagData,
  ShoulderBagData,
  TateBagData,
  collectionData,
} from "@/components/utils/homeslidesarray";
import CollectionCarousel from "@/components/views/home/collectionslide";
import BagsCarousel from "@/components/views/home/homebagscarousel";
import BigImageInCarousel from "@/components/views/home/imagebtwslide";
import Betty from "@/components/views/home/betty";
import Protection from "@/components/views/home/protection";
import Collection from "@/components/views/home/collection";
import HeroSection from "@/components/views/home/hero";
import MoreWays from "@/components/views/home/moreways";
import SimpleSlider from "@/components/views/home/slider";
import HomeVideo from "@/components/views/home/video";
import { data } from "@/components/views/productList/data";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* Tote bag slider component */}

      <BagsCarousel
        data={TateBagData}
        title="Tote Bags"
        link="https://google.com"
      />

      <BigImageInCarousel />

      {/* Shoulder bag slider component */}

      <BagsCarousel
        data={ShoulderBagData}
        title="Shoulder Bags"
        link="https://google.com"
      />
      {/* sajid collection section 5 */}
      <div className="flex flex-col  overflow-hidden">
        <Collection />
      </div>

      {/* Leather bag slider component */}

      <BagsCarousel
        data={LeatherBagData}
        title="Leather like Bags"
        link="https://google.com"
      />

      <SimpleSlider />
      {/* Section 8 */}
      <Protection />

      {/* Colection slider component */}
      
      <CollectionCarousel data={data} />

      <MoreWays />
      <HomeVideo />
      <Betty />
    </main>
  );
}
