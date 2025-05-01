import { testimonyType } from '../layout/sections/Testimonials';

type PropsType = {
  side: 'left' | 'right' | 'far-left' | 'far-right';
  testimony: testimonyType;
};

export default function TestimonialSideView({ side, testimony }: PropsType) {
  return (
    <div
      className={
        'grid self-center-safe ' +
        (side === 'far-left' || side === 'far-right' ? 'absolute ' : '')
      }
    >
      <div
        id={'testimonial' + side}
        className={
          'grid border-solid border-[3px] rounded-full overflow-clip ' +
          'w-24 h-24 items-center-safe justify-center-safe justify-self-center-safe origin-bottom-left ' +
          (side === 'left'
            ? 'animate-left-testimonial '
            : side === 'right'
              ? 'animate-right-testimonial '
              : side === 'far-right'
                ? 'animate-far-right-testimonial '
                : 'invisible')
        }
      >
        <img
          src={testimony.image}
          alt={testimony.name}
          className="rotate-0"
          draggable="false"
        />
      </div>
    </div>
  );
}
