import React from "react";
import Image from "next/image";
import Image1 from "@/assets/week3/3-1.png";
import Image2 from "@/assets/week3/3-2.png";
import Image3 from "@/assets/week3/3-3.png";

const Week3 = () => {
  return (
    <div className="bg-white max-w-[1000px] mx-auto rounded-sm shadow-sm m-4 p-4 md:p-24 mb-0">
      <div className="max-w-[800px] m-auto">
        <h2 className="text-2xl">
          <b>Week 3</b>
        </h2>
        <p>Welcome to week 3 of SpiroVR development!</p>
        {/* Hardware */}
        <h3 className="text-lg my-2">Hardware</h3>
        <p>
          Our showcase is coming up in a week, so it is important that the
          spirometer device is easily portatble and protected even when handled
          by many people. After downsizing the circuit to only its critical
          parts, we constructed a housing for the new device using plexiglass.
        </p>
        &nbsp;
        <div className="flex justify-center">
          <Image
            className="w-full max-w-[400px] mb-4"
            src={Image1}
            alt="Sensor housing"
          />
        </div>
        <p>
          We also created three new mouthpieces that can be easily sanitized
          with alcohol. The outside is still made with PVC piping, but the
          inside is made with a smaller plastic tube. The “glue” we used is
          silicone sealant, a material that is both airtight and chemically
          inert.
        </p>
        &nbsp;
        <div className="justify-center flex">
          <Image
            className="w-full max-w-[400px] mb-4"
            src={Image2}
            alt="Sanitization for sensor"
          />
        </div>
        <p>
          For extra sanitization at the showcase, we will be providing every
          user with their own mouthpiece cover so that no one’s mouths can
          directly touch the central tube. The vinyl tubing will also be
          completely replaced with every user.
        </p>
        &nbsp;
        <p>
          Because the mouthpiece itself is hard to reproduce at a large scale,
          we will be rotating about 5 mouthpieces around, letting them sit in a
          sanitizing solution before drying them off and letting them be used
          again.
        </p>
        <div className="justify-center flex">
          <Image
            className="w-full max-w-[400px] my-4"
            src={Image3}
            alt="Sanitization for sensor"
          />
        </div>
        {/* App Development */}
        <h3 className="text-lg my-2">App Development</h3>
        <iframe
          src="https://www.youtube.com/embed/eNrQgxX8_S4"
          frameborder="0"
          allowfullscreen
          width={600}
          height={340}
          className="mx-auto my-4"
        />
        <p>
          This week, we improved the main menu and made it fully functional with
          the spirometer. We added a tutorial section (which is missing a video
          tutorial, but is coming soon) which is responsive to breath and cough
          output. This week we introduced a new bowling minigame, as seen in the
          demo video above. The archery mini-game was revised following the
          playtest, rather than the targets moving all around the user, they now
          only move within an arc as to not tangle the user within the wires of
          the headset. Additionally, some animations on the targets and a nice
          terrain were made for the archery game to better engage the user.
        </p>
        <iframe
          src="https://www.youtube.com/embed/O0kxTyxDa1Y"
          frameborder="0"
          allowfullscreen
          width={600}
          height={340}
          className="mx-auto my-4"
        />
        {/* VR Emphasis */}
        <h3 className="text-lg my-2">VR Emphasis</h3>
        <p>
          As seen in our demo video, our games use VR to fully immerse the
          patient. In order to aim their breath output, the player must be
          looking directly at the place they want to aim and provide a steady
          stream of air. Without VR, the aim mechanic would be less intuitive.
          With one of the user’s hands on the breath sensor, a non-VR
          application would be very limited in its input mechanics and ability
          to engage the user.
        </p>
        {/* Financial Sustainability */}
        <h3 className="text-lg my-2">Financial Sustainability</h3>
        <p>
          This week, we added a pricing plan to our website. We have two bundles
          and a subscription available for patients trying to buy directly from
          us. We plan to offer just the spirometry device and three minigames
          for a $49 fee, which is compatible with most existing VR headsets. If
          the patient is completely new to VR, we can offer the headset bundle,
          which has a white labeled VR headset on top of the aforementioned
          device and games. We want to make our technology accessible, so this
          is why these two options are simple one-time-purchases.
        </p>
        &nbsp;
        <p>
          Finally, we have a subscription model for patients who want more
          access to minigames. We plan to release a minigame on a monthly
          schedule, for $25/month. This subscription includes the cost of the
          device and the headset over time.
        </p>
        &nbsp;
        <p>
          We anticipate that hospitals will also be an important consumer of our
          product. We would like to offer a reduced rate when selling in bulk to
          hospitals, and provide the hospital with tech support from our team as
          well as new minigames each month. Depending on the need of the
          hospital, the price will vary, so we will provide a quote to the
          hospital when they fill out our contact form.
        </p>
      </div>
    </div>
  );
};

export default Week3;
