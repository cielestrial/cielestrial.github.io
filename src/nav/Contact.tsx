const Contact = () => {
  return (
    <div
      className={
        "min-h-full h-max min-w-full w-max grid " +
        "bg-gradient-to-b from-transparent via-transparent to-sky-400 "
      }
    >
      <form
        className="grid gap-y-[5vmin] sm:gap-y-[4vmin] place-self-center "
        action="https://formspree.io/f/myyaynln"
        method="POST"
      >
        <input
          className={
            "w-[72vmin] px-[2vmin] py-[2vmin] sm:py-[1vmin] " +
            "drop-shadow-xl mx-auto "
          }
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          autoComplete="on"
        />
        <input
          className={
            "w-[72vmin] px-[2vmin] py-[2vmin] sm:py-[1vmin] " +
            "drop-shadow-xl mx-auto "
          }
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          autoComplete="on"
        />
        <textarea
          className={
            "w-[72vmin] px-[2vmin] py-[2vmin] sm:py-[1vmin] " +
            "resize-none drop-shadow-xl mx-auto "
          }
          id="message"
          name="message"
          placeholder="Message"
          required
          rows={5}
          cols={80}
        />
        <button
          type="submit"
          className={
            "mx-auto font-medium drop-shadow-lg bg-slate-200 " +
            "transition-all duration-75 custom-ease-out origin-bottom " +
            "hover:bg-slate-300 active:scale-95 active:bg-slate-400 " +
            "w-[32vmin] h-max py-[1vmin] grid place-content-center "
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
