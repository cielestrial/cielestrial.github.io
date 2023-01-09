import { useContext, useEffect, useState } from "react";
import { StateContext } from "../functions/ContextProvider";

const Home = () => {
  const context = useContext(StateContext);
  const [checked, setChecked] = useState(
    context.theme === "dark" ? true : false
  );

  useEffect(() => {
    if (checked) context.setAndSaveTheme("dark");
    else context.setAndSaveTheme("light");
  }, [checked]);

  return (
    <>
      <div className="self-end">
        <div
          className={
            "flex flex-nowrap border-2 border-double rounded-full w-14 h-7 m-2 " +
            "cursor-pointer " +
            (checked ? "justify-end bg-red-500 " : "justify-start ")
          }
          onClick={() => setChecked((prev) => !prev)}
        >
          <div className="rounded-full w-6 h-6 mx-0.5 bg-white" />
        </div>
      </div>
      <div className="h-full grid grid-cols-1">
        <p className="w-72 sm:w-96 py-2 place-self-center text-center">
          &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum maximus pulvinar pretium. Duis efficitur vestibulum dolor
          nec eleifend. Nunc tempor euismod ligula eget hendrerit. Praesent
          fringilla lacinia metus non sollicitudin. Ut dignissim leo aliquet
          ligula porta varius. Aenean tempor, diam a placerat ultricies, odio
          est consequat ante, nec scelerisque ipsum risus in purus. Etiam et
          molestie erat. Pellentesque rhoncus mauris eu augue vestibulum
          faucibus. Donec sodales urna lacus, vel faucibus nisl finibus
          quis.&#34;
        </p>
      </div>
    </>
  );
};

export default Home;
