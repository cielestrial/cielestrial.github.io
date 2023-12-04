import { FaRegSnowflake } from "react-icons/fa";
import { TbSnowflake } from "react-icons/tb";

const WinterWonderSVG = () => {
  return (
    <div className="view-width view-height flex flex-row justify-around items-start ">
      <div
        id="raindrop 1"
        className={
          "order-1 " +
          "w-[4vmin] sm:w-[3vmin] aspect-square rounded-full " +
          "animate-[feather-down_4s_4s_linear_infinite] transform-gpu "
        }
        onAnimationStart={(e) => (e.currentTarget.style.opacity = "1")}
        onAnimationIteration={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <FaRegSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="raindrop 2"
        aria-hidden="true"
        className={
          "order-2 " +
          "w-[4vmin] sm:w-[3vmin] aspect-square rounded-full " +
          "animate-[feather-down_4s_2.85s_linear_infinite] transform-gpu "
        }
        onAnimationStart={(e) => (e.currentTarget.style.opacity = "1")}
        onAnimationIteration={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <TbSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="raindrop 3"
        aria-hidden="true"
        className={
          "order-3 " +
          "w-[4vmin] sm:w-[3vmin] aspect-square rounded-full " +
          "animate-[feather-down_4s_1.71s_linear_infinite] transform-gpu "
        }
        onAnimationStart={(e) => (e.currentTarget.style.opacity = "1")}
        onAnimationIteration={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <TbSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="raindrop 4"
        aria-hidden="true"
        className={
          "order-4 " +
          "w-[4vmin] sm:w-[3vmin] aspect-square rounded-full " +
          "animate-[feather-down_4s_.57s_linear_infinite] transform-gpu "
        }
        onAnimationStart={(e) => (e.currentTarget.style.opacity = "1")}
        onAnimationIteration={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <TbSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="raindrop 5"
        aria-hidden="true"
        className={
          "order-5 " +
          "w-[4vmin] sm:w-[3vmin] aspect-square rounded-full " +
          "animate-[feather-down_4s_3.42s_linear_infinite] "
        }
        onAnimationStart={(e) => (e.currentTarget.style.opacity = "1")}
        onAnimationIteration={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <FaRegSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="raindrop 6"
        aria-hidden="true"
        className={
          "order-6 " +
          "w-[4vmin] sm:w-[3vmin] aspect-square rounded-full " +
          "animate-[feather-down_4s_2.28s_linear_infinite] transform-gpu "
        }
        onAnimationStart={(e) => (e.currentTarget.style.opacity = "1")}
        onAnimationIteration={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <TbSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="raindrop 7"
        aria-hidden="true"
        className={
          "order-7 " +
          "w-[4vmin] sm:w-[3vmin] aspect-square rounded-full " +
          "animate-[feather-down_4s_1.14s_linear_infinite] transform-gpu "
        }
        onAnimationStart={(e) => (e.currentTarget.style.opacity = "1")}
        onAnimationIteration={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <TbSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>
    </div>
  );
};

export default WinterWonderSVG;
