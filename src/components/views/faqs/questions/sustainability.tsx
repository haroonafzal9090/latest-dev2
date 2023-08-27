'use client'

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import React, { useState } from "react";

interface QuestionProps {
  question: string;
  answer: string;
}

function Question({ question, answer }: QuestionProps) {
  const [open, setOpen] = useState(false);

  const toggleDetails = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <details
      className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      open={open}
    >
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
        onClick={toggleDetails}
      >
        <h2 className="font-medium">{question}</h2>
        {open ? (
          <AiOutlineMinusCircle className="h-5 w-5 mx-1 text-gray-900" />
        ) : (
          <AiOutlinePlusCircle className="h-5 w-5 mx-1 text-gray-900" />
        )}
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">{answer}</p>
    </details>
  );
}

export default function Sustainability() {
  return (
    <div>
      <div className="space-y-4 mx-1 py-8">
        <h2 className="md:text-2xl max-lg2:text-4xl text-gray-700">
        Sustainability
        </h2>
        <Question
          question="How do you choose what materials to use?"
          answer="Each piece we create is the product of years of designing, sourcing, and producing with the highest-quality materials and with like-minded production partners. We thoroughly research and vet our raw materials to make sure they meet our standards, are good for you and better for the environment. In addition to thinking about the impact on people and the environment, we consider factors like availability, preferred fiber content, water and energy input, and GHG emissions.

          Act natural. We also use mostly natural materials, which break down better and are less of a pollutant than the synthetic fibers that are being found in oceans and water supplies. "
        />
        <Question
          question="Where are your products made?"
          answer="We like our fabric quality like we like our sleep quality: premium. We source and manufacture our apparel all over the world depending on where we can find the highest quality fabrics and excellent factories that can produce garments to the standards our customers expect. 

          We partner with world-class manufacturers that are committed to fair and equitable practices. The more we grow, and as our manufacturing quantities increase, this will continue to be a priority for us. When developing a product, we choose countries that are best-in-class at the desired raw material fiber and quality, over less expensive labor. "
        />
        <Question
          question="What are you doing to be more sustainable?"
          answer="Trust us when we say our sustainability goals are as ambitious as waking up before the alarm. These goals are designed to innovate and better how we design and manufacture, which means that we: thoughtfully consider and care about the materials we source, the production methods we use, how we distribute and our practices at our headquarters and Bedroom locations.

          In addition to our fabric selection and how we manufacture, we are also doing what we can by minimizing production quantities with demand-oriented ordering to minimize unnecessary waste and unnecessary production. 
          
          We are on a journey of progress and as we continue to grow and evolve as a business, we are committed to sharing with you, the actions being taken towards positive change to care for the planet and its people.
          
          To us, being sustainable is about responsible and ethical choices and doing our best to do what’s right for our employees, workers, our customers, and the world around us. "
        />
      </div>
    </div>
  );
}