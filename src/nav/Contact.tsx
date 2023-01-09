const Contact = () => {
  return (
    <div className="h-full grid grid-cols-1">
      <form
        className="grid grid-cols-1 gap-y-4 py-4 place-self-center"
        action="https://formspree.io/f/myyaynln"
        method="POST"
      >
        <input
          className="w-72 sm:w-96 px-2 py-1"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          autoComplete="on"
        />
        <input
          className="w-72 sm:w-96 px-2 py-1"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          autoComplete="on"
        />
        <textarea
          className="w-72 sm:w-96 px-2 py-1 resize-none"
          id="message"
          name="message"
          placeholder="Message"
          required
          rows={5}
          cols={80}
        />
        <button
          type="submit"
          className={"w-36 sm:w-48 mx-auto " + "bg-neutral-300 "}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
