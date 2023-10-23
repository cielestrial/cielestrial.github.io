import MySwitch from "../components/home/MySwitch";

const Home = () => {
  return (
    <div
      className={
        "flex flex-col h-full min-w-full w-max relative " +
        "bg-gradient-to-bl from-amber-200 to-slate-200 "
      }
    >
      <div className="h-full flex flex-col place-content-center animate-fade-in ">
        <MySwitch />
        <div
          id="Grace Hopper Quote"
          tabIndex={0}
          className={
            "w-fit h-fit p-[8vmin] place-self-center font-bold focus:outline-none " +
            "title text-start text-[6vmin] tracking-wider text-slate-600 -indent-[3vmin] "
          }
        >
          <blockquote className="quote ">
            <p role="presentation" className="inline ">
              The most damaging&#32;
            </p>
            <p role="presentation" className="indent-[0.22vmin] ">
              phrase in the language&#32;
            </p>
            <p role="presentation" className="inline ">
              is:&#32;
              <q
                role="presentation"
                className=" italic text-red-600 font-semibold "
              >
                <span>It's always been&#32;</span>
                <br />
                <span>done that way.</span>
              </q>
            </p>
          </blockquote>
          <p
            className={
              "inline text italic text-slate-700 pt-[1vmin] pl-[27.5vmin] "
            }
          >
            - Grace Hopper
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
