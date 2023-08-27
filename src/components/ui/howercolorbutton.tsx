import { Ibuttons } from "@/interface";
import Link from "next/link";

const HowerColorButton = (props: Ibuttons) => {
  return (
    <button className="h-14 px-10 text-[15px] font-light bg-white w-full text-black border-black mt-9  shadow-xl hover:shadow-black/50 ">
      <Link href={props.href}>{props.text}</Link>
    </button>
  );
};

export default HowerColorButton;
