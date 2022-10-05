import React from "react";
import { ContactForm } from "../components";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <section>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <ContactForm />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
