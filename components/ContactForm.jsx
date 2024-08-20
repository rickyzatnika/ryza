import Link from 'next/link';
import { useState, useRef } from 'react';
import { MdMapsHomeWork } from 'react-icons/md';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { IoMdPhonePortrait } from 'react-icons/io';
import { motion } from 'framer-motion';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_o73yere',
        'template_ttzi7em',
        form.current,
        '5vaJZbWp1t2cHaM4G'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          MySwal.fire({
            title: 'Success',
            text: 'Form Submitted Success',
            icon: 'success',
            showCancelButton: false,
            showClass: {
              popup: 'animate__animated animate__zoomInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
        },
        (errors) => {
          console.log(errors.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">please come back letter</a>',
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
              popup: 'animate__animated animate__zoomInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
        }
      );
  };

  return (
    <>
      <div className="w-ful relative  bg-gradient-to-t from-black/30 to-black/40   pt-10 lg:pt-40 px-4 lg:px-40 leading-relaxed antialiased overflow-x-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-2 pb-10 ">
          <div className="col-span-1 lg:col-span-8 ">
            <motion.div
              initial={{ y: '10%', opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className=" relative 0 lg:sticky mb-6"
            >
              <div className="mb-8 text-center lg:text-left text-[#cecece]">
                <h2 className="text-2xl font-[Nunito] ">Leave Me Your Info</h2>
              </div>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-8 bg-gradient-to-b from-transparent to-slate-400/5 w-full p-8 rounded-md shadow-xl"
              >
                <div>
                  <input
                    type="text"
                    id="1"
                    name="user_name"
                    className="bg-transparent outline-none text-base text-[#cecece] placeholder:text-[#989898] rounded-xl border-gray-500  focus:ring-indigo-500  block w-full p-2.5 focus:border-indigo-500 border-2 "
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  <input
                    type="email"
                    id="2"
                    name="user_email"
                    className="bg-transparent outline-none text-base text-[#cecece] placeholder:text-[#989898] rounded-xl border-gray-500  focus:ring-indigo-500  block w-full p-2.5 focus:border-indigo-500 border-2 "
                    placeholder="example.company@gmail.com"
                    required
                  />
                </div>

                <div>
                  <textarea
                    id="3"
                    rows={16}
                    name="message"
                    className="block p-2.5 bg-transparent w-full text-base text-[#cecece] placeholder:text-[#989898] outline-none rounded-lg border-gray-500 focus:ring-indigo-500 focus:border-indigo-500  border-2"
                    placeholder="Your message..."
                    defaultValue={''}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="4"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="4"
                    className="ml-2 text-sm font-medium text-[#969696]"
                  >
                    I agree with the{' '}
                    <Link href="/" passHref>
                      <a className="text-indigo-500 hover:underline ">
                        terms and conditions
                      </a>
                    </Link>
                    .
                  </label>
                </div>
                <motion.div whileTap={{ scale: 1.2 }} className="text-center">
                  <button
                    type="submit"
                    className="text-[#cecece]  hover:scale-110 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-600 font-medium rounded-xl text-base w-full sm:w-auto px-6 py-2.5 text-center transition-all duration-500 ease-linear bg-gradient-to-r to-indigo-500 via-indigo-400 from-indigo-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
                  >
                    Submit
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
          <div className="col-span-1 lg:col-span-4 text-center lg:text-left">
            <div className="mb-4">
              <h2 className="text-2xl text-[#bebebe]">Contact Information</h2>
            </div>
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col "
            >
              <div className="bg-gradient-to-b from-transparent to-slate-400/5 px-6 py-6 shadow-xl rounded-lg leading-4">
                <center className="bg-indigo-500 w-fit mx-auto p-3 rounded-full ">
                  <MdMapsHomeWork size={24} className="text-slate-200" />
                </center>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-[#8b8b8b]">
                    Country :
                  </p>
                  <span className="text-sm text-[#8b8b8b]">Indonesia</span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-[#8b8b8b]">City :</p>
                  <span className="text-sm text-[#8b8b8b]">Bandung</span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-[#8b8b8b]">
                    Streat :
                  </p>
                  <span className="text-sm text-[#8b8b8b]">
                    Sekeloa Tengah No.123
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="bg-gradient-to-b from-transparent to-slate-400/5 px-6 py-6 shadow-xl rounded-lg leading-4">
                <center className="bg-indigo-500 w-fit mx-auto p-3 rounded-full   ">
                  <FaEnvelopeOpenText size={24} className="text-slate-200" />
                </center>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-[#8b8b8b]">
                    Email :
                  </p>
                  <span className="text-sm text-[#8b8b8b]">
                    rickyzatnika91@gmail.com
                  </span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-[#8b8b8b]">
                    Instagram :
                  </p>
                  <span className="text-sm text-[#8b8b8b]">@_zatnika</span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-[#8b8b8b]">
                    Facebook :
                  </p>
                  <span className="text-sm text-[#8b8b8b]">Ricky Zatnika</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="bg-gradient-to-b from-transparent to-slate-400/5 px-6 py-6 shadow-xl rounded-lg leading-4">
                <center className="bg-indigo-500 w-fit mx-auto p-3 rounded-full ">
                  <IoMdPhonePortrait size={24} className="text-slate-200" />
                </center>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-[#8b8b8b]">
                    Support Services :
                  </p>
                  <span className="text-sm text-[#8b8b8b]">(022)2511-240</span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-[#8b8b8b]">
                    Bussines :
                  </p>
                  <span className="text-sm text-[#8b8b8b]">
                    +62 (821)2266-4238{' '}
                  </span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-[#8b8b8b]">
                    Personal :
                  </p>
                  <span className="text-sm text-[#8b8b8b]">
                    +62 (896)5436-1768{' '}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
