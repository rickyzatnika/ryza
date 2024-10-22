import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_o73yere',
        'template_1p3osy5',
        form.current,
        '5vaJZbWp1t2cHaM4G'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          Swal.fire({
            title: 'Success',
            text: 'Thanks for subscribe',
            icon: 'success',
          });
        },
        (errors) => {
          console.log(errors.text);
          e.target.reset();
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">come back letter</a>',
          });
        }
      );
  };

  return (
    <>
      <div className="w-full h-full  shadow-lg shadow-gray-800/90  bg-gradient-to-br from-black/30 rounded-lg p-6 leading-relaxed antialiased overflow-x-hidden">
        <motion.div
          initial={{ x: '30%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.1,
          }}
          className="mb-4  p-2"
        >
          <h2 className="text-2xl font-normal text-[#d3d3d3] antialiased">
            Newsletter
          </h2>
          <p className="text-md text-[#cecece] font-[Nunito] tracking-wide antialiased font-thin pt-2">
            Get the latest ruminations on topics the author barely knows. Even
            on a surface level.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: '50%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: 'easeInOut',
            delay: 0.2,
          }}
          className="w-full rounded-md bg-gray-400/10 px-4 py-6  shadow-xl text-center"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex justify-center flex-col gap-2"
          >
            <input
              type="email"
              placeholder="example_saprudin@gmail.com"
              id="email"
              name="user_email"
              className="form-control px-2 p-2 rounded-md border-none outline outline-1 outline-slate-900/50 focus:outline-blue-500 focus:outline-2 shadow-inner focus:shadow-none "
              required
            />

            <button
              type="submit"
              className=" flex items-center justify-center relative w-ful px-2 p-2 transition-all duration-500 bg-gradient-to-r to-blue-500 via-purple-400 from-blue-400 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-md text-gray-300 hover:text-gray-200 shadow-lg"
            >
              Subscribe
            </button>
          </form>
          <span className="text-xs text-center text-neutral-500">
            No affiliate links, no spam, no data sharing
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Newsletter;
