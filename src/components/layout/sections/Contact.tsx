import { season } from '~/utils/dataConstants';
import { transitionClass } from '~/utils/gradientSelectors';

function getSeasonBg() {
  switch (season) {
    case 'Winter':
      return 'bg-linear-to-b from-transparent from-60% to-[#a7afbe]/50 to-90% ';
    case 'Spring':
      return 'bg-linear-to-b from-transparent via-transparent to-sky-400 ';
    default:
      console.error('Invalid season');
      return '';
  }
}
const seasonBG = getSeasonBg();

export default function Contact() {
  return (
    <div className={'h-full w-full flex flex-col ' + seasonBG}>
      <form
        className="flex flex-col space-y-[5vmin] sm:space-y-[4vmin] m-auto "
        action="https://formspree.io/f/myyaynln"
        method="POST"
      >
        <input
          className="w-[70vmin] h-[7vmin] px-[2vmin] shadow-xl "
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          aria-required="true"
          required
          autoComplete="on"
        />
        <input
          className="w-[70vmin] h-[7vmin] px-[2vmin] shadow-xl "
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          aria-required="true"
          required
          autoComplete="on"
        />
        <textarea
          className={
            'w-[70vmin] h-[21vmin] px-[2vmin] py-[1.33vmin] ' +
            'resize-none shadow-xl '
          }
          aria-label="message"
          id="message"
          name="message"
          placeholder="Message"
          aria-required="true"
          required
          rows={5}
          cols={80}
        />
        <button
          type="submit"
          className={
            'mx-auto font-medium shadow-lg bg-slate-200 origin-bottom ' +
            'hover:bg-slate-300 active:scale-95 active:bg-slate-400 ' +
            'w-[26vmin] sm:w-[24vmin] py-[1.25vmin] ' +
            transitionClass
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}
