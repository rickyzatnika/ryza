import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Skillbar from "./Skillbar";

const Skills = ({ data }) => {
  return (
    <>
      <div className="relative mb-20  z-20 bg-gradient-to-t from-transparent to-blue-300/20 w-full overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, ease: "easeIn" },
          }}
          className="absolute left-0 -top-0 p-8 -z-20 w-2/4 md:w-full "
        >
          <Parallax speed={-5} scale={[0, 2]}>
            <Image
              src="/svg-one.svg"
              alt="polkadot"
              width={220}
              height={220}
              priority
              className="opacity-20"
            />
          </Parallax>
        </motion.div>

        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeIn" },
          }}
          className="text-center pt-10 "
        >
          <h2 className="mb-10 p-4 text-3xl leading-relaxed -tracking-wide">
            My{" "}
            <span className="blogTitle text-blue-600 uppercase border-b-2 border- border-slate-900 font-extrabold">
              Skill
            </span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12  w-full px-4 lg:px-14 p-4 lg:p-8">
          <div className="col-span-1 lg:col-span-6 p-6">
            <Skillbar />
          </div>
          <div className="col-span-1 lg:col-span-6 p-6">
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              }}
              className="text-center max-w-3xl items-center grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  justify-center  "
            >
              {data?.skills?.map((skill) => (
                <div
                  key={skill.slug}
                  className="w-18 sm:w-3/6 md:w-32 text-center px-1 md:px-4  mx-auto  "
                >
                  <Link href={`/skill/${skill.slug}`} passHref={true}>
                    <a>
                      <h3 className="mb-2 sm:mb-3 pt-6 text-gray-400 text-sm md:text-lg text-center">
                        {skill.title}
                      </h3>
                      <div className="transition-all duration-500 bg-gradient-to-r from-transparent to-transparent via-blue-400/30  p-3 md:p-4 pb-2 md:pb-4 rounded-md shadow-xl overflow-hidden">
                        <Image
                          src={skill.skillImage.url}
                          alt={skill.title}
                          width={100}
                          height={100}
                          className=" hover:scale-90 hover:rotate-12 transition-all duration-800 ease-linear opacity-90 md:opacity-70 hover:opacity-95 mix-blend-multiply"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
