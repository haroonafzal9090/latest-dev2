import Image from "next/image";
import brown from "@/components/assets/images/faq/brown.jpg"

export default function FaqHero() {
    return (
      <section className="relative w-full h-96 md:h-[400px] my-10"> 
      {/* Background Image */}
     <Image
        src={brown}
        alt="Black Bag"
        layout="fill"
        objectFit="cover"
        className="z-0"
      /> 
        {/* Opacity Layer   */}

  <div className="absolute inset-0 bg-black opacity-20"></div>


  {/* Text */}
  <div
    className="absolute inset-0 flex flex-col justify-center items-center h-full text-red-50"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-6xl max-md:text-3xl max-lg2:text-4xl">
      Customer Help
      </h1>

      <p className="text-center text-lg font-normal mt-5 mx-8">
      If talking to a real-life human is more your thing, you can reach our Customer Happiness Team via{" "}
      <a href="/contactus" title="Contact Us" className="underline">email</a>
      </p>
      </div>
  </div>
</section>
    );
  }
  