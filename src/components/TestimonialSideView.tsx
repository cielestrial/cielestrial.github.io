import { testimonyType } from "../nav/Testimonials";

type propsType = {
  side: "left" | "right" | "far-left" | "far-right";
  testimony: testimonyType;
};

const TestimonialSideView = (props: propsType) => {
  return (
    <div
      id={"testimonial " + props.side}
      className={
        "grid grid-cols-1 border-solid border-[3px] rounded-full overflow-clip " +
        "w-24 h-24 place-content-center justify-self-center origin-center " +
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
  );
};

export default TestimonialSideView;
