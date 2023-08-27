import { StoryPageCarousel } from "@/components/utils/homeslidesarray";
import AboutTheBags from "@/components/views/story/aboutbags";
import ContenSection from "@/components/views/story/contentsection";
import EthicallySection from "@/components/views/story/ethicalsection";
import OurStoryHero from "@/components/views/story/hero";
import LeatherLikeCollection from "@/components/views/story/leatherlikecollectionslide";

import React from "react";

const page = () => {
  return (
    <main>
      <OurStoryHero />
      <ContenSection />
      <AboutTheBags />
      {/* storypage bag slider component */}

      <LeatherLikeCollection
        data={StoryPageCarousel}
        title="New Leather Like Collection"
        link="https://google.com"
      />
      <EthicallySection />
    </main>
  );
};

export default page;
