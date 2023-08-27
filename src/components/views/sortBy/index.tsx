import React, { useState } from "react";
import RadioCircle from "./radioCircle";

interface MyProps {
  heading: string;
  subHeading?: string[] | null;
}

const SortBy = (props: MyProps) => {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1); // Initialize with -1 (no selection)

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
    transition: "transform 0.3s ease, opacity 0.3s ease, height 0.3s ease",
  };

  return (
    <div className="flex flex-col border-b border-gray-300 max-md:pb-2">
      <div className="flex justify-between">
        <div className="mt-3">{props.heading}</div>
        <div
          onClick={handleClick}
          className=" -mb-1 cursor-pointer text-3xl focus:rotate-180 delay-300 transition-all ease-in-out duration-500"
          style={divStyles}
        >
          {show ? "-" : "+"}
        </div>
      </div>

      <div className="ml-2 mt-1" style={dropdownStyles}>
        {props.subHeading?.map((item, index) => (
          <div className="flex my-2" key={item}>
            <RadioCircle
              checked={index === selectedIndex}
              onClick={() => setSelectedIndex(index)}
            />
            <span className="pl-3">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortBy;
