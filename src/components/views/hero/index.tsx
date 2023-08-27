import Image from "next/image";
import { data } from "@/components/views/productList/data";

const Hero = (prop: { subUrl: string }) => {
  const { subUrl } = prop;
  const arr = data.filter((name) => name.name === subUrl);
  const obj = arr[0];

  return (
    <div className="relative">
      <Image
        src={obj.bgPic}
        height={9999}
        width={9999}
        alt="hero image"
        className="w-screen h-[448px] object-cover"
      />
      <div className="absolute top-1/3 text-gray-50 left-1/4 w-1/2 max-md:top-1/4">
        <h1 className="text-center text-5xl max-md:text-3xl">{obj.heading}</h1>
        <hr className="h-[2.5px] bg-white w-9 my-4 mx-auto max-md:mt-2" />
        <p className="text-center text-xl max-md:text-base">{obj.paragraph}</p>
      </div>
    </div>
  );
};

export default Hero;
