import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

function ChangeNumb({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1.5,

      onUpdate(value) {
        node.textContent = value.toFixed();
      },
    });
    return () => controls.stop();
  }, [from, to]);
  return <p ref={nodeRef} />;
}

const Counter = ({ from, to }) => {
  const parallax = useParallax({
    opacity: [0, 1],
    scale: [0, 2],
    speed: -20,
  });
  return (
    <div
      ref={parallax.ref}
      className="w-full relative -z-10 text-6xl space-x-0 gap-6 lg:space-x-24 flex flex-col lg:flex-row items-center justify-center pt-10 pb-20 "
    >
      <div className="text-center flex  items-center justify-center pt-10 gap-2 lg:flex-row text-white ">
        <ChangeNumb from={from + 9} to={to + 9} />+
        <span className="text-sm text-[#929292] rotate-0 lg:rotate-90 tracking-widest origin-center">
          startup
        </span>
      </div>
      <div className="text-center flex items-center justify-center pt-10 gap-2 lg:flex-row  text-white">
        <ChangeNumb from={from + 6} to={to + 6} />+
        <span className="text-sm text-[#929292] rotate-0 lg:rotate-90 tracking-widest origin-center">
          project
        </span>
      </div>
      <div className="text-center flex  items-center justify-center pt-10 gap-2 lg:flex-row text-white ">
        <ChangeNumb from={from + 10} to={to + 10} />+
        <span className="text-sm text-[#929292] rotate-0 lg:rotate-90 tracking-widest origin-center">
          desain
        </span>
      </div>
    </div>
  );
};

export default Counter;
