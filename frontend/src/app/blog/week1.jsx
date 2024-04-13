import React from "react"
import Image from "next/image";
import { Typography } from "@mui/material"
import Arduino from "@/assets/1-1-spiro-arduino.png";
import Diagram from "@/assets/1-2-spiro-diagram.png"
import MouthPiece from "@/assets/1-4-mouthpiece.png";

const Week1 = () => {
  return (
    <div className="bg-white max-w-[1000px] mx-auto rounded-sm shadow-sm m-4 p-4 md:p-24 mb-0">
      <div className="max-w-[800px] m-auto">

        <h2 className="text-2xl"><b>Week 1</b></h2>

        {/* Preface */}
        <h3 className="text-lg my-2">Preface</h3>
        <p>Our project has a few specifications required by our class, EECS 498: Extended Reality and Society. Each week for the remainder of development, we will try to address these specifications and how we have made progress in them. Here are the specifications:</p>&nbsp;
        <ol>
          <li><b>1. Technical Sophistication</b>: Does the software accomplish significant tasks with few bugs?</li>
          <li><b>2. Novelty</b>: Does the software accomplish something rare and non-trivial?</li>
          <li><b>3. Social Impact</b>: Does the software accomplish something impactful beyond the purely-recreational?</li>
          <li><b>4. XR Emphasis</b>: Does the software utilize VR or AR to its fullest extent in a way 2D couldn't replicate?</li>
          <li><b>5. Financial Sustainability</b>: Does the software / website identify a clear path to long-term financial health?</li>
        </ol>
        &nbsp;

        {/* Spirometer Design */}
        <h3 className="text-lg my-2">Spirometer Design</h3>
        <p>This week was mainly focused on the hardware side of our project. In order for our project to function, we needed access to a digital spirometer. These are pricey, so we decided to go the custom hardware route. None of us have much experience with custom circuit design, so the first step of this was to get familiar with microcontrollers. For this project, we used an Arduino Nano (shoutout to Téa's housemate, Dev, who let her borrow the circuitry needed to get the project rolling— it would have been impossible to do it without them!!).</p>&nbsp;
        <p>We managed to get a device working this week that reads air pressure in pascals. Ideally, we need to convert this pressure unit into a volume unit, to measure lung capacity like a true spirometer, but a pressure measurement should work for now.</p>&nbsp;
        <div className="flex justify-center my-4">
          <Image className="w-full max-w-[400px]" src={Diagram} alt="Arduino diagram" />
        </div>
        <p className="text-center text-xs text-gray-400 mb-4">The reference circuit we used for our implementation.</p>
        <p>Below is the circuit we came up with in the end. Note we did not include some of the components shown in the above diagram, as we really only needed the data output from the pressure sensor, and not any of the bells and whistles. Most of the components of this circuit are borrowed, but the vital component of this project is the differential pressure sensor, the MPX5010DP pressure sensor, which had to be bought online.</p>
        <div className="flex justify-center my-4">
          <Image className="w-full max-w-[400px] shadow-sm" src={Arduino} alt="Arduino circuit board" />
        </div>
        <p>Finally, we needed to create the mouthpiece for the spirometer to attach to the pressure sensor. A typical spirometer has an intricate mouthpiece designed for accuracy of measurement. Due to cost limitations, we did not have a super intricate design. The mouthpiece ended up being two nested PVC pipes with vinyl tubing attached to the two ends of the PVC tube.</p>
        <div className="flex justify-center my-4">
          <Image className="w-full max-w-[400px] shadow-sm" src={MouthPiece} alt="Mouth piece" />
        </div>
        <p className="text-center text-xs text-gray-400 mb-4">Our current mouthpiece design.</p>
        &nbsp;

        {/* Novelty and Social Impact */}
        <h3 className="text-lg my-2">Novelty and Social Impact</h3>
        <p>Our goal with this project is to bring some enthusiasm into something that is typically dreaded: hospital visits. Spirometry games already exist— this we know. But for patients who regularly visit the pulmonary unit, providing a unique and entertaining way to interface with a routine medical exam makes the overall experience at the doctor's office less of a stressor in daily life.</p>&nbsp;
        <p>We particularly see a benefit for pediatric patients who may be uneasy about going to appointments. We hope that SpiroVR can provide meaningful distraction to an otherwise stressful experience.</p>
        &nbsp;

        {/* VR Emphasis */}
        <h3 className="text-lg my-2">VR Emphasis</h3>
        <p>Unlike a regular spirometry game, our experience will have ways to spatially interact with the virtual environment— mechanics like aiming your breath output allow the VR emphasis shine.</p>
        &nbsp;

        {/* Financial Sustainability */}
        <h3 className="text-lg my-2">Financial Sustainability</h3>
        <p>We would like to create a model where we can contract with hospitals to provide a better testing experience. With the contract, the addition of new minigames on a schedule would allow the content to be fresh and the cash flow to be sustainable.</p>

      </div>
    </div>
  )
}

export default Week1