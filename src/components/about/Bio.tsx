import { useState } from "react";
import myPic from "../../assets/general/profile2.jpg";

const Bio = () => {
  const [effect, setEffect] = useState<"fade-in" | "none">("fade-in");

  return (
    <div
      className={
        "grid px-[6vmin] content-center justify-self-center gap-x-[4vmin] gap-y-[3vmin] " +
        "grid-flow-row-dense auto-rows-min lg:grid-flow-col-dense lg:auto-cols-min " +
        (effect === "fade-in" ? "animate-fade-in " : "")
      }
      onAnimationEnd={() => setEffect("none")}
    >
      <div
        className={
          "justify-self-start self-center w-fit h-fit ml-[5vmin] " +
          "grid grid-flow-row-dense auto-rows-min lg:snap-center " +
          "lg:justify-self-center lg:ml-0 "
        }
      >
        <div
          className={
            "grid border-solid border-black border-[1vmin] rounded-full overflow-clip " +
            "w-[48vmin] aspect-square place-content-center drop-shadow-xl "
          }
        >
          <img src={myPic} alt="My Dad and I" className="w-full rotate-12 " />
        </div>
        <p
          className={
            "text-center self-end justify-self-center w-max h-fit mx-auto px-[3vmin] " +
            "-mt-[6vmin] z-10 border-[0.625vmin] border-black bg-image "
          }
        >
          My dad and I
        </p>
      </div>

      <div
        className={
          "grid grid-flow-row-dense auto-rows-min bg-image " +
          "border-[0.625vmin] border-black py-[2vmin] px-[4vmin] "
        }
      >
        <p
          className={
            "text-[4.5vmin] sm:text-[3.375vmin] pb-[1vmin] " +
            "underline underline-offset-[0.25vmin] -indent-[0.5vmin] " +
            "decoration-from-font font-bold "
          }
        >
          About Me
        </p>
        <div className="grid grid-flow-col-dense auto-cols-min gap-x-[4vmin] ">
          <div className="w-max snap-center snap-always space-y-[1.5vmin] ">
            <div>
              <p>A programmer interested in&#32;</p>
              <p>general software development,&#32;</p>
              <p>mobile application development,&#32;</p>
              <p>full-stack web development, and&#32;</p>
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
              <p>big-data algorithms, vectors, set&#32;</p>
              <p>theory, propositional logic and&#32;</p>
              <p>first-order logic.</p>
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
