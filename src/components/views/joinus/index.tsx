"use client";
import React, { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Joinus = () => {
  const [closeButton, setcloseButton] = useState(true);
  if (closeButton) {
    return (
      <div className=" fixed flex bottom-2 justify-end w-full z-[100] ">
        <div className="relative flex flex-col bg-white  shadow-md h-96 flex-grow lg:flex-grow-0 lg:w-[450px] space-y-6">
          <AiOutlineClose size={24}
            className="self-end absolute top-5 right-5 text-gray-700 "
            onClick={() => setcloseButton(false)}
          />

          {/* Heading */}
          <div className=" flex flex-col items-center space-y-2">
            <h1 className="font-normal text-2xl text-gray-800">Join Us</h1>
            <p className="w-80 text-center text-sm tracking-wider text-gray-800">
              Entice customers to sign up for your mailing list with discounts
              or exclusive offers.
            </p>
          </div>

          {/* Input field */}
          <div className=" flex flex-col lg:items-center p-2 w-full space-y-2">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow lg:w-96 p-4 border-gray-300 border-[1px]"
            />
            <button className="flex-grow lg:w-96 p-4 bg-gray-700 text-white">
              Subscribe
            </button>
          </div>

          {/* Icons */}
          <div className="flex justify-center items-center space-x-4 pb-4">
            <AiFillFacebook className="w-8 h-8 text-gray-700" />
            <AiFillInstagram className="w-8 h-8 text-gray-700" />
            <BsYoutube className="h-8 w-8 text-gray-700" />
          </div>
        </div>
      </div>
    );
  }
};

export default Joinus;
