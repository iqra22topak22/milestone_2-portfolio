import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[350px]"
              alt="hero"
              src={require('../public/img/image.png')}

              width={200}
              height={200}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            
            <p className="mb-5 leading-relaxed">
            As a skilled and dedicated Frontend Developer, I bring a strong blend of creativity, technical expertise, and a deep understanding of modern web design principles. With hands-on experience in building responsive and user-centric applications, I am proficient in HTML, CSS, and JavaScript, along with a deep focus on frameworks like React and Next.js..
            </p>
            <div className="flex justify-center">
              <a href={"https://milestone-1-snowy.vercel.app/"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                view cv
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
