import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MobileNav from './MobileNav';
import DarkMode from '../DarkMode';
import Logo from '../Logo';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Hide On Scroll Navbar
  const [show, setShow] = useState(false);
  function NavbarControl() {
    if (window.scrollY > 270) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', NavbarControl);
    return () => {
      window.removeEventListener('scroll', NavbarControl);
    };
  }, []);

  return (
    <>
      <motion.nav
        className={` flex fixed px-10 sm:px-20 left-0 right-0 top-0 w-full items-center justify-evenly z-[100]  ${
          !show
            ? 'nav_colors'
            : 'nav__color backdrop-blur-sm shadow-md shadow-slate-800 bg-[#050f2be5] transition-all duration-300 h-[5rem] '
        }`}
        initial={{ y: '-150%', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
      >
        <MobileNav open={open} setOpen={setOpen} />

        <div className="relative -z-10">
          <Logo />
        </div>

        <div className="w-full flex flex-row-reverse md:flex-row gap-4 items-center ">
          <div
            className="rounded-md flex sm:hidden  relative w-7 gap-1.5 flex-col justify-between items-center"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`h-1 w-full bg-blend-color bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'rotate-45 translate-y-2.5 ' : ''
              }`}
            ></span>
            <span
              className={`h-1 w-6 bg-blend-color bg-blue-400 rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'w-0 opacity-0' : ''
              }`}
            ></span>
            <span
              className={`h-1 w-full bg-blend-color bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? '-rotate-45 -translate-y-2.5 ' : ''
              }`}
            ></span>
          </div>
          <ul className="hidden sm:flex mx-auto justify-center">
            <motion.li
              whileTap={{ cursor: 'grabbing', scale: 1.2 }}
              className="navLink"
            >
              <Link href="/" passHref={true}>
                <a
                  id="1"
                  className={`text-neutral-500 ${
                    router.pathname === '/' ? 'active ' : ''
                  }`}
                >
                  Home
                </a>
              </Link>
            </motion.li>
            <motion.li
              whileTap={{ cursor: 'grabbing', scale: 1.2 }}
              className="navLink"
            >
              <Link href="/about" passHref={true}>
                <a
                  id="2"
                  className={`text-neutral-50 ${
                    router.pathname === '/about' ? 'active ' : ''
                  }`}
                >
                  About
                </a>
              </Link>
            </motion.li>

            <motion.li
              whileTap={{ cursor: 'grabbing', scale: 1.2 }}
              className="navLink"
            >
              <Link href="/project" passHref={true}>
                <a
                  id="2"
                  className={`text-neutral-50 ${
                    router.pathname === '/project' ? 'active ' : ''
                  }`}
                >
                  Project
                </a>
              </Link>
            </motion.li>

            <motion.li
              whileTap={{ cursor: 'grabbing', scale: 1.2 }}
              className="navLink"
            >
              <Link href="/blog" passHref={true}>
                <a
                  id="3"
                  className={`text-neutral-50 ${
                    router.pathname === '/blog' ? 'active ' : ''
                  }`}
                >
                  Blog
                </a>
              </Link>
            </motion.li>
            <motion.li
              whileTap={{ cursor: 'grabbing', scale: 1.2 }}
              className="navLink"
            >
              <Link href="/contact" passHref={true}>
                <a
                  id="4"
                  className={`text-neutral-50 ${
                    router.pathname === '/contact' ? 'active ' : ''
                  }`}
                >
                  Contact
                </a>
              </Link>
            </motion.li>
          </ul>
          <DarkMode />
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
