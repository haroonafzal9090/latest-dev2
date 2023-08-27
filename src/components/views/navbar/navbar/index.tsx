"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownMenu from "../dropdownmenu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LiaShoppingBagSolid, LiaUserCircleSolid } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";
import HamBurgerMenu from "../hamburgermenu";
import FreeShippingSlider from "../freeshippingslider";
import SearchBar from "../searchbar";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [openHamBurger, setOpenHamBurger] = useState(false);
  const [hideCenterButtons, setHideCenterButtons] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  // For small screens
  const menuVisible = true;

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrolling(currentPosition > 0);
      setScrollDirection(
        currentPosition > scrollPosition
          ? "down"
          : currentPosition < scrollPosition
          ? "up"
          : "none"
      );
      setScrollPosition(currentPosition);
    };

    // Attach the scroll event listener only if window is available
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener on unmount
    return () => {
      window && window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Default value if window is not available
  let middleOfScreen = 0;
  if (typeof window !== "undefined") {
    middleOfScreen = window.innerHeight / 2;
  }
  const scrolledToMiddle = scrollPosition > middleOfScreen;
  const scrolledUpFromMiddle =
    scrollPosition < middleOfScreen && scrollDirection === "up";

  // Check if the page is at the top
  const scrolledToTop = scrollPosition === 0;

  const navbarHidden =
    // Don't hide the Navbar when scrolled to the top on small screens
    !(scrolledToTop && menuVisible) &&
    // Hide Navbar when scrolling down and beyond the middle (on small screens)
    ((scrolling && scrollDirection === "down" && scrolledToMiddle) ||
      // Show Navbar when scrolling up from beyond the middle (on small screens)
      (!scrolling && scrolledUpFromMiddle));

  const handleHamBurgerClick = () => {
    // If dropdown is already visible, do not close it
    if (dropdownVisible) {
      setDropdownVisible(false);
    }

    // If dropdown is not visible, open the center buttons and toggle the hamburger menu state
    setOpenHamBurger((prevOpen) => !prevOpen);
    setHideCenterButtons(false);

    // Toggle inline CSS to prevent scrolling
    if (!document.body.style.overflow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // Back button for small screens
  const handleBackButtonClick = () => {
    if (dropdownVisible) {
      setDropdownVisible(false);
      setHideCenterButtons(false);
      document.body.style.overflow = ""; // Re-enable scrolling
    }
  };

  // Hide the center buttons when the "Shop" button is clicked on small screens
  const handleShopButtonClick = () => {
    setHideCenterButtons(true);
  };

  // Function to handle closing both center buttons and dropdown menu for small screens
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setHideCenterButtons(true);
      setDropdownVisible(false);

      // Toggle the hamburger menu state
      setOpenHamBurger((prevOpen) => !prevOpen);
      setHideCenterButtons(false);
    } else {
      setDropdownVisible(false);
    }
  };

  const handleSearchBar = () => {
    setShowSearchBar(!showSearchBar);

    // Toggle overflow property to prevent scrolling
    if (!showSearchBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className={`relative `}>
      {/* Navbar with blur effect */}
      <div
        className={`
        ${navbarHidden ? "-translate-y-[100%]" : "translate-y-0"} 
        fixed left-0 top-0 z-50 h-24 w-full bg-white bg-opacity-50 backdrop-blur-md md:h-32 lg:h-24 pb-8`}
        style={{ transition: `transform 500ms ease-in-out` }}
      >
        <div className={``}>
          <FreeShippingSlider />
        </div>
        <div className="flex h-full items-center justify-between px-5 lg:px-10">
          {/* Hamburger Menu */}

          <HamBurgerMenu
            openHamBurger={openHamBurger || dropdownVisible}
            onClick={handleHamBurgerClick}
          />

          {/* Betty Logo */}

          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="ml-7 text-3xl font-extrabold text-gray-800 md:text-5xl lg:ml-0 lg:text-3xl"
          >
            Betty
          </Link>

          {/* Center Buttons */}

          <div
            className={`absolute left-0 top-24 z-50 h-screen w-screen transition-all duration-300 ease-in-out md:top-32 lg:relative lg:top-0 lg:h-auto lg:w-auto lg:bg-opacity-0 lg:bg-none lg:backdrop-blur-none lg:transition-none
               ${
                 openHamBurger
                   ? "translate-x-0 bg-stone-300/95 opacity-100"
                   : "-translate-x-0.5 opacity-0 lg:flex lg:translate-x-0 lg:opacity-100"
               } ${hideCenterButtons ? "hidden" : ""}`}
          >
            <ul className="mt-10 flex flex-col items-center space-x-2 space-y-5 pl-5 text-left text-base font-semibold text-gray-800 md:mt-20 md:space-y-7 md:pl-10 md:text-2xl lg:mt-0 lg:h-full lg:flex-row lg:space-y-0 lg:pl-0 lg:text-base">
              {/* Home Button */}

              <li className="w-full pl-1 lg:w-auto lg:pl-0">
                <Link
                  href={"/"}
                  onClick={handleLinkClick}
                  className="mt-10 px-4 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700 lg:mt-0 "
                >
                  Home
                </Link>
              </li>

              {/* Shop Button */}

              <li className="w-full lg:h-20 lg:w-auto">
                <div
                  className="h-auto lg:h-full"
                  onMouseEnter={() => setDropdownVisible(true)}
                  onMouseLeave={() => setDropdownVisible(false)}
                >
                  <button
                    className="flex h-auto items-center px-4 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700 lg:h-full"
                    onClick={handleShopButtonClick}
                  >
                    Shop
                    <span className="ml-4 block lg:hidden">
                      <MdOutlineKeyboardArrowRight className="h-6 w-6 md:h-7 md:w-7" />
                    </span>
                  </button>
                </div>
              </li>

              {/* Our Story Button*/}

              <li className="w-full lg:w-auto">
                <Link
                  href={"/story"}
                  onClick={handleLinkClick}
                  className="px-4 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
                >
                  Our Story
                </Link>
              </li>

              {/* Blog Button */}

              <li className="w-full lg:w-auto">
                <Link
                  href={"/blog"}
                  onClick={handleLinkClick}
                  className="px-4 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
                >
                  Blog
                </Link>
              </li>

              {/* FAQs Button*/}

              <li className="w-full lg:w-auto">
                <Link
                  href={"/faqs"}
                  onClick={handleLinkClick}
                  className="px-4 decoration-2 underline-offset-[10px] hover:underline hover:decoration-gray-700"
                >
                  FAQs
                </Link>
              </li>
            </ul>

            {/* User / Account button for smaller screens */}

            <div className="mt-10 block px-10 md:px-14 lg:hidden">
              <hr className="mb-3 h-[0.5px] w-full border-none bg-gray-600" />
              <Link
                href=""
                onClick={handleLinkClick}
                className="flex items-center text-base font-medium text-gray-800 md:text-2xl"
              >
                Account
              </Link>
            </div>
          </div>

          {/* Icons on the right side of navbar */}

          <div className="flex items-center space-x-2 md:space-x-5">
            {/* Search Icon */}
            <Link href="" onClick={handleSearchBar}>
              <LuSearch className="mt-0.5 h-[26px] w-[26px] text-gray-800 md:h-10 md:w-10 lg:h-[26px] lg:w-[26px]" />
            </Link>

            {/* Show Search Bar  */}
            {showSearchBar && (
              <div>
                <SearchBar onClose={handleSearchBar} />
              </div>
            )}

            {/* Cart Icon */}

            <Link href="" className="" onClick={handleLinkClick}>
              <div className="relative">
                <LiaShoppingBagSolid className="h-8 w-10 text-gray-800 md:h-12 md:w-16 lg:h-8 lg:w-10" />
                <div className="absolute left-0 top-1 flex h-8 w-10 items-center justify-center text-xs  font-semibold text-red-700 md:h-12 md:w-16 md:mt-0.5 lg:mt-0 md:text-base lg:h-8 lg:w-10 lg:text-xs">
                  12
                </div>
              </div>
            </Link>

            {/* Account / User Icon */}

            <Link href="" className="hidden lg:block" onClick={handleLinkClick}>
              <LiaUserCircleSolid className="mt-0.5 h-7 w-7 text-gray-800 md:h-7 md:w-7 lg:h-8 lg:w-8" />
            </Link>
          </div>

          {/* DropdownMenu */}

          <div
            className={`${
              dropdownVisible
                ? "translate-x-0 opacity-100 ease-in-out lg:translate-y-0"
                : "-translate-x-0.5 opacity-0 duration-200 ease-in-out lg:-translate-y-0.5"
            } ${
              navbarHidden
                ? "top-24 duration-500 md:top-32 lg:top-24"
                : "top-24 duration-[710ms] md:top-32 lg:top-24"
            } fixed left-0 z-50 w-full transform transition-all lg:absolute`}
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            {dropdownVisible && (
              <div>
                <DropdownMenu
                  handleBackButtonClick={handleBackButtonClick}
                  handleLinkClick={handleLinkClick}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
