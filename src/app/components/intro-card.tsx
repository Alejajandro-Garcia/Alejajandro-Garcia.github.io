import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroCard() {
  const titles = [
    "Software Developer",
    "Backend Engineer",
    "Frontend Engineer",
    "Photographer",
    "Karaoke Singer",
    "Volleyball Player",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [titles.length]);

  return (
    <div className="py-20 md:mb-28 flex flex-row">
      <div className="flex flex-col mx-auto items-center justify-center md:ml-auto mr-10">
        <span className="text-3xl md:text-5xl">Hi, I am</span>
        <span className="text-4xl md:text-6xl pt-2 text-[#A670FE] font-medium">
          Alejandro
        </span>
        <div className="flex flex-row mt-4">
          <button className="bg-white text-black rounded-2xl w-28 h-11 mt-1 mx-4 text-xl">
            <a
              href="/Alejandro_Garcia_CV.pdf"
              download="AlejandroGarciaResume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/Alejajandro-Garcia", "_blank");
              window.open("https://github.com/jose-garcia14", "_blank");
            }}
          >
            <Image
              src="/github.svg"
              width={45}
              height={45}
              alt="Github"
              className="mx-2"
            />
          </a>
          <a
            href="https://linkedin.com/in/alejandro-garcia-1022441a1/"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              width={50}
              height={50}
              alt="LinkedIn"
              className="hover:cursor-pointer mx-2"
            />
          </a>
          <a href="mailto:josealegar19@gmail.com" target="_blank">
            <Image
              src="/mail.svg"
              width={50}
              height={50}
              alt="Email"
              className="hover:cursor-pointer pt-1 mx-2"
            />
          </a>
        </div>
        <div className="w-full h-12 mt-4 relative flex justify-center items-center">
          {titles.map((title, i) => (
            <span
              key={i}
              className={`absolute text-2xl text-[#A670FE] transition-opacity duration-1000 ${
                i === index
                  ? "opacity-100 animate-slide-in"
                  : "opacity-0 animate-slide-out"
              } md:text-4xl`}
            >
              {title}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden md:flex flex-col mr-auto ml-10 justify-center">
        <Image
          alt="pfp"
          src="/pfp.jpg"
          width={450}
          height={450}
          className="mask mask-circle"
        />
      </div>
    </div>
  );
}
