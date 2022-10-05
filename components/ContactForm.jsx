import Link from "next/link";
import { useState, useRef } from "react";
import { MdMapsHomeWork } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o73yere",
        "template_ttzi7em",
        form.current,
        "5vaJZbWp1t2cHaM4G"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          Swal.fire({
            title: "Success",
            text: "Form Submitted Success",
            icon: "success",
            showCancelButton: false,
            showClass: {
              popup: "animate__animated animate__zoomInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        },
        (errors) => {
          console.log(errors.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">please come back letter</a>',
            showCloseButton: true,
            showConfirmButton: false,
            showClass: {
              popup: "animate__animated animate__zoomInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      );
  };

  return (
    <>
      <div className="w-full  pt-10 lg:pt-40 px-4 lg:px-40 leading-relaxed antialiased overflow-x-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-2  ">
          <div className="col-span-1 lg:col-span-8 ">
            <motion.div
              initial={{ y: "10%", opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" relative 0 lg:sticky mb-6"
            >
              <div className="mb-8 text-center lg:text-left ">
                <h2 className="text-2xl">Leave Me Your Info</h2>
              </div>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-8 bg-gradient-to-b from-transparent to-slate-400/10 w-full p-8 rounded-md shadow-xl"
              >
                <div>
                  <input
                    type="text"
                    id="1"
                    name="user_name"
                    className="bg-transparent outline-none text-sm text-gray-500 placeholder:text-gray-600 rounded-xl border-gray-500  focus:ring-blue-500  block w-full p-2.5 focus:border-blue-500 border-2 "
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  <input
                    type="email"
                    id="2"
                    name="user_email"
                    className="bg-transparent outline-none text-sm text-gray-500 placeholder:text-gray-600 rounded-xl border-gray-500  focus:ring-blue-500  block w-full p-2.5 focus:border-blue-500 border-2 "
                    placeholder="example.company@gmail.com"
                    required
                  />
                </div>

                <div>
                  <textarea
                    id="3"
                    rows={16}
                    name="message"
                    className="block p-2.5 bg-transparent w-full text-sm text-gray-500 placeholder:text-gray-600 outline-none rounded-lg border-gray-500 focus:ring-blue-500 focus:border-blue-500  border-2"
                    placeholder="Your message..."
                    defaultValue={""}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="4"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="4"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    I agree with the{" "}
                    <Link href="/" passHref>
                      <a className="text-blue-600 hover:underline dark:text-blue-500">
                        terms and conditions
                      </a>
                    </Link>
                    .
                  </label>
                </div>
                <motion.div whileTap={{ scale: 1.2 }} className="text-center">
                  <button
                    type="submit"
                    className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all duration-500 bg-gradient-to-r to-blue-500 via-blue-400 from-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
                  >
                    Submit
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
          <div className="col-span-1 lg:col-span-4 text-center lg:text-left">
            <div className="mb-4">
              <h2 className="text-2xl">Contact Information</h2>
            </div>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="bg-gradient-to-b from-transparent to-slate-400/10 px-6 py-6 shadow-xl rounded-lg leading-4">
                <center className="bg-blue-500 w-fit mx-auto p-3 rounded-full ">
                  <MdMapsHomeWork size={24} className="text-slate-200" />
                </center>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-gray-600">
                    Country :
                  </p>
                  <span className="text-sm text-gray-600">Indonesia</span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-gray-600">City :</p>
                  <span className="text-sm text-gray-600">Bandung</span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-gray-600">
                    Streat :
                  </p>
                  <span className="text-sm text-gray-600">
                    Sekeloa Tengah No.123
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="bg-gradient-to-b from-transparent to-slate-400/10 px-6 py-6 shadow-xl rounded-lg leading-4">
                <center className="bg-blue-500 w-fit mx-auto p-3 rounded-full   ">
                  <FaEnvelopeOpenText size={24} className="text-slate-200" />
                </center>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-gray-600">Email :</p>
                  <span className="text-sm text-gray-600">
                    rickyzatnika91@gmail.com
                  </span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-gray-600">
                    Instagram :
                  </p>
                  <span className="text-sm text-gray-600">@_zatnika</span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-gray-600">
                    Facebook :
                  </p>
                  <span className="text-sm text-gray-600">Ricky Zatnika</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <div className="bg-gradient-to-b from-transparent to-slate-400/10 px-6 py-6 shadow-xl rounded-lg leading-4">
                <center className="bg-blue-500 w-fit mx-auto p-3 rounded-full ">
                  <IoMdPhonePortrait size={24} className="text-slate-200" />
                </center>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-gray-600">
                    Support Services :
                  </p>
                  <span className="text-sm text-gray-600">(022)2511-240</span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-gray-600">
                    Bussines :
                  </p>
                  <span className="text-sm text-gray-600">
                    +62 (821)2266-4238{" "}
                  </span>
                </div>
                <div className="flex items-center mt-10 justify-between">
                  <p className="text-sm font-semibold text-gray-600">
                    Personal :
                  </p>
                  <span className="text-sm text-gray-600">
                    +62 (896)5436-1768{" "}
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
