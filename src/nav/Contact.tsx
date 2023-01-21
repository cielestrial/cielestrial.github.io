const Contact = () => {
  return (
    <div className="h-full grid grid-cols-1 bg-gradient-to-b from-transparent via-transparent to-sky-400 ">
      <form
        className="grid grid-cols-1 gap-y-4 py-4 place-self-center"
        action="https://formspree.io/f/myyaynln"
        method="POST"
      >
        <input
          className="w-72 sm:w-96 px-2 py-1 drop-shadow-xl "
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          autoComplete="on"
        />
        <input
          className="w-72 sm:w-96 px-2 py-1 drop-shadow-xl "
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          autoComplete="on"
        />
        <textarea
          className="w-72 sm:w-96 px-2 py-1 resize-none drop-shadow-xl "
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
            "w-36 sm:w-48 mx-auto font-medium drop-shadow-lg bg-slate-200 origin-bottom " +
            "transition-all duration-75 custom-ease-out " +
            "hover:bg-slate-300 active:scale-95 active:bg-slate-400 "
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
