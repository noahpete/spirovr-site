import React from "react"
import Image from "next/image";
import ArcheryDemo from "@/assets/archery-demo.gif"; // import <WhateverNameYouWant> from "@/assets/filename.png" imports from the src/assets folder

const Week3 = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm m-4 p-4 md:p-24 mb-0">
      <div className="">

        <h2 className="text-2xl"><b>Week 3</b></h2>

        {/* Header Here */}
        <h3 className="text-lg my-2">Header Here</h3>
        <p>Main text here</p>

        {/* add images like so, src is what you import above */}
        <Image className="w-full my-4" src={ArcheryDemo} alt="Archery mini game demonstration"/>
      </div>
    </div>
  )
}

export default Week3
