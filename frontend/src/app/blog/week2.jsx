import React from "react";
import Image from "next/image";
import SensorDemo from "@/assets/unity-sensor-demo.gif";
import MenuDemo from "@/assets/menu-demo.gif";
import ArcheryDemo from "@/assets/archery-demo.gif";

const Week2 = () => {
  return (
    <div className="bg-white max-w-[1000px] mx-auto rounded-sm shadow-sm m-4 p-4 md:p-24 mb-0">
      <div className="max-w-[800px] m-auto">
        <h2 className="text-2xl">
          <b>Week 2</b>
        </h2>
        {/* App Development */}
        <h3 className="text-lg my-2">App Development</h3>
        <p>
          To start off the week, we connected the mouthpiece that we constructed
          last week to our Unity project using Ardity, a plugin that allows the
          engine to interface with an arduino.
        </p>
        &nbsp;
        <div className="flex justify-center">
          <Image
            className="w-full max-w-[400px] mb-4"
            src={SensorDemo}
            alt="Sensor demonstration"
          />
        </div>
        <p>
          Within our application, we developed a modular and complete menu
          system that allows for easy customization and templating. The menu
          options are represented as bubbles, and the user highlights them just
          by looking, and selects by breathing into the mouthpiece. This menu
          system will allow us to easily add consistent and intuitive UI
          elements across minigames in our app.
        </p>
        <div className="flex justify-center my-4">
          <Image
            className="w-full max-w-[400px]"
            src={MenuDemo}
            alt="In-game menu demonstration"
          />
        </div>
        <p>
          We also started prototyping minigames that take advantage of our
          unique control scheme, including a breathing-based archery mini game,
          which consists of different rounds of moving targets increasing in
          distance and speed.
        </p>
        &nbsp;
        <div className="flex justify-center my-4">
          <Image
            className="w-full max-w-[400px]"
            src={ArcheryDemo}
            alt="Archery mini game demonstration"
          />
        </div>
        <p>
          Outside of the hardware and the application, the website went through
          somewhat of a redesign with a new color scheme, layout and
          &quot;people&quot; tab, listing the members of our group. The website
          is still incomplete, but is coming together fast!
        </p>
        &nbsp;
        {/* Social Impact */}
        <h3 className="text-lg my-2">Social Impact</h3>
        <p>
          On Friday, we met with Dr. Antonia Popova (Téa&apos;s personal
          pulmonologist). Dr. Popova is a pediatric pulmonologist so we wanted
          to hear her thoughts on what we were making. Her answers were
          extremely insightful, but the most important piece of information that
          she gave us was her thoughts on the potential real-world marketing and
          distribution of the software.
        </p>
        &nbsp;
        <p>
          A spirometry test, while a measure of lung strength and capacity,
          measures a lot of different statistics and data, much of which
          requires precise, carefully calibrated sensors. Because of this, there
          are a lot of guidelines and restrictions to follow, and since the
          tests are not taken often, there is limited need for upgraded
          spirometry equipment in medical settings. However, Dr. Popova also had
          suggestions for another possible market. Airway clearance is a vital
          maintenance tool for patients with pulmonary conditions such as cystic
          fibrosis and chronic obstructive pulmonary disease (COPD). Many of
          these patients need to sit multiple times each day and practice
          breathing exercises to keep their lungs clear. Dr. Popova believed
          that our application, with how easy VR could be to get set up at home,
          could create an appealing way to make the process of undergoing these
          breathing exercises much more engaging and make it easier to keep up
          with.
        </p>
        &nbsp;
        <p>
          After this conversation, we determined that it may be more helpful to
          create a system that could, in the future, be test and/or device
          agnostic, and rather function as a general purpose lung health app. In
          the meantime, we will refocus our project on airway clearance, and
          create minigames that utilize the Huff Coughing Technique (to clear
          mucus).
        </p>
        &nbsp;
        {/* Financial Sustainability */}
        <h3 className="text-lg my-2">Financial Sustainability</h3>
        <p>
          The financial plan remains similar to that of last week, and while we
          still plan to contract with hospitals to provide a better testing
          experience, we now also envision our products at the homes of our
          users who frequently have to practice airway clearance. This can
          happen through the hospital or direct-to-consumer.
        </p>
      </div>
    </div>
  );
};

export default Week2;
