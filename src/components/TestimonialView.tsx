import { testimonyType } from "../nav/Testimonials";

type propsType = {
  testimony: testimonyType;
};

const TestimonialView = (props: propsType) => {
  return (
    <div className="h-full grid grid-cols-1 place-self-center place-content-center">
      <div
        className={
          "grid grid-cols-1 border-solid border-[3px] rounded-full overflow-clip " +
          "w-36 h-36 place-content-center justify-self-center my-8 origin-center " +
          "z-20 animate-center-testimonial "
        }
      >
        <img
          src={props.testimony.image}
          alt={props.testimony.name}
          className="rotate-0"
        />
      </div>
      <p className="h-36 w-72 sm:w-96 text-center justify-self-center animate-fade-in-out ">
        {props.testimony.testimony}
        {" - "}
        {props.testimony.name}
      </p>
    </div>
  );
};

export default TestimonialView;
