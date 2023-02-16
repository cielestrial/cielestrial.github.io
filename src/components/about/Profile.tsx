import { useState } from "react";

const logo = "/assets/logo-coloured/android-chrome-512x512.png";

const Profile = () => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");

  return (
    <div
      className={
        "grid px-[4dvmin] content-center justify-self-center gap-x-[4dvmin] " +
        "grid-flow-col-dense auto-cols-min " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <div
        className={
          "grid grid-flow-row-dense auto-rows-min lg:grid-flow-col-dense lg:auto-cols-min " +
          "justify-items-center gap-y-[2dvmin] gap-x-[4dvmin] "
        }
      >
        <div
          className={
            "border-solid border-black border-[1vmin] rounded-full overflow-clip " +
            "w-[48dvmin] aspect-square drop-shadow-xl snap-center "
          }
        >
          <img src={logo} alt="Logo" className="w-full " draggable="false" />
        </div>
        <div
          className={
            "w-max border-[0.625vmin] border-black p-[3dvmin] " +
            "snap-center snap-always bg-image "
          }
        >
          <p
            className={
              "text-[4.5vmin] sm:text-[3.375vmin] pb-[0.5dvmin] " +
              "underline underline-offset-[0.25dvmin] -indent-[0.5dvmin] " +
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
          "border-[0.625vmin] border-black p-[2dvmin] bg-image "
        }
      >
        <p
          className={
            "text-[4.5vmin] sm:text-[3.375vmin] pb-[1dvmin] " +
            "underline underline-offset-[0.25dvmin] indent-[1dvmin] " +
            "decoration-from-font font-bold "
          }
        >
          Skills
        </p>
        <div className="grid grid-flow-col-dense auto-cols-min gap-x-[2dvmin] ">
          <ul className="w-max list-inside pl-[2dvmin] list-disc ">
            <li>HTML5</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>CSS3</li>
            <li>SASS/SCSS</li>
            <li>Tailwind&#32;CSS</li>
          </ul>

          <ul className="w-max list-inside px-[2dvmin] list-disc ">
            <li>Node.js</li>
            <li>Express</li>
            <li>REST&#32;APIs</li>
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
