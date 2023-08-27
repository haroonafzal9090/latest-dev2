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
        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-700"
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

export default function Ordering() {
  return (
    <div>
      <div className="space-y-4 mx-1 py-8">
        <h2 className="md:text-2xl max-lg2:text-4xl text-gray-700">
          Ordering
        </h2>
        <Question
          question="What size should I buy?"
          answer="If you’re not quite sure which size is right for you, refer to our size guides. They're located underneath the available sizes for each of our products. For any additional questions, contact us. We will ask your typical size and how you like to wear your tops, shorts, and pants so we can suggest the best size for you!"
        />
        <Question
          question="Can I cancel my order?"
          answer="We completely get it, we change our minds too! While we wish we could, once an order is placed, we are unable to alter or cancel it at this time. We hope to have a cancellation window one day in the future."
        />
        <Question
          question="What if I want to speak to someone?"
          answer="We want to speak to you too! Contact us with any questions, concerns, or feedback. We will be sure to get back to you within 48 hours. However, please note that inquiries sent on Fridays will receive a reply the following Monday, but possibly sooner."
        />
      </div>
    </div>
  );
}