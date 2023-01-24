import { testimonyType } from "../nav/Testimonials";

type propsType = {
  side: "left" | "right" | "far-left" | "far-right";
  testimony: testimonyType;
};

const TestimonialSideView = (props: propsType) => {
  return (
    <div
      className={
        "grid self-center " +
        (props.side === "far-left" || props.side === "far-right"
          ? "fixed "
          : "")
      }
    >
      <div
        id={"testimonial " + props.side}
        className={
          "grid  border-solid border-[3px] rounded-full overflow-clip transform-gpu " +
          "w-24 h-24 place-content-center justify-self-center origin-bottom-left " +
          (props.side === "left"
            ? "animate-left-testimonial "
            : props.side === "right"
            ? "animate-right-testimonial "
            : props.side === "far-right"
            ? "animate-far-right-testimonial "
            : "invisible")
        }
      >
        <img
          src={props.testimony.image}
          alt={props.testimony.name}
          className="rotate-0"
        />
      </div>
    </div>
  );
};

export default TestimonialSideView;
