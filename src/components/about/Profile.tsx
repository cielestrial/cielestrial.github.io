import { useState } from "react";
import { SiCodechef, SiLinkedin, SiGithub } from "react-icons/si";

const logo = "/assets/logo-coloured/android-chrome-512x512.png";

const Profile = () => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");
  const iconLink =
    "text-[4.5vmin] sm:text-[3.375vmin] drop-shadow-md self-end " +
    "transition-all duration-75 custom-ease-out transform-gpu " +
    "hover:text-sky-500 active:text-sky-600 ";

  return (
    <div
      id="profileTab"
      role="tabpanel"
      className={
        "flex flex-row px-[4vmin] m-auto space-x-[4vmin] " +
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
            "w-[48vmin] aspect-square drop-shadow-xl snap-center overflow-clip "
          }
        >
          <img
            src={logo}
            aria-label="My Logo."
            alt="Logo"
            className="w-full"
            draggable="false"
          />
        </div>
        <div
          className={
            "flex flex-col grow py-[2vmin] px-[4vmin] bg-image select-text " +
            "border-[0.625vmin] border-black snap-center snap-always space-y-[.5vmin] "
          }
        >
          <p
            role="heading"
            aria-level={2}
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
            <p
              role="heading"
              aria-level={3}
              aria-label="Full Name:"
              className="inline"
            >
              Full:&#32;
            </p>
            <p aria-label="Boladale Ogunleye," className="inline font-semibold">
              Boladale Ogunleye
            </p>
          </div>

          <div className="whitespace-nowrap">
            <p
              role="heading"
              aria-level={3}
              aria-label="Alias:"
              className="inline"
            >
              Alias:&#32;
            </p>
            <p aria-label="Shaun," className="inline font-semibold">
              Seun (Shaun)
            </p>
          </div>

          <div className="whitespace-nowrap">
            <p
              role="heading"
              aria-level={3}
              aria-label="Pseudonym:"
              className="inline"
            >
              Pseudonym:&#32;
            </p>
            <p aria-label="cielestrial," className="inline font-semibold">
              cielestrial
            </p>
          </div>

          <div className="flex flex-row flex-nowrap grow pt-[1.5vmin] justify-around ">
            <a
              id="Github"
              aria-label="Github profile,"
              href="https://github.com/cielestrial"
              target="_blank"
              rel="noreferrer noopener"
              className={iconLink}
            >
              <SiGithub role="link" aria-labelledby="Github" />
            </a>

            <a
              id="LinkedIn"
              aria-label="LinkedIn profile,"
              href="https://www.linkedin.com/in/boladale-ogunleye-089937186/"
              target="_blank"
              rel="noreferrer noopener"
              className={iconLink}
            >
              <SiLinkedin role="link" aria-labelledby="LinkedIn" />
            </a>

            <a
              id="Codechef"
              aria-label="Codechef profile,"
              href="https://www.codechef.com/users/cielestrial"
              target="_blank"
              rel="noreferrer noopener"
              className={iconLink}
            >
              <SiCodechef role="link" aria-labelledby="Codechef" />
            </a>
          </div>
        </div>
      </div>

      <div
        className={
          "flex flex-col snap-center py-[2vmin] px-[3vmin] " +
          "border-[0.625vmin] border-black bg-image "
        }
      >
        <p
          role="heading"
          aria-level={2}
          aria-label="Skills:"
          className={
            "text-[4.5vmin] sm:text-[3.375vmin] pb-[1vmin] " +
            "underline underline-offset-[0.25vmin] indent-[1vmin] " +
            "decoration-from-font font-bold "
          }
        >
          Skills
        </p>
        <div role="presentation" className="flex flex-row space-x-[2vmin] ">
          <ul
            role="presentation"
            className="w-max list-inside pl-[2vmin] list-disc "
          >
            <li aria-label="HTML5,">HTML5</li>
            <li aria-label="JavaScript,">JavaScript</li>
            <li aria-label="TypeScript,">TypeScript</li>
            <li aria-label="ReactJS,">ReactJS</li>
            <li aria-label="CSS3,">CSS3</li>
            <li aria-label="SASS/SCSS,">SASS/SCSS</li>
            <li aria-label="Tailwind CSS,">Tailwind&#32;CSS</li>
          </ul>

          <ul
            role="presentation"
            className="w-max list-inside px-[2vmin] list-disc "
          >
            <li aria-label="Node.js,">Node.js</li>
            <li aria-label="Express.js,">Express.js</li>
            <li aria-label="REST APIs,">REST&#32;APIs</li>
            <li aria-label="Figma,">Figma</li>
            <li aria-label="Java,">Java</li>
            <li aria-label="C Sharp,">C#</li>
            <li aria-label="C,">C</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
