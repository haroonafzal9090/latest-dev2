import React, { useState } from "react";
import Circle from "@/components/ui/Circle";
import PriceRange from "@/components/views/priceRange";

interface MyProps {
  heading: string;
  subHeading?: string[] | null;
}

const SubComponent5 = (props: MyProps) => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  const divStyles = {
    cursor: "pointer",
    fontSize: "1.5rem",
    transform: show ? "rotate(0deg)" : "rotate(180deg)",
    transition: "all 0.3s ease",
  };
  const dropdownStyles = {
    transform: show ? "scaleY(1)" : "scaleY(0)",
    opacity: show ? "1" : "0",
    height: show ? "auto" : "0",
    overflow: "hidden",
    transformOrigin: "top",
    transition: "transform 0.3s ease, opacity 0.3s ease, height 0.3s ease", // Include both transform, opacity, and height properties in the transition
  };
  return (
    <div className="flex flex-col border-b border-gray-300 max-md:pb-2">
      <div className="flex justify-between">
        <div className="mt-3 text-base ">{props.heading}</div>
        <div
          onClick={handleClick}
          className=" -mb-1 cursor-pointer text-3xl focus:rotate-180 delay-300 transition-all ease-in-out duration-500"
          style={divStyles}
        >
          {show ? "-" : "+"}
        </div>
      </div>

      <div className="ml-2 mt-1" style={dropdownStyles}>
        {props.subHeading == null ? (
          <div className="-ml-2 -mt-4">
            {" "}
            <PriceRange />{" "}
          </div>
        ) : (
          <div></div>
        )}

        {props.subHeading?.map((item) => (
          <div className="flex my-2" key={item}>
            <Circle /> <span className="pl-3">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubComponent5;
