import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function SearchBar({ onClose }: { onClose: () => void }) {
  // User typed input will be saved in searchValue
  const [searchValue, setSearchValue] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const placeholderText = "Type to search";

  useEffect(() => {
    // Delay the setting of `isMounted` to true to trigger the animation
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 0); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleInputFocus = () => {
    if (searchValue === placeholderText) {
      setSearchValue("");
    }
  };

  const handleInputBlur = () => {
    if (searchValue === "") {
      setSearchValue(placeholderText);
    }
  };

  // Access the value of the input field using searchValue
  const handleSubmit = () => {
    // close the search bar
    onClose();

    // Add rest of logic to search for products using searchValue variable
  };

  return (
    <div className="fixed z-[80] top-0 left-0 h-screen w-screen bg-stone-300">
      <div className="flex items-center justify-end mr-8 mt-8">
        {/* Cross Button */}
        <button
          onClick={onClose}
          className="h-8 w-8 md:h-14 md:w-14 lg:h-8 lg:w-8 bg-stone-100 rounded-full flex items-center justify-center z-[100]"
        >
          <span className="text-gray-800 text-4xl md:text-6xl lg:text-4xl cursor-pointer">
            &times;
          </span>
        </button>
      </div>
      {/* input field */}
      <div
        className={`flex flex-col -mt-20 items-center justify-center h-full w-full ${
          isMounted
            ? "opacity-100  transform translate-x-0 duration-700"
            : "opacity-0  transform -translate-x-4"
        } transition-all  ease-in-out`}
      >
        <div className="flex justify-center items w-3/4 lg:w-1/2">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className="w-full text-2xl md:text-4xl lg:text-2xl rounded bg-stone-300 text-gray-800 placeholder-gray-800 focus:outline-none"
            placeholder={placeholderText}
          />
          <button onClick={handleSubmit}>
            <BsArrowRight className="text-gray-800 h-8 w-8 md:h-10 md:w-10 lg:h-8 lg:w-8" />
          </button>
        </div>
        {/* underline */}
        <div className="w-3/4 lg:w-1/2 h-[2px] bg-gray-800 mt-5"></div>
      </div>
    </div>
  );
}
