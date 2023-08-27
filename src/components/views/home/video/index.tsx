import HowerGrowButton from "@/components/ui/howergrowbutton";

function HomeVideo() {
  return (
    <div className="relative z-0 top-0 my-4 w-full">
     
     {/* Text */}
     <div className="absolute inset-x-0 top-1/4 z-20 text-center text-red-50">
        <p className="mb-5 text-sm max-md:text-sm">HASSLE-FREE</p>
        <h2 className="text-6xl max-md:text-3xl max-lg2:text-4xl">Vintage Charm Stories</h2>
        <p className="text-lg font-normal mt-5 mx-8">Timeless Elegance, Carried Through the Ages.</p>
       {/* Button */}
        <div className="mt-9">
          <HowerGrowButton href="/videos" text="SHOP SILICON" />
        </div>
      </div>

     {/* Opacity Layer */}
     <div
        className="absolute inset-0 z-10 bg-black opacity-20 w-full h-[540px]">
     </div>

      {/* Video */}
      <div className="w-full">
        <video
          muted
          autoPlay
          loop
          src="https://res.cloudinary.com/dkbtayo2l/video/upload/v1691066584/samples/Shopify%20store%20Videos/Bbag_hovmwl.mkv"
          className="w-full h-auto mx-auto object-cover"
          style={{ maxHeight: "540px" }}
         
        ></video>
      </div>
    </div>
  );
}

export default HomeVideo;