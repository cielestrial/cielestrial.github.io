import { testimonyType } from "../nav/Testimonials";

type propsType = {
  side: "left" | "right";
  testimony: testimonyType;
};

const TestimonialSideView = (props: propsType) => {
  return (
    <div
      className={
        "grid grid-cols-1 border-solid border-[3px] rounded-full overflow-clip " +
        "w-24 h-24 place-content-center justify-self-center blur-sm "
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
