"use client";
import React, { useState } from "react";
import Filter from "@/components/ui/Filter";
import CollectionGrid from "@/components/views/productList";
import "./app.css";
import Hero from "@/components/views/hero";

const Main = ({ params }: { params: { name: string } }) => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  const filterbutton = show ? "CLOSE FILTERS" : "SHOW FILTERS";
  const param = params.name;
  return (
    <div className="max-w-screen-2xl w-full mx-auto  text-gray-600">
      {/*Wrapper*/}
      <div className="col-span-2">
        <Hero subUrl={param} />
      </div>
      <div className="min-h-screen grid grid-cols-[1fr,3fr] gap-5 mt-10 relative">
        <div className="p-5 max-h-[800px] max-md:hidden">
          <Filter />
        </div>
        <div
          className="p-5 max-h-[800px] overflow-scroll no-scrollbar max-md:w-screen"
          style={{ scrollbarWidth: "none" }}
        >
          <CollectionGrid subUrl={param} />
        </div>
      </div>
      <div
        className={`${
          show ? "block" : "hidden"
        } absolute bg-white w-full h-full top-0 md:hidden `}
      >
        <div className="fixed h-screen overflow-scroll pb-36 bg-white ">
          <Filter />
        </div>
      </div>
      <div
        className="w-screen h-20 bg-black text-white bottom-0 text-sm fixed flex justify-center items-center md:hidden"
        onClick={handleClick}
      >
        {filterbutton}
      </div>
    </div>
  );
};

export default Main;
