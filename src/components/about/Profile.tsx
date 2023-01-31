import { useState } from "react";
import { aboutSections } from "../../utils/ContextProvider";

const logo = "/assets/logo-coloured/android-chrome-512x512.png";

type propsType = {
  direction: "left" | "right" | "none";
  opened: aboutSections;
};

const Profile = (props: propsType) => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");

  return (
    <div
      className={
        "grid px-8 py-2 content-center justify-self-center gap-x-6 " +
        "grid-flow-col-dense auto-cols-min font-semibold " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <div className="grid grid-row-col-dense auto-rows-min justify-items-center gap-y-3 ">
        <div
          className={
            "border-solid border-black border-4 rounded-full overflow-clip " +
            "w-56 aspect-square drop-shadow-xl "
          }
        >
          <img src={logo} alt="Me" className="w-full " />
        </div>
        <div className="w-56 border-[2.5px] border-black p-3 ">
          <p className="text-lg underline underline-offset-4 pb-0.5 ">Name</p>
          Full: Boladale Ogunleye
          <br />
          Preferred: Seun
          <br />
          Github: cielestrial
          <br />
          Codechef: cielestrial
        </div>
      </div>
      <div
        className={
          "grid grid-flow-row-dense auto-rows-min " +
          "border-[2.5px] border-black p-3 "
        }
      >
        <p className="text-lg underline underline-offset-4 indent-4 pb-1 ">
          Skills
        </p>
        <div className="grid grid-flow-col-dense auto-cols-min gap-x-3 ">
          <ul className="w-max pl-8 list-disc ">
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>SASS/SCSS</li>
            <li>TailwindCSS</li>
            <li>Mantine</li>
            <li>Bootstrap</li>
          </ul>

          <ul className="w-max pl-8 list-disc pr-4 ">
            <li>Node.js</li>
            <li>Express</li>
            <li>REST APIs</li>
            <li>Figma</li>
            <li>Java</li>
            <li>C#</li>
            <li>C</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
