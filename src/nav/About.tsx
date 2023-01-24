const About = () => {
  return (
    <div className="h-full grid auto-cols-min place-self-center ">
      <div className="grid py-2 gap-x-2 sm:gap-x-8 grid-flow-col-dense auto-cols-max ">
        <div
          className={
            "place-self-center invisible " +
            "transition-all duration-75 custom-ease-out hover:visible "
          }
        >
          <div
            className={
              "grid  border-solid border-sky-300 border-[3px] rounded-full overflow-clip " +
              "w-56 h-56 sm:w-64 sm:h-64 place-self-center place-content-center drop-shadow-xl "
            }
          >
            <img
              src="/src/assets/profile2.jpg"
              alt="Me"
              className="rotate-12 visible "
            />
          </div>
          <p
            className={
              "text-center w-fit mx-auto my-1.5 px-4 " +
              "bg-sky-300 text-current "
            }
          >
            My dad and I
          </p>
        </div>
        <div
          //  w-64 sm:w-80
          className={"grid gap-y-2 place-self-center font-semibold text-base "}
        >
          <div className="grid grid-flow-col auto-cols-auto hidden">
            <p className="title w-24 text-end bg-red-300">Names&#58;</p>
            <p className="w-64 sm:w-80 pl-4 bg-blue-300">Boladale Ogunleye</p>
            <p className="w-64 sm:w-80 pl-4 bg-blue-300">Seun</p>
            <p className="w-64 sm:w-80 pl-4 bg-blue-300">cielestrial</p>
            {/* show logo */}
          </div>

          <div className="grid grid-flow-col auto-cols-auto hidden">
            <p className="title w-24 text-end bg-red-300">Bio&#58;</p>
            <p className="w-64 sm:w-96 pl-4 bg-blue-300">
              A programmer interested in general software development, mobile
              application development, full-stack web development, and game
              development. I also enjoy participating in hackathons, game jams,
              and programming contests.
            </p>
            <p className="w-64 sm:w-96 pl-4 bg-blue-300 hidden">
              I started out with game design, so my approach to UI has always
              been a minimalist one. Some questions I ask myself: "What
              information is so important it must ALWAYS be displayed?" "What
              information can be poppped in to display when needed?" The end
              goal is to avoid clutter, keep it clean and simple, and not
              bombard the user with a lot information or choices.
            </p>
            <p className="w-64 sm:w-96 pl-4 bg-blue-300 hidden">
              I'm always looking to challenge myself and grow. My methodology is
              simple: every few months, I pick up some new things and then
              produce a project that applies what I've learned.
              <br />
              Besides programming languages, I am interested in areas such as:
              time-complexity, big-data algorithms, vectors, set theory,
              propositional logic and first-order logic.
            </p>
            <p className="w-64 sm:w-96 pl-4 bg-blue-300 hidden">
              My learning goals for 2023: Angular, Python web-scraping,
              Serverless & AWS lambda, graph theory, and engaging with more
              big-data algorithms.
            </p>
          </div>

          <div id="skills" className="grid grid-flow-col auto-cols-auto">
            <ul className="w-fit pl-8 list-disc bg-blue-300">
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>CSS</li>
              <li>SASS/SCSS</li>
              <li>TailwindCSS</li>
              <li>Mantine</li>
              <li>Bootstrap</li>
            </ul>
            <ul className="w-fit pl-8 list-disc bg-blue-300">
              <li>Node.js</li>
              <li>Express</li>
              <li>REST APIs</li>
              <li>Figma</li>
              <li>Java</li>
              <li>C#</li>
              <li>C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
