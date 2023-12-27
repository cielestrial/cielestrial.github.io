import { SiGithub, SiLinkedin } from "react-icons/si";
import { transitionClass } from "~/utils/gradientSelector";

const MyFooter = () => {
  const iconSize = "1.5em";
  const link =
    "p-0.5 rounded active:scale-95 hover:animate-pulse " + transitionClass;

  return (
    <footer
      id="footer"
      className="h-fit w-full select-none py-[1.33vmin] px-[4vmin] text-center"
    >
      <div className="my-auto w-full flex flex-wrap gap-y-[1.25vmin] gap-x-[7vmin] justify-evenly">
        <div className="flex my-auto gap-y-[1.25vmin] gap-x-[4vmin]">
          <a
            aria-label="My LinkedIn profile"
            href="https://www.linkedin.com/in/boladale-ogunleye-089937186"
            target="_blank"
            rel="noopener"
            referrerPolicy="strict-origin-when-cross-origin"
            className={link}
          >
            <SiLinkedin
              className="rounded text-[#0864c0] dark:text-white/90 transition"
              size={iconSize}
            />
          </a>
          <a
            aria-label="My Github profile"
            href="https://github.com/cielestrial"
            target="_blank"
            rel="noopener"
            referrerPolicy="strict-origin-when-cross-origin"
            className={link}
          >
            <SiGithub className="rounded-full" size={iconSize} />
          </a>
        </div>

        <div className="flex flex-wrap my-auto justify-center gap-y-[1.25vmin] gap-x-[4vmin] underline">
          <a
            href="https://www.termsfeed.com/live/91af4718-4dfa-4687-b1ba-ff85be757264"
            target="_blank"
            rel="noopener"
            referrerPolicy="strict-origin-when-cross-origin"
            className={link}
          >
            Terms & Conditions
          </a>
          <a
            id="finalTab"
            href="https://www.termsfeed.com/live/8e058f94-0ced-4abb-a59d-94ae2f7f2337"
            target="_blank"
            rel="noopener"
            referrerPolicy="strict-origin-when-cross-origin"
            className={link}
          >
            Privacy Policy
          </a>
        </div>

        <div className="my-auto p-0.5">
          Copyright &copy; 2023 &#124; cielestrial
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
