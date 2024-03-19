import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex bg-black font-mono">
      <div className="flex-1 h-screen justify-center items-center flex">
        <div className="flex flex-col w-4/5 gap-4">
          <h1 className="text-blue-400 font-extrabold text-2xl">
            About Agency
          </h1>
          <h1 className="text-white text-4xl font-bold">
            We create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className="text-white text-sm">
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission.We’re world’s
            best consulting & finance solution provider. Wide range of web and
            software development services.
          </p>
          <div className="flex w-full justify-between">
            <div>
              <h1 className="text-blue-400 text-3xl">10+</h1>
              <p className="text-white font-extralight text-sm">
                Year of experience
              </p>
            </div>
            <div>
              <h1 className="text-blue-400 text-3xl">234K+</h1>
              <p className="text-white font-extralight text-sm">
                People Reached
              </p>
            </div>
            <div>
              <h1 className="text-blue-400 text-3xl">5K+</h1>
              <p className="text-white font-extralight text-sm">
                Services and plugins
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-screen relative">
        <Image src={"/images/about.png"} alt="idea" fill />
      </div>
    </div>
  );
};

export default AboutPage;
