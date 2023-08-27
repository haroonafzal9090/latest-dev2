import Image from 'next/image'
import React from 'react'
import Hero1 from "../../../assets/images/story/hero1.jpg"


const AboutTheBags = () => {
  return (
    <section>
    <div className='bg-[#f4f4f4] max-md:mx-4 mt-28  flex max-md:flex-col-reverse items-center md:py-24 max-md:pb-16 md:px-28 gap-20'>

        {/* Left Side */}

        <div className='flex-[3_1] max-w-screen-xl text-center flex flex-col items-center'>
            <h2 className='mb-2 text-3xl font-[370] text-slate-900 '>About The Bags</h2>
            <div className='h-[3px] w-8 bg-black rounded-full pl-10'></div>
            <p className='text-[17px] text-slate-900 max-w-[850px] font-[350] tracking-widest mt-10 px-10'>FABLOUS bags are made from soft, velvety & non-toxic silicone.
             They are highly resistant to stains and scratches.
              Absolutely no hassle.
               No matter what you spill on it - coffee, oil, cranberry juice, nail polish, you can easily wipe it clean with just soap and water.
                FABLOU bags are moulded, which means they are very strong and you don’t need to worry about weight restrictions.
                 They don’t stretch, don’t loose shape and their colour will never fade.
                  They are free of toxic BPAs and are made from 100% vegan materials.</p>
        </div>

        {/* Right Side */}

        <div className='flex-[2_1]'>
            <Image src={Hero1} alt='hero2-image' width={650} height={650} className='w-screen' />
        </div>
    </div>
    </section>
  )
}

export default AboutTheBags;
