import { useEffect, useRef } from "react";

const Modal = ({ children, className = "", onClose, titleId }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const backFocus = document.activeElement;
    modalRef.current?.focus();

    return () => {
      backFocus?.focus();
    }
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      
    };
  }, [onClose]);

  return (
    <section className="flex bg-black/50 overscroll-contain fixed inset-0 z-40 px-6 md:px-0 overflow-y-auto py-28 md:py-46 outline-none" role="dialog" aria-labelledby={titleId} aria-modal="true" ref={modalRef} tabIndex={-1} >
      <article className={`m-auto bg-white rounded-lg px-6 py-8 ${className}`}>{children}</article>
    </section>
  );
};

export default Modal;
