import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative rounded-full p-0 m-0">
      {showTopBtn && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1, bounce: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="fixed bottom-10 right-6 z-20 rounded-full p-0 m-0"
        >
          <FaAngleUp
            onClick={goToTop}
            className="bg-[#050f2ba6]  border-gray-300 rounded-full h-10 w-10 text-gray-200 cursor-pointer opacity-50 animate-pulse"
          />
        </motion.div>
      )}
    </div>
  );
};

export default ScrollTop;
