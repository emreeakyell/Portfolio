import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center pp-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/a588f3f6-fbee-402a-a8ab-c1821dfd738b"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300  py-4 text-2xl">
            //Submit the form below or shoot me an email -
            emreeakyel4284@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] text-xl p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-xl"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-xl"
          name="massage"
          rows="10"
          placeholder="Massage"
        ></textarea>
        <button className="text-white font-bold text-2xl border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Do It
        </button>
      </form>
    </div>
  );
}

export default Contact;
