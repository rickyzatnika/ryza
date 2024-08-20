// import Navbar from './Navigation/Navbar';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./Navigation/Navbar'));

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;
