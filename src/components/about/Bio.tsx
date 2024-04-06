import { useState } from "react";
import myPic from "~/assets/general/selfie.png";

const Bio = () => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");

  return (
    <div
      id="bioTab"
      role="tabpanel"
      className={
        "flex flex-col px-[4vmin] space-x-0 space-y-[3vmin] m-auto " +
        "lg:flex-row lg:space-x-[4vmin] lg:space-y-0 select-text " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <img
        className={
          "w-[48vmin] h-[48vmin] shadow-xl rounded-full ml-[5vmin] sm:mx-auto select-none " +
          "border-solid border-black border-[1vmin] overflow-clip snap-center "
        }
        src={myPic}
        aria-label="A selfie."
        alt="Me"
        draggable="false"
      />

      <div
        className={
          "flex flex-col bg-image " +
          "border-[0.625vmin] border-black py-[2vmin] px-[4vmin] "
        }
      >
        <p
          aria-label="About Me:"
          className={
            "text-[4.5vmin] sm:text-[3.375vmin] pb-[1vmin] " +
            "underline underline-offset-[0.25vmin] -indent-[0.5vmin] " +
            "decoration-from-font font-bold "
          }
        >
          About Me
        </p>
        <div className="flex flex-row space-x-[4vmin] ">
          <div className="w-max snap-center snap-always space-y-[1.5vmin] ">
            <div>
              <p>A developer interested in &#32;</p>
              <p>software development, mobile&#32;</p>
              <p> application development, full&#32;</p>
              <p>stack web development, and&#32;</p>
              <p>game development.</p>
            </div>
            <div>
              <p>Besides programming&#32;</p>
              <p>languages, I am interested in&#32;</p>
              <p>areas such as: time-complexity,&#32;</p>
            </div>
          </div>

          <div className="w-max snap-center space-y-[1.5vmin] ">
            <div>
              <p>big-data algorithms, vectors,&#32;</p>
              <p>set theory, propositional logic&#32;</p>
              <p>and first-order logic.</p>
            </div>
            <div>
              <p>I also enjoy participating in&#32;</p>
              <p>hackathons, game jams, and&#32;</p>
              <p>programming contests.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
