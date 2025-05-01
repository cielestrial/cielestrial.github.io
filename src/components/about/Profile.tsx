import { useState } from 'react';
import { SiCodechef, SiGithub, SiLinkedin } from 'react-icons/si';

import myLogo from '~/assets/general/my-logo.png';
import { transitionClass } from '~/utils/gradientSelector';
import { skills } from '~/utils/skillList';

type PropsType = { initialEffect: 'fade-in' | 'none' };

export default function Profile({ initialEffect }: PropsType) {
  const [effect, setEffect] = useState<'fade-in' | 'none'>(initialEffect);
  const iconLink =
    'text-[4.5vmin] sm:text-[3.375vmin] shadow-md self-end ' +
    'hover:text-sky-500 active:text-sky-600 ' +
    transitionClass;
  const height = 'h-[92vmin] sm:h-[82vmin] lg:h-[48vmin] ';

  return (
    <div
      id="profileTab"
      role="tabpanel"
      className={
        'flex h-fit px-[4vmin] w-max m-auto gap-x-[4vmin] ' +
        'select-text justify-center ' +
        (effect === 'fade-in' ? 'animate-fade-in ' : '')
      }
      onAnimationEnd={() => setEffect('none')}
    >
      <div className={'flex flex-col gap-[4vmin] lg:flex-row ' + height}>
        <img
          className={
            'border-solid border-black border-[1vmin] bg-black rounded-full ' +
            'w-[48vmin] h-[48vmin] shadow-xl snap-center overflow-clip select-none '
          }
          src={myLogo}
          aria-label="My Logo."
          alt="My Logo"
          draggable="false"
        />

        <div
          className={
            'flex flex-col py-[2vmin] px-[4vmin] bg-image ' +
            'border-[0.625vmin] border-black gap-y-[.5vmin] ' +
            'snap-center snap-always h-[40vmin] sm:h-[35vmin] lg:h-[48vmin] '
          }
        >
          <p
            aria-label="Name & Links:"
            className={
              'text-[4.5vmin] sm:text-[3.375vmin] pb-[1vmin] ' +
              'underline underline-offset-[0.25vmin] -indent-[0.5vmin] ' +
              'decoration-from-font font-bold '
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
              rel="noopener author"
              referrerPolicy="strict-origin-when-cross-origin"
              className={iconLink}
            >
              <SiGithub />
            </a>

            <a
              id="linkedin"
              aria-label="LinkedIn profile,"
              href="https://www.linkedin.com/in/cielestrial"
              target="_blank"
              rel="noopener author"
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
              rel="noopener author"
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
          'snap-center py-[2vmin] pl-[3vmin] w-fit ' +
          'border-[0.625vmin] border-black bg-image ' +
          height
        }
      >
        <p
          aria-label="Skills:"
          className={
            'w-fit h-fit text-[4.5vmin] sm:text-[3.375vmin] pb-[1vmin] ' +
            'underline underline-offset-[0.25vmin] indent-[1vmin] ' +
            'decoration-from-font font-bold '
          }
        >
          Skills
        </p>

        <div className="w-fit h-full">
          <ul className="flex flex-col flex-wrap h-[90%] w-[75vmin] list-none ">
            {skills.map((skill, i) => (
              <li key={i}>
                <span aria-label={`${skill},`}>&bull; {skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
