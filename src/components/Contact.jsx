import React from "react";
// import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/45f63fe0-f814-4f49-95d2-8053a74427e0"
        method="POST"
        encType="multipart/form/data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border  rounded-lg p-3 flex border-black-300 "
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col ">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className="border rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Message</label>
          <textarea
            className="border rounded-lg p-3 flex border-gray-300"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
