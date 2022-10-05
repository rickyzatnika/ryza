/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Skillbar } from "../components";
import { MdOutlineLibraryBooks, MdOutlineLibraryAdd } from "react-icons/md";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  const [show, setShow] = useState(0);

  return (
    <>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="w-full pt-40 px-2 md:px-10 lg:px-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 px-0 md:px-8 items-start">
          <div className="col-span-1 lg:col-span-4 ">
            <div className="image flex flex-col items-center justify-center">
              <h1 className="text-5xl antialiased mb-10 -tracking-widest text-center">
                About Me
              </h1>
              <div className="rounded-full shadow-2xl shadow-gray-500">
                <Image
                  src="/gambar.png"
                  alt="me"
                  width={220}
                  height={220}
                  className="rounded-full "
                />
              </div>
            </div>
            <section>
              <div className="px-8 my-20">
                <div className="flex flex-col gap-4">
                  <div className="bg-gradient-to-b from-transparent to-slate-400/10 px-6 py-6 shadow-xl rounded-lg leading-4">
                    <center className="bg-blue-500 w-fit mx-auto p-3 rounded-full ">
                      <MdOutlineLibraryBooks
                        size={24}
                        className="text-slate-200"
                      />
                    </center>
                    <div className="flex items-center mt-10 justify-between">
                      <div className="text-sm font-semibold text-gray-600">
                        Fullname :
                      </div>
                      <span className="text-sm text-gray-600">
                        Ricky Zatnika
                      </span>
                    </div>
                    <div className="flex items-center mt-10 justify-between">
                      <div className="text-sm font-semibold text-gray-600">
                        Age :
                      </div>
                      <span className="text-sm text-gray-600">30</span>
                    </div>
                    <div className="flex items-center mt-10 justify-between">
                      <div className="text-sm font-semibold text-gray-600">
                        Country :
                      </div>
                      <span className="text-sm text-gray-600">Indonesia</span>
                    </div>
                    <div className="flex items-center mt-10 justify-between">
                      <div className="text-sm font-semibold text-gray-600">
                        City :
                      </div>
                      <span className="text-sm text-gray-600">Bandung</span>
                    </div>
                    <div className="flex items-center mt-10 justify-between">
                      <div className="text-sm font-semibold text-gray-600">
                        Streat :
                      </div>
                      <span className="text-sm text-gray-600">
                        Sekeloa Tengah No.123
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-20">
                  <Skillbar />
                </div>
                <div className="mt-20 bg-gradient-to-b from-transparent to-slate-400/10 px-6 py-6 shadow-xl rounded-lg leading-4">
                  <div className="w-fit mx-auto p-3 rounded-full text-center">
                    <h3 className="text-xl">Extra Skills</h3>
                  </div>
                  <div className="flex items-center mt-10 justify-start gap-4">
                    <div className=" text-blue-400">
                      <MdOutlineLibraryAdd size={24} />
                    </div>
                    <span className="text-base text-gray-600">NextJs</span>
                  </div>
                  <div className="flex items-center mt-10 justify-start gap-4">
                    <div className=" text-blue-400">
                      <MdOutlineLibraryAdd size={24} />
                    </div>
                    <span className="text-base text-gray-600">TailwindCSS</span>
                  </div>
                  <div className="flex items-center mt-10 justify-start gap-4">
                    <div className=" text-blue-400">
                      <MdOutlineLibraryAdd size={24} />
                    </div>
                    <span className="text-base text-gray-600">Bootstrap</span>
                  </div>
                  <div className="flex items-center mt-10 justify-start gap-4">
                    <div className=" text-blue-400">
                      <MdOutlineLibraryAdd size={24} />
                    </div>
                    <span className="text-base text-gray-600">
                      Adobe Photoshop
                    </span>
                  </div>
                  <div className="flex items-center mt-10 justify-start gap-4">
                    <div className=" text-blue-400">
                      <MdOutlineLibraryAdd size={24} />
                    </div>
                    <span className="text-base text-gray-600">CorelDrawX7</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-span-1 lg:col-span-8 pt-10 px-8 relative top-0 md:top-20 lg:sticky mb-6">
            <div className="flex flex-col justify-center gap-10">
              <p className="antialiased py-2 text-gray-500 leading-relaxed text-md md:text-lg tracking-widest">
                I started my journey becoming a frontend developer on mei 2019.
                I learned about how the internet works, about HTML and CSS. And
                I created my first ever landing page which was very exciting.{" "}
                <br />
                After that I just continued with the course learned more HTML,
                CSS and a little bit of Javascript, and I created a website for
                a friend of mine a very bad one though.. but I learned a lot.
              </p>
              <p className="antialiased py-2 text-gray-500 leading-relaxed text-md md:text-lg tracking-widest">
                After that I learned Bootstrap and basic Javascript and I also
                learned about flexbox and Grid layout through some
                documentation. The course continued with intermediate
                Javascript, I worked a lot on that but it wasn't enough, so I
                did another and tutorial on youtube which I really enjoyed and
                had lots of fun with.
              </p>
              <p className="antialiased py2 text-gray-500 leading-relaxed text-md md:text-lg tracking-widest">
                In the course I also learned about web design using Figma, and
                learned about Terminal, NodeJs, Express JS, HeadlessCMS, about
                how to use Databases like mongoDB, MySQL and how to use
                animation with Framer Motion. <br />I actually finished the
                course with ReactJs and I'm now working on my first ever react
                Project.
              </p>
              <div className="w-full hidden md:flex gap-2 sm:gap-8 justify-center items-center mt-5">
                <div className="instagram  bg-gradient-to-t from-blue-200 p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer ">
                  <a href="https://www.instagram.com/_zatnika/" target="blank">
                    <BsInstagram size={24} />
                  </a>
                </div>
                <div className="facebook bg-gradient-to-t from-blue-200 p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
                  <a href="https://facebook.com/rickyzatnika" target="blank">
                    <BsFacebook size={24} />
                  </a>
                </div>
                <div className="linkedin bg-gradient-to-t from-blue-200 p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
                  <a href="" target="blank">
                    <BsLinkedin size={24} />
                  </a>
                </div>
                <div className="github bg-gradient-to-t from-blue-200 p-3 sm:p-4 rounded-full shadow-xxl cursor-pointer">
                  <a href="https://github.com/rickyzatnika" target="blank">
                    <BsGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
