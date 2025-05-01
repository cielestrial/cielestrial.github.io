import { testimonyType } from '../layout/sections/Testimonials';

type PropsType = { testimony: testimonyType };

export default function TestimonialView({ testimony }: PropsType) {
  return (
    <div className="grid w-max ">
      <div
        className={
          'grid border-solid border-[3px] rounded-full overflow-clip ' +
          'w-36 h-36 place-self-center-safe origin-bottom-left ' +
          'animate-center-testimonial '
        }
      >
        <img
          src={testimony.image}
          alt={testimony.name}
          className="rotate-0"
          draggable="false"
        />
      </div>
      <p
        className={
          'h-36 w-80 text-center pt-10 ' +
          'justify-self-center-safe animate-fade-in-out '
        }
      >
        {testimony.testimony}
        {' - '}
        {testimony.name}
      </p>
    </div>
  );
}
