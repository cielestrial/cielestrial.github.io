const About = () => {
  return (
    <div className="h-full grid grid-cols-1">
      <div className="grid grid-cols-2 py-2 place-self-center">
        <div className="place-self-center">
          <div
            className={
              "grid grid-cols-1 border-solid border-[3px] rounded-full overflow-clip " +
              "w-72 h-72 place-self-center place-content-center "
            }
          >
            <img
              src="/src/assets/profile2.jpg"
              alt="Me"
              className="rotate-12"
            />
          </div>
          <p className="text-center w-fit mx-auto my-1.5 px-4 bg-neutral-300">
            My dad and I
          </p>
        </div>
        <p className="w-72 sm:w-96 place-self-center text-center">
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
    </div>
  );
};

export default About;
