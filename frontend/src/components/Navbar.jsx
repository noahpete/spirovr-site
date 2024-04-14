import React from "react";
import "@/app/ui/global.css";
import Image from "next/image";
import Link from "next/link";
import SpiroVRLogo from "@/assets/spirovr-logo-navy.png";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow-md p-4 fixed z-10">
      <div className="mx-2 flex">
        {/* Left side */}
        <div className="h-fit my-auto text-foreground text-lg">
          <Link className="flex" href={"/"}>
            <Image src={SpiroVRLogo} className="w-[32px] mr-2" />
            <b>SpiroVR</b>
          </Link>
        </div>

        {/* Right side */}
        <div className="h-fit my-auto ml-auto mr-0 text-foreground">
          <Link className="mr-4" href={"/#about"}>
            About
          </Link>
          <Link className="mr-4" href={"/blog"}>
            Blog
          </Link>
          <Link className="mr-0" href={"/people"}>
            People
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
