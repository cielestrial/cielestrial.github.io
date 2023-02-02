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
        "grid px-[6vmin] content-center justify-self-center gap-x-[4vmin] " +
        "grid-flow-col-dense auto-cols-min " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <div
        className={
          "grid grid-flow-row-dense auto-rows-min lg:grid-flow-col-dense lg:auto-cols-min " +
          "justify-items-center gap-y-[2vmin] gap-x-[4vmin] "
        }
      >
        <div
          className={
            "border-solid border-black border-[1vmin] rounded-full overflow-clip " +
            "w-[48vmin] aspect-square drop-shadow-xl snap-center "
          }
        >
          <img src={logo} alt="Logo" className="w-full " />
        </div>
        <div
          className={
            "w-max border-[0.625vmin] border-black p-[3vmin] " +
            "snap-center snap-always bg-image "
          }
        >
          <p
            className={
              "text-[4.5vmin] sm:text-[3.375vmin] pb-[0.5vmin] " +
              "underline underline-offset-[0.25vmin] -indent-[0.5vmin] " +
              "decoration-from-font font-bold "
            }
          >
            Name
          </p>
          <p className="inline">Full:&#32;</p>
          <p className="inline font-semibold">Boladale Ogunleye</p>
          <br />
          <p className="inline">Preferred:&#32;</p>
          <p className="inline font-semibold">Seun</p>
          <br />
          <p className="inline">Github:&#32;</p>
          <p className="inline font-semibold">cielestrial</p>
          <br />
          <p className="inline">Codechef:&#32;</p>
          <p className="inline font-semibold">cielestrial</p>
        </div>
      </div>

      <div
        className={
          "grid grid-flow-row-dense auto-rows-min snap-center " +
          "border-[0.625vmin] border-black p-[2vmin] bg-image "
        }
      >
        <p
          className={
            "text-[4.5vmin] sm:text-[3.375vmin] pb-[1vmin] " +
            "underline underline-offset-[0.25vmin] indent-[1vmin] " +
            "decoration-from-font font-bold "
          }
        >
          Skills
        </p>
        <div className="grid grid-flow-col-dense auto-cols-min gap-x-[2vmin] ">
          <ul className="w-max list-inside pl-[2vmin] list-disc ">
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>SASS/SCSS</li>
            <li>TailwindCSS</li>
          </ul>

          <ul className="w-max list-inside px-[2vmin] list-disc ">
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
