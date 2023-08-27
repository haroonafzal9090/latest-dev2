import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import navbar1 from "../../../assets/images/navbar/navbar1.jpg";
import navbar2 from "../../../assets/images/navbar/navbar2.jpg";

interface DropdownMenuProps {
  handleBackButtonClick: () => void;
  handleLinkClick: () => void;
}
export default function DropdownMenu({
  handleBackButtonClick,
  handleLinkClick,
}: DropdownMenuProps) {
  return (
    <div
      className={`fixed flex h-screen w-screen flex-col overflow-y-auto bg-stone-300/95 px-5 pt-5 pb-5 lg:pb-0 md:flex-row md:pt-20 lg:h-auto lg:px-20 lg:pt-0`}
    >
      {/* Left Side With Text */}

      <div className="flex basis-full flex-col md:basis-1/2 md:text-2xl lg:basis-2/5 lg:flex-row lg:text-base">
        {/* Back button for small screens */}

        <button
          className={`flex items-center p-4 ml-2 font-semibold lg:hidden text-gray-800`}
          onClick={handleBackButtonClick}
        >
          <span className="mr-4 block lg:hidden text-gray-800">
            <MdOutlineKeyboardArrowLeft className="h-6 w-6 md:h-7 md:w-7" />
          </span>
          Back
        </button>

        {/* Text on Left */}

        <div className="w-full px-8 py-4 md:py-10 lg:w-1/2 lg:px-5">
          <h3 className="mb-5">
            {/* Main category */}
            <Link
              href=""
              onClick={handleLinkClick}
              className="font-semibold text-gray-800 transition-all duration-300 ease-in-out hover:text-gray-700"
            >
              Silicone Collection
            </Link>
          </h3>

          {/* Sub-categories */}

          <ul className="space-y-3 font-medium text-gray-700 md:space-y-5 lg:space-y-3">
            <li>
              <Link
                href=""
                onClick={handleLinkClick}
                className="transition-all duration-300 ease-in-out hover:text-gray-800"
              >
                Tote Bags
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={handleLinkClick}
                className="transition-all duration-300 ease-in-out hover:text-gray-800"
              >
                Shoulder Bags
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={handleLinkClick}
                className="transition-all duration-300 ease-in-out hover:text-gray-800"
              >
                Straps
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={handleLinkClick}
                className="transition-all duration-300 ease-in-out hover:text-gray-800"
              >
                Purses
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={handleLinkClick}
                className="transition-all duration-300 ease-in-out hover:text-gray-800"
              >
                Backpacks
              </Link>
            </li>
          </ul>
        </div>

        {/* Text on Right */}

        <div className="w-full px-8 py-5 md:py-10 lg:w-1/2 lg:px-5">
          {/* Main category */}

          <h3 className="mb-5">
            <Link
              href=""
              onClick={handleLinkClick}
              className="font-semibold text-gray-800 transition-all duration-300 ease-in-out hover:text-gray-700"
            >
              Leather Like Collection
            </Link>
          </h3>

          {/* Sub-categories */}

          <ul className="space-y-3 font-medium text-gray-700 md:space-y-6 lg:space-y-3">
            <li>
              <Link
                href=""
                onClick={handleLinkClick}
                className="transition-all duration-300 ease-in-out hover:text-gray-800"
              >
                Tote Bags
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={handleLinkClick}
                className="transition-all duration-300 ease-in-out hover:text-gray-800"
              >
                Hobo Bags
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={handleLinkClick}
                className="transition-all duration-300 ease-in-out hover:text-gray-800"
              >
                Shoulder Bags
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={handleLinkClick}
                className="transition-all duration-300 ease-in-out hover:text-gray-800"
              >
                Straps
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side with Images */}

      <div className="flex h-full basis-full flex-col space-y-7 p-4 md:basis-1/2 md:space-y-24 md:pt-28 lg:h-[19rem] lg:basis-3/5 lg:flex-row lg:space-x-8 lg:space-y-0 lg:p-10 pb-40 md:pb-0">
        {/* Left Image */}

        <Link
          href=""
          className="relative h-[17rem] w-full overflow-hidden lg:h-auto lg:w-1/2"
        >
          <div className="group relative h-full w-full lg:h-full">
            <Image
              src={navbar1}
              alt="nav_image"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-all duration-1000 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Overlay */}

          <div className="pointer-events-none absolute inset-0 bg-black opacity-20"></div>

          {/* Text on Image */}

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center space-y-2">
            <h1 className="text-sm font-semibold text-stone-100">CLASSIC</h1>
            <p className="pb-2 text-3xl text-stone-100">Silicone</p>
            <button className="h-12 rounded-md bg-stone-100 px-8 text-sm text-[#353839]">
              SHOP
            </button>
          </div>
        </Link>

        {/* Right Image */}

        <Link
          href=""
          className="relative h-[17rem] w-full overflow-hidden lg:h-auto lg:w-1/2"
        >
          <div className="group relative h-full w-full lg:h-full">
            <Image
              src={navbar2}
              alt="nav_image"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-all duration-1000 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Overlay */}

          <div className="pointer-events-none absolute inset-0 bg-black opacity-20"></div>

          {/* Text on Image */}

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center space-y-2">
            <h1 className="text-sm font-semibold text-stone-100">
              NEW ARRIVAL
            </h1>
            <p className="pb-2 text-3xl text-stone-100">Like Leather</p>
            <button className="h-12 rounded-md bg-stone-100 px-8 text-sm text-[#353839]">
              SHOP
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
