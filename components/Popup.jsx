import React, { useState } from 'react';
import { BsBoxArrowUpRight, BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Popup = () => {
  const [show, setShow] = useState(true);

  const closePopup = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 3,
            }}
            onClick={closePopup}
            className="fixed bottom-10 px-6 z-10 w-full "
          >
            <div className="bg-[url('/tshirt.jpg')] bg-cover bg-top backdrop-blur-sm py-6 lg:py-4 w-full lg:w-4/6 mx-auto h-full lg:h-40 relative ">
              <div className="absolute z-20 w-full bg-gradient-to-b backdrop-blur-[2px] from-black/80 to-black/50  top-0 h-full"></div>
              <div className="relative z-[9999] w-full h-full">
                <div className="text-center animate-pulse">
                  <div className="bg-clip-text text-transparent bg-gradient-to-tr pointer-events-none from-cyan-200  to-white">
                    <h1 className="text-xl lg:text-3xl font-semibold">
                      KONVEKSI MURAH & BERKUALITAS
                    </h1>
                    <p className="text-black/50">BANDUNG JAWA-BARAT</p>
                  </div>
                  <ul className="scale-[0.6] lg:scale-75 pointer-events-none space-x-5 flex items-center justify-center text-white flex-wrap gap-4 w-full lg:w-4/6 mx-auto tracking-widest">
                    <li className=" list-disc">T-SHIRT</li>
                    <li className=" list-disc">POLO SHIRT</li>
                    <li className=" list-disc">KEMEJA</li>
                    <li className=" list-disc">SERAGAM KANTOR</li>
                    <li className=" list-disc">JAKET</li>
                    <li className=" list-disc">BAJU PARTAI</li>
                    <li className=" list-disc">WEARPACK</li>
                  </ul>
                </div>

                <button
                  onClick={closePopup}
                  className="text-xl w-fit font-thin antialiased bg-slate-300/10 hover:text-white/50 lg:text-1xl flex gap-2 absolute right-0 -top-14 lg:-top-12 text-white p-1 "
                >
                  <span className="">close</span> X
                </button>

                <Link href="https://fanuis.github.io" passHref>
                  <a
                    target="_blank"
                    className="absolute left-4 -bottom-6 lg:bottom-2"
                  >
                    <div className="relative text-white/80 hover:text-white/60 -space-y-1 flex flex-col text-sm">
                      <span>Kunjungi </span>
                      <span>Website </span>
                      <span className="absolute top-2 -right-3">
                        <BsBoxArrowUpRight className="text-[9px]" />
                      </span>
                    </div>
                  </a>
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=89654361768&text=Dengan%20Konveksi%20Sablon%20Bandung%20%3F">
                  <a
                    target="_blank"
                    className="absolute right-4 -bottom-3 lg:bottom-2 flex gap-1"
                  >
                    <span className="text-white/80 hover:text-white/60 ">
                      Hubungi Kami
                    </span>
                    <BsWhatsapp className="text-xl text-green-500" />
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Popup;
