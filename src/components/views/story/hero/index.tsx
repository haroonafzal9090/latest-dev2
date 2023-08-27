function OurStoryHero() {
    return (
      <div className="relative z-0 top-0 ">
       
       {/* Text */}
       <div className="absolute inset-x-0 top-1/4 z-20 text-center text-red-50">
          <p className="mb-5 text-sm max-md:text-sm">OUR STORY</p>
          <h2 className="text-6xl max-md:text-3xl max-lg2:text-4xl">We Dare <br/> To Be Different</h2>
          <p className="text-lg font-normal mt-5 mx-8">& we invite you to do the same</p>
        </div>
  
       {/* Opacity Layer */}
       <div
          className="absolute inset-0 z-10 bg-black opacity-20 w-full h-[500px]">
       </div>
  
        {/* Video */}
        <div>
          <video
            muted
            autoPlay
            loop
            src= "https://res.cloudinary.com/dkbtayo2l/video/upload/v1691176906/VID-20230804-WA0011_eik529.mp4"
            className="w-full object-cover mx-auto "
            style={{ height: "500px", width: "100%" }}
          ></video>
        </div>
      </div>
    );
  }
  
  export default OurStoryHero;