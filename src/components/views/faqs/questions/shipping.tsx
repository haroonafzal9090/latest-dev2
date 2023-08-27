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

export default function Shipping() {
  return (
    <div>
      <div className="space-y-4 mx-1 py-8">
        <h2 className="md:text-2xl max-lg2:text-4xl text-gray-700">
          Shipping
        </h2>
        <Question
          question="What is the shipping policy?"
          answer="Once your order is placed, you will receive a confirmation email letting you know that our fulfillment team has received your order. Once your order is fulfilled, you will receive an email notification with your tracking information. Shipping fees are non-refundable in the case of returns.

          For information about International shipping click here"
        />
        <Question
          question="What shipping providers do you use?"
          answer="We use FedEx for all U.S. orders. Ground shipping for U.S. orders may take up to 5-9 business days to arrive from the day you receive your shipping confirmation."
        />
        <Question
          question="Eff! My package was lost, stolen, or damaged!"
          answer="Oh no! Please file a claim with the shipping carrier first, then contact us letting us know your order number and your specific claim number. Once we receive that, we will work together to come to the best resolution."
        />
      </div>
    </div>
  );
}