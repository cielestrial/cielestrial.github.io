import { useState } from "react";
import { SiCodechef, SiGithub, SiLinkedin } from "react-icons/si";

import myLogo from "~/assets/general/my-logo.png";

const Profile = () => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");
  const iconLink =
    "text-[4.5vmin] sm:text-[3.375vmin] shadow-md self-end " +
    "transition duration-75 custom-ease-out " +
    "hover:text-sky-500 active:text-sky-600 ";

  return (
    <div
      id="profileTab"
      role="tabpanel"
      className={
        "flex flex-row px-[4vmin] m-auto space-x-[4vmin] select-text " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <div
        className={
          "flex flex-col space-x-0 space-y-[2vmin] " +
          "lg:flex-row lg:space-x-[4vmin] lg:space-y-0 "
        }
      >
        <div
          className={
            "border-solid border-black border-[1vmin] rounded-full mx-auto " +
            "w-[48vmin] h-[48vmin] shadow-xl snap-center overflow-clip "
          }
        >
          <img
            src={myLogo}
            aria-label="My Logo."
            alt="My Logo"
            draggable="false"
          />
        </div>
        <div
          className={
            "flex flex-col grow py-[2vmin] px-[4vmin] bg-image " +
            "border-[0.625vmin] border-black snap-center snap-always space-y-[.5vmin] "
          }
        >
          <p
            aria-label="Name & Links:"
            className={
              "text-[4.5vmin] sm:text-[3.375vmin] pb-[1vmin] " +
              "underline underline-offset-[0.25vmin] -indent-[0.5vmin] " +
              "decoration-from-font font-bold "
            }
          >
            Names & Links
          </p>

          <div className="whitespace-nowrap">
            <p aria-label="Full Name:" className="inline">
              Full:&#32;
            </p>
            <p aria-label="Boladale Ogunleye," className="inline font-semibold">
              Boladale Ogunleye
            </p>
          </div>

          <div className="whitespace-nowrap">
            <p aria-label="Preferred:" className="inline">
              Preferred:&#32;
            </p>
            <p aria-label="Shaun," className="inline font-semibold">
              Seun (Shaun)
            </p>
          </div>

          <div className="whitespace-nowrap">
            <p aria-label="Pseudonym:" className="inline">
              Pseudonym:&#32;
            </p>
            <p aria-label="cielestrial," className="inline font-semibold">
              cielestrial
            </p>
          </div>

          <div className="flex flex-row flex-nowrap grow pt-[1.5vmin] justify-around ">
            <a
              id="github"
              aria-label="GitHub profile,"
              href="https://github.com/cielestrial"
              target="_blank"
              rel="noopener"
              referrerPolicy="strict-origin-when-cross-origin"
              className={iconLink}
            >
              <SiGithub />
            </a>

            <a
              id="linkedin"
              aria-label="LinkedIn profile,"
              href="https://www.linkedin.com/in/boladale-ogunleye-089937186/"
              target="_blank"
              rel="noopener"
              referrerPolicy="strict-origin-when-cross-origin"
              className={iconLink}
            >
              <SiLinkedin />
            </a>

            <a
              id="codechef"
              aria-label="Codechef profile,"
              href="https://www.codechef.com/users/cielestrial"
              target="_blank"
              rel="noopener"
              referrerPolicy="strict-origin-when-cross-origin"
              className={iconLink}
            >
              <SiCodechef />
            </a>
          </div>
        </div>
      </div>

      <div
        className={
          "flex flex-col snap-center py-[2vmin] px-[3vmin] " +
          "border-[0.625vmin] border-black bg-image select-text "
        }
      >
        <p
          aria-label="Skills:"
          className={
            "text-[4.5vmin] sm:text-[3.375vmin] pb-[1vmin] " +
            "underline underline-offset-[0.25vmin] indent-[1vmin] " +
            "decoration-from-font font-bold "
          }
        >
          Skills
        </p>
        <div className="flex flex-row space-x-[2vmin] ">
          <ul className="w-max list-inside pl-[2vmin] list-disc ">
            <li>
              <span aria-label="JavaScript and TypeScript,">JS & TS</span>
            </li>
            <li>
              <span aria-label="React,">React</span>
            </li>
            <li>
              <span aria-label="Redux,">Redux</span>
            </li>
            <li>
              <span aria-label="Vue,">Vue</span>
            </li>
            <li>
              <span aria-label="Nuxt,">Nuxt</span>
            </li>
            <li>
              <span aria-label="Python,">Python</span>
            </li>
            <li>
              <span aria-label="Java,">Java</span>
            </li>
            <li>
              <span aria-label="C Sharp,">C#</span>
            </li>
          </ul>

          <ul className="w-max list-inside px-[2vmin] list-disc ">
            <li>
              <span aria-label="HTML,">HTML</span>
            </li>
            <li>
              <span aria-label="CSS and SCSS,">CSS & SCSS</span>
            </li>
            <li>
              <span aria-label="Tailwind,">Tailwind</span>
            </li>
            <li>
              <span aria-label="Express,">Express</span>
            </li>
            <li>
              <span aria-label="Redis,">Redis</span>
            </li>
            <li>
              <span aria-label="Figma,">Figma</span>
            </li>
            <li>
              <span aria-label="Docker,">Docker</span>
            </li>
            <li>
              <span aria-label="Web Content Accessibility Guidelines,">
                WCAG
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
