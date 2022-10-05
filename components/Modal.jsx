import { CgClose } from "react-icons/cg";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="">
        <div className="">
          <button className="" onClick={() => closeModal(false)}>
            <CgClose size={25} />
          </button>
          <div className="">
            <h1>Pesan Berhasil Terkirim</h1>
          </div>
          <div className="">
            <p>Cek Inbox Email anda untuk informasi selanjutnya</p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
