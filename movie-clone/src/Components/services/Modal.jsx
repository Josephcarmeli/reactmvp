import { useContext } from "react";
import { ModalContext }from "./ModalContext";
import e from "cors";

export default function Modal() {
  const { modalContent, closeModal } = useContext(ModalContext);

  if (!modalContent) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-lg mx-auto">
        <button onClick={closeModal}>Close</button>
        {modalContent}
      </div>
    </div>
  );
}
