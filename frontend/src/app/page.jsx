"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography, Grid } from "@mui/material"
import SplashImage from "@/assets/spirometer-closeup.gif";
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
          src={SplashImage}
          alt="Splash Image"
        />
        <h1 className="absolute text-white text-8xl">
          <b>SpiroVR</b>
        </h1>
        <p className="absolute mt-32 text-white">
          An engaging spirometry test suite
        </p>
      </div>

      {/* Briefing */}
      <div id="about" className="h-1/3 py-16 p-8 md:p-24 text-foreground text-center">
        <p>
          <b>SpiroVR</b> is a collection of engaging mini games that act to enhance
          the patient experience when completing spirometry tests. It utilizes
          an arduino coupled with a spirometer sensor to obtain differential
          pressure data corresponding to the user's lung volume. SpiroVR allows
          patients to become enveloped in a virtual world with engaging tasks that
          require the user to perform actions mirroring a spirometry test. By doing
          this, patients are distracted from the potentially stressful medical
          environment and are encouraged to perform well on the test.
        </p>
      </div>

      {/* Details */}
      <div className="p-8 md:p-12">
        <Grid container columns={{ xs: 1, md: 2 }} rowSpacing={4} rowGap={true} columnGap={true} columnSpacing={4} className="pl-8">
          <Grid item xs={0.99} className="flex bg-white p-4 rounded-sm shadow-sm">
            <Link href={"/"}>
              <Image className="-ml-4" src={Arduino}/>
            </Link>
            <p>
              We use an <b>Arduino</b> coupled with a spirometer sensor to retrive differential pressure data which can then be used to determine lung volume.
            </p>
          </Grid>
          <Grid item xs={0.99} className="flex bg-white p-4 rounded-sm shadow-sm">
            <Link href={"/"}>
              <Image className="w-72 -ml-4" src={MPX}/>
            </Link>
            <p>
              A <b>MPX5010DP</b> pressure sensor is the crucial compoent of the spirometer. It allows us to measure air pressure differentials, which can then be used to estimate lung volume.
            </p>
          </Grid>
          <Grid item xs={0.99} className="flex bg-white p-4 rounded-sm shadow-sm">
            <Link href={"/"}>
              <Image className="-ml-4" src={Ardity}/>
            </Link>
            <p>
              <b>Ardity</b> is a Unity Plugin which allows us to connect the arduino & spirometer with Unity VR so that we can utilize sensor data within the application.
            </p>
          </Grid>
          <Grid item xs={0.99} className="flex bg-white p-4 rounded-sm shadow-sm">
            <Link href={"/"}>
              <Image className="w-[400px] -ml-4" src={UnityPreview}/>
            </Link>
            <p>
              We use <b>Unity</b> as the base engine for the VR application. It provides ample customizability and seamless support for external sensors.
            </p>
          </Grid>
        </Grid>
      </div>

      {/* Dev Log */}
      <div className="px-8 pb-8 text-center">
        <p>
          Want to follow our development? Learn more <Link href={"/blog"}><b>here</b></Link>.
        </p>
      </div>
    </main>
  );
}
