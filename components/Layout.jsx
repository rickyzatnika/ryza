import Navbar from './Navigation/Navbar';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;
