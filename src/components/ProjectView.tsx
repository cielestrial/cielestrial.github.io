import { useState } from "react";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsXCircle,
} from "react-icons/bs";

type propsType = {
  link: string | undefined;
  images: string[];
  setShowProjectView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectView = (props: propsType) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full grid grid-cols-1 py-4 place-content-center">
      <div className="w-[39rem] place-self-center grid grid-col-1 ">
        <BsXCircle
          onClick={() => props.setShowProjectView(false)}
          className={
            "w-fit h-fit bg-transparent text-3xl " +
            "align-self-center justify-self-end mx-4 cursor-pointer "
          }
        />
      </div>
      <div
        className={
          "flex flex-row flex-nowrap gap-x-6 " +
          "place-content-center place-items-center"
        }
      >
        <BsArrowLeftCircle
          onClick={() => setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev))}
          className={
            "w-fit h-fit bg-transparent text-5xl cursor-pointer " +
            (index === 0 ? "invisible " : "")
          }
        />
        <img
          src={
            props.images.length > 0
              ? props.images[index]
              : "/src/assets/placeholder.png"
          }
          alt="pages preview"
          className="h-72 justify-self-center select-none "
        />
        <BsArrowRightCircle
          onClick={() =>
            setIndex((prev) =>
              prev + 1 < props.images.length ? prev + 1 : prev
            )
          }
          className={
            "w-fit h-fit bg-transparent text-5xl cursor-pointer " +
            (index === props.images.length - 1 ? "invisible " : "")
          }
        />
      </div>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer noopener"
        className={
          "text-center font-semibold underline " +
          "w-fit h-fit place-self-center my-5"
        }
      >
        {props.link}
      </a>
    </div>
  );
};

export default ProjectView;
