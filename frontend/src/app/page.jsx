"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography, Grid } from "@mui/material";
import ArcheryDemo from "@/assets/archerydemolatest.gif";
import Arduino from "@/assets/arduino-logo.png";
import Ardity from "@/assets/ardity-logo.png";
import MPX from "@/assets/mpx.jpeg";
import UnityPreview from "@/assets/unity-preview.png";

export default function Home() {
  return (
    <main className="min-h-screen h-full bg-background">
      {/* Splash */}
      <div className="h-screen flex items-center justify-center">
        <Image
          className="object-cover h-full w-full"
          src={ArcheryDemo}
          alt="Splash Image"
          unoptimized
        />
        <h1 className="absolute text-white text-8xl">
          <b>SpiroVR</b>
        </h1>
        <p className="absolute mt-32 text-white">
          An engaging spirometry test suite
        </p>
      </div>

      {/* Briefing */}
      <div
        id="about"
        className="h-1/3 py-16 p-8 md:p-24 text-foreground text-center"
      >
        <p>
          <b>SpiroVR</b> is a collection of engaging mini games that act to
          enhance the patient experience when completing spirometry tests. It
          utilizes an arduino coupled with a spirometer sensor to obtain
          differential pressure data corresponding to the user&apos;s lung
          volume. SpiroVR allows patients to become enveloped in a virtual world
          with engaging tasks that require the user to perform actions mirroring
          a spirometry test. By doing this, patients are distracted from the
          potentially stressful medical environment and are encouraged to
          perform well on the test.
        </p>
      </div>

      {/* Details */}
      <div className="p-8 md:p-12">
        <Grid
          container
          columns={{ xs: 1, md: 2 }}
          rowSpacing={4}
          rowGap={true}
          columnGap={true}
          columnSpacing={4}
          className="pl-8"
        >
          <Grid
            item
            xs={0.99}
            className="flex bg-white p-4 rounded-sm shadow-sm"
          >
            <Link href={"/"}>
              <Image className="-ml-4" src={Arduino} alt="Arduino" />
            </Link>
            <p>
              We use an <b>Arduino</b> coupled with a spirometer sensor to
              retrive differential pressure data which can then be used to
              determine lung volume.
            </p>
          </Grid>
          <Grid
            item
            xs={0.99}
            className="flex bg-white p-4 rounded-sm shadow-sm"
          >
            <Link href={"/"}>
              <Image className="w-72 -ml-4" src={MPX} alt="MPX" />
            </Link>
            <p>
              A <b>MPX5010DP</b> pressure sensor is the crucial compoent of the
              spirometer. It allows us to measure air pressure differentials,
              which can then be used to estimate lung volume.
            </p>
          </Grid>
          <Grid
            item
            xs={0.99}
            className="flex bg-white p-4 rounded-sm shadow-sm"
          >
            <Link href={"/"}>
              <Image className="-ml-4" src={Ardity} alt="Ardity" />
            </Link>
            <p>
              <b>Ardity</b> is a Unity Plugin which allows us to connect the
              arduino & spirometer with Unity VR so that we can utilize sensor
              data within the application.
            </p>
          </Grid>
          <Grid
            item
            xs={0.99}
            className="flex bg-white p-4 rounded-sm shadow-sm"
          >
            <Link href={"/"}>
              <Image
                className="w-[400px] -ml-4"
                src={UnityPreview}
                alt="Unity preview"
              />
            </Link>
            <p>
              We use <b>Unity</b> as the base engine for the VR application. It
              provides ample customizability and seamless support for external
              sensors.
            </p>
          </Grid>
        </Grid>
      </div>

      {/* Pricing */}
      <div className="bg-white p-8 mx-12 mb-4">
        {/* Options */}
        <div className="flex">
          <div className="w-1/3 px-4">
            <h2 className="text-center text-xl">
              <b>Breath Sensor Bundle</b>
            </h2>
            <ul>
              <li>
                - One time purchase of a <b>SpiroVR Breath Sensor</b> along with{" "}
                <b>SpiroVR</b>
              </li>
              <li>- Compatible with existing VR headsets</li>
              <li>
                - Comes with <b>3 exciting minigames:</b>
              </li>
              <div className="ml-8">
                <ul>
                  <li>
                    - <b>Archery Practice</b>
                  </li>
                  <li>
                    - <b>Wizard Battle</b>
                  </li>
                  <li>
                    - <b>Bubble Blower</b>
                  </li>
                </ul>
              </div>
            </ul>
            <h2 className="text-center text-xl mt-4">
              <b>$49</b>
            </h2>
          </div>

          <div className="w-1/3 px-4">
            <h2 className="text-center text-xl">
              <b>Breath Sensor Bundle</b>
            </h2>
            <ul>
              <li>
                - One time purchase of <b>SpiroVR</b>, the{" "}
                <b>SpiroVR Breath Sensor</b> and the <b>SpiroVR Headset</b>
              </li>
              <li>
                - Comes with <b>3 exciting minigames:</b>
              </li>
              <div className="ml-8">
                <ul>
                  <li>
                    - <b>Archery Practice</b>
                  </li>
                  <li>
                    - <b>Wizard Battle</b>
                  </li>
                  <li>
                    - <b>Bubble Blower</b>
                  </li>
                </ul>
              </div>
            </ul>
            <h2 className="text-center text-xl mt-10">
              <b>$199</b>
            </h2>
          </div>

          <div className="w-1/3 px-4">
            <h2 className="text-center text-xl">
              <b>Subscription</b>
            </h2>
            <ul>
              <li>
                - A <b>personal, all-inclusive</b> SpiroVR setup in your home.
                Includes:
              </li>
              <div className="ml-8">
                <ul>
                  <li>
                    - <b>SprioVR Headset</b>
                  </li>
                  <li>
                    - <b>SprioVR Breath Sensor</b>
                  </li>
                  <li>
                    - <b>Instant access to brand new minigames</b>
                  </li>
                </ul>
              </div>
            </ul>
            <h2 className="text-center text-xl mt-10">
              <b>$25 / mo</b>
            </h2>
          </div>
        </div>
        <h2 className="text-center mt-4">*Price may vary with insurance.</h2>

        <div className="mt-8 flex">
          <div className="">
            <h2>
              <b>Are you a hospital?</b> Reach out to our team!
            </h2>
            <ul className="ml-8">
              <li>- Bulk discounts for hospitals purchasing multiple sets</li>
              <li>
                - Priority technical support and training for hospital staff
              </li>
              <li>- Hospitals can issue SpiroVR to patients as needed</li>
              <li>- Instant access to all new minigames</li>
            </ul>
          </div>

          <div className="ml-8">
            <form className="mt-4 text-center">
              <div>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="outline-1 outline"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="subject">Subject: </label>
                <input
                  type="text"
                  id="subject"
                  className="outline-1 outline"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="" htmlFor="message">
                  Message:{" "}
                </label>
                <textarea id="message" required className="outline-1 outline" />
              </div>
              <button className="outline-1 outline p-2" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Dev Log */}
      <div className="px-8 pb-8 text-center">
        <p>
          Want to follow our development? Learn more{" "}
          <Link href={"/blog"}>
            <b>here</b>
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
