import { useState } from "react";
import { SiCodechef, SiGithub, SiLinkedin } from "react-icons/si";
import myLogo from "~/assets/general/my-logo.png";
import { transitionClass } from "~/utils/gradientSelector";
import { skills } from "~/utils/skillsList";

const Profile = () => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");
  const iconLink =
    "text-[4.5vmin] sm:text-[3.375vmin] shadow-md self-end " +
    "hover:text-sky-500 active:text-sky-600 " +
    transitionClass;
  const height = "h-[90vmin] sm:h-[85vmin] ";

  return (
    <div
      id="profileTab"
      role="tabpanel"
      className={
        "flex h-fit px-[4vmin] w-max mx-auto space-x-[4vmin] " +
        "select-text justify-center " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <div
        className={"space-y-[2vmin] " + height}
        onClick={(event) => console.log(event.currentTarget.clientHeight)}
      >
        <div
          className={
            "border-solid border-black border-[1vmin] rounded-full mx-auto " +
            "w-[48vmin] h-[48vmin] shadow-xl snap-center overflow-clip select-none "
          }
        >
          <img
            className="w-fit h-fit"
            src={myLogo}
            aria-label="My Logo."
            alt="My Logo"
            draggable="false"
          />
        </div>

        <div
          className={
            "flex flex-col py-[2vmin] px-[4vmin] bg-image " +
            "border-[0.625vmin] border-black space-y-[.5vmin] " +
            "snap-center snap-always w-full h-[40vmin] sm:h-[35vmin] "
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

          <div className="flex flex-row flex-nowrap grow justify-around ">
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
          "snap-center py-[2vmin] px-[3vmin] w-fit " +
          "border-[0.625vmin] border-black bg-image " +
          height
        }
      >
        <p
          aria-label="Skills:"
          className={
            "w-fit h-fit text-[4.5vmin] sm:text-[3.375vmin] pb-[1vmin] " +
            "underline underline-offset-[0.25vmin] indent-[1vmin] " +
            "decoration-from-font font-bold "
          }
        >
          Skills
        </p>

        <div className="w-fit h-full">
          <ul
            className={
              "flex flex-col flex-wrap h-[90%] " +
              "pl-[2vmin] gap-x-[2vmin] list-inside list-disc "
            }
          >
            {skills.map((skill, i) => (
              <li key={i}>
                <span aria-label={`${skill},`}>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
