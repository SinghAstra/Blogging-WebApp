import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex font-mono bg-black h-screen">
      <div className="flex-1 flex justify-center items-center">
        <div className=" relative w-4/5  h-4/5">
          <Image src={"/images/contact.png"} alt="idea" fill />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-4/5">
          <h1 className="text-blue-400 text-3xl font-bold mb-3">Contact Us</h1>
          <form>
            <input
              type="text"
              id="name"
              className=" bg-transparent border border-blue-400 text-white text-sm rounded-lg w-full p-2.5 mb-2"
              placeholder="Name*"
              required
            />
            <input
              type="text"
              id="email"
              className=" bg-transparent border border-blue-400 text-white text-sm rounded-lg w-full p-2.5 mb-2"
              placeholder="Email Address*"
              required
            />
            <input
              type="number"
              id="phone"
              className=" bg-transparent border border-blue-400 text-white text-sm rounded-lg w-full p-2.5 mb-2"
              placeholder="Phone Number"
              required
            />
            <textarea
              type="text"
              id="message"
              className=" bg-transparent border border-blue-400 text-white text-sm rounded-lg w-full p-2.5 mb-2"
              placeholder="Message*"
              rows={10}
              cols={30}
              required
            />
            <button className="bg-blue-400 w-full text-white p-2.5 rounded-lg">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
