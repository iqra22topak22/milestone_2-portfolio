import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Project
            </h1>
          </div>
          <div className="flex flex-wrap -m-8">
            {/* project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require('../public/img/screenshoot.PNG')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed">
                    As a skilled and dedicated Frontend Developer, I bring a
                    strong blend of creativity, technical expertise, and a deep
                    understanding of modern web design principles. With hands-on
                    experience in building responsive and user-centric
                    applications, I am proficient in HTML, CSS.
                  </p>

                 <Link target="_blank" href={"https://html-css-project-migu.vercel.app/"}>
                  <p className="leading-relaxed text-blue-600 hover:underline"> View Project ..</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project */}
            <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require('../public/img/PAKISTANIFOOD.PNG')}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    PAKISTANI FOOD
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    PAKISTANIFOOD
                  </h1>
                  <p className="leading-relaxed ">
                    As a skilled and dedicated Frontend Developer, I bring a
                    strong blend of creativity, technical expertise, and a deep
                    understanding of modern web design principles. With hands-on
                    experience in building responsive and user-centric
                    applications, I am proficient in HTML, CSS.
                  </p>

                 <Link  target="_blank" href={"https://html-css-2nd-project-gray.vercel.app/"}>
                  <p className="leading-relaxed text-blue-600 hover:underline"> View Project ..</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
