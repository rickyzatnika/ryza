import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = ({ data }) => {
  return (
    <>
      <div className="pt-20 w-full max-w-full mb-48">
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            duration: 0.3,
          }}
          className="text-center w-fit mx-auto pb-4 md:pb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-[Shikamaru] bg-clip-text bg-gradient-to-r  from-[#f093b0] via-[#a162e8]/80 to-[#a0e9ff] text-transparent">
            Project
          </h2>
          <p className="font-thin ml-0 md:ml-4 font-mono text-base text-neutral-500 tracking-[1.5rem]">
            showcase
          </p>
        </motion.div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-20">
          {data?.projects?.map((project) => (
            <motion.div
              initial={{ y: '50%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={project.slug}
              className="flex flex-col group text-center gap-2  p-4 justify-center"
            >
              <motion.div
                initial={{ y: '50%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full overflow-hidden  group brightness-[30%] group-hover:brightness-[100%] hover:brightness-[100%] transition-all duration-1000 ease-linear"
              >
                <Image
                  src={project.projectImage.url}
                  alt={project.slug}
                  priority
                  width={75}
                  height={50}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="center"
                  className="scale-150 group group-hover:scale-100  hover:scale-100 transition-all duration-1000 ease-linear"
                />
              </motion.div>
              <h2 className="font-mono antialiased text-neutral-500">
                {project.title}
              </h2>
              <div className="flex py-6 items-center justify-evenly ">
                <Link legacyBehavior={true} href={`${project.demoUrl}`}>
                  <a>
                    <span className="py-2 px-4 group group-hover:brightness-[100%] hover:brightness-[100%] bg-indigo-400 mt-4 font-mono rounded-lg hover:bg-indigo-500 text-sm shadow-lg text-gray-100 hover:text-gray-200 hover:scale-105 transition-all duration-200">
                      Visit Demo
                    </span>
                  </a>
                </Link>
                <Link legacyBehavior={true} href={`${project.sourceUrl}`}>
                  <a target="blank">
                    <span className="py-2 px-4 group bg-indigo-400 mt-4 font-mono rounded-lg hover:bg-indigo-500 text-sm shadow-lg text-gray-100 hover:text-gray-200 hover:scale-105 transition-all duration-200">
                      Source Code
                    </span>
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
