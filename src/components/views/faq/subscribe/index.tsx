import Image from "next/image";
import { BsArrowRight } from 'react-icons/bs';
import BackgroundImg from "@/components/assets/images/faq/background1.jpg"


function Subscribe2() {
    return <div className="relative text-white text-center">
        {/* Next.js Image component */}
        <Image
            src={BackgroundImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="bg-fixed"
        />
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="md:py-36 py-24 relative">
            <h1 className="md:text-5xl text-3xl pt-2 font-semibold">Subscribe to our newsletter</h1>
            <h5 className="pt-5 md:px-0 px-2 font-semibold">Sign up to our newsletter and we’ll keep you up to date with the latest arrivals.</h5>
            <div className="flex items-center mx-auto gap-x-3 border-b-2 pb-2 md:w-[30%] w-[60%] mt-9">
                <input
                    type="text"
                    className="px-2 focus:outline-none w-[100%] placeholder-white bg-transparent"
                    size={20}
                    placeholder="Email"
                />
                <BsArrowRight size={25} />
            </div>
        </div>
    </div>
}

export default Subscribe2;



