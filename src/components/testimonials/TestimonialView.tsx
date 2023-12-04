import { testimonyType } from "../accordian/sections/Testimonials";

type propsType = {
  testimony: testimonyType;
};

const TestimonialView = (props: propsType) => {
  return (
    <div className={"grid w-max "}>
      <div
        className={
          "grid border-solid border-[3px] rounded-full overflow-clip " +
          "w-36 h-36 place-self-center origin-bottom-left " +
          "animate-center-testimonial "
        }
      >
        <img
          src={props.testimony.image}
          alt={props.testimony.name}
          className="rotate-0"
          draggable="false"
        />
      </div>
      <p
        className={
          "h-36 w-80 text-center pt-10 " +
          "justify-self-center animate-fade-in-out "
        }
      >
        {props.testimony.testimony}
        {" - "}
        {props.testimony.name}
      </p>
    </div>
  );
};

export default TestimonialView;
