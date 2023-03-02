const Contact = () => {
  return (
    <div
      className={
        "min-h-full h-max min-w-full w-max flex flex-col " +
        "bg-gradient-to-b from-transparent via-transparent to-sky-400 "
      }
    >
      <form
        className="flex flex-col space-y-[5vmin] sm:space-y-[4vmin] m-auto "
        action="https://formspree.io/f/myyaynln"
        method="POST"
      >
        <input
          className={"w-[70vmin] h-[7vmin] px-[2vmin] drop-shadow-xl "}
          type="text"
          id="name"
          name="name."
          placeholder="Name"
          aria-required="true"
          required
          autoComplete="on"
        />
        <input
          className={"w-[70vmin] h-[7vmin] px-[2vmin] drop-shadow-xl "}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          aria-required="true"
          required
          autoComplete="on"
        />
        <textarea
          className={
            "w-[70vmin] h-[21vmin] px-[2vmin] py-[1.33vmin] " +
            "resize-none drop-shadow-xl "
          }
          aria-label="message"
          id="message"
          name="message"
          placeholder="Message"
          aria-required="true"
          required
          rows={5}
          cols={80}
        />
        <button
          id="Form Submit Button"
          type="submit"
          className={
            "mx-auto font-medium drop-shadow-lg bg-slate-200 " +
            "transition-all duration-75 custom-ease-out origin-bottom " +
            "hover:bg-slate-300 active:scale-95 active:bg-slate-400 " +
            "w-[26vmin] sm:w-[24vmin] py-[1.25vmin] "
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
