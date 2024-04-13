import React from "react"
import Image from "next/image";
import ArcheryDemo from "@/assets/archery-demo.gif";

const Week3 = () => {
  return (
    <div className="bg-white max-w-[1000px] mx-auto rounded-sm shadow-sm m-4 p-4 md:p-24 mb-0">
      <div className="max-w-[800px] m-auto">

        <h2 className="text-2xl"><b>Week 3</b></h2>

        {/* App Development */}
        <h3 className="text-lg my-2">App Development</h3>
        <p>To start off the week, we connected the mouthpiece that we constructed last week to our Unity project using Ardity, a plugin that allows the engine to interface with an arduino.</p>&nbsp;
        <div className="flex justify-center">
          <Image className="w-full max-w-[400px] mb-4" src={ArcheryDemo} alt="Sensor demonstration" />
        </div>
      </div>
    </div>
  )
}

export default Week3