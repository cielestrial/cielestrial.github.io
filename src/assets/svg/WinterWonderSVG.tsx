import { FaRegSnowflake } from 'react-icons/fa';
import { TbSnowflake } from 'react-icons/tb';

const WinterWonderSVG = () => {
  return (
    <div className="view-width view-height flex flex-row justify-around items-start ">
      <div
        id="particle1"
        className={
          'order-1 ' +
          'w-[4vmin] sm:w-[3vmin] h-[4vmin] sm:h-[3vmin] rounded-full ' +
          'animate-[feather-down_4s_4s_linear_infinite] transform-gpu '
        }
        onAnimationStart={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
        onAnimationIteration={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
      >
        <FaRegSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="particle2"
        aria-hidden="true"
        className={
          'order-2 ' +
          'w-[4vmin] sm:w-[3vmin] h-[4vmin] sm:h-[3vmin] rounded-full ' +
          'animate-[feather-down_4s_2.85s_linear_infinite] transform-gpu '
        }
        onAnimationStart={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
        onAnimationIteration={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
      >
        <TbSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="particle3"
        aria-hidden="true"
        className={
          'order-3 ' +
          'w-[4vmin] sm:w-[3vmin] h-[4vmin] sm:h-[3vmin] rounded-full ' +
          'animate-[feather-down_4s_1.71s_linear_infinite] transform-gpu '
        }
        onAnimationStart={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
        onAnimationIteration={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
      >
        <TbSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="particle4"
        aria-hidden="true"
        className={
          'order-4 ' +
          'w-[4vmin] sm:w-[3vmin] h-[4vmin] sm:h-[3vmin] rounded-full ' +
          'animate-[feather-down_4s_.57s_linear_infinite] transform-gpu '
        }
        onAnimationStart={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
        onAnimationIteration={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
      >
        <TbSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="particle5"
        aria-hidden="true"
        className={
          'order-5 ' +
          'w-[4vmin] sm:w-[3vmin] h-[4vmin] sm:h-[3vmin] rounded-full ' +
          'animate-[feather-down_4s_3.42s_linear_infinite] '
        }
        onAnimationStart={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
        onAnimationIteration={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
      >
        <FaRegSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="particle6"
        aria-hidden="true"
        className={
          'order-6 ' +
          'w-[4vmin] sm:w-[3vmin] h-[4vmin] sm:h-[3vmin] rounded-full ' +
          'animate-[feather-down_4s_2.28s_linear_infinite] transform-gpu '
        }
        onAnimationStart={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
        onAnimationIteration={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
      >
        <TbSnowflake
          aria-hidden="true"
          className="w-full h-full animate-feather-spin text-[#456289] blur-[2px] transform-gpu "
        />
      </div>

      <div
        id="particle7"
        aria-hidden="true"
        className={
          'order-7 ' +
          'w-[4vmin] sm:w-[3vmin] h-[4vmin] sm:h-[3vmin] rounded-full ' +
          'animate-[feather-down_4s_1.14s_linear_infinite] transform-gpu '
        }
        onAnimationStart={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
        onAnimationIteration={(e) => {
          if (e.animationName === 'feather-down')
            e.currentTarget.style.opacity = '1';
        }}
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
