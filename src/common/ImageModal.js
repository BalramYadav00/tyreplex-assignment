import React from 'react';
import { IoClose } from "react-icons/io5";

const ImageModal = ({ showModal, closeModal, imageSrc }) => {
  if (!showModal) return null;

  // This function stops the event from propagating to the overlay div.
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal} // Close modal when clicking on overlay
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full p-10 max-w-3xl relative"
        onClick={stopPropagation} // Prevent close when clicking inside modal
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          <IoClose size={24} />
        </button>
        <img className="w-full h-auto rounded-lg" src={imageSrc} alt="Gallery Img" />
      </div>
    </div>
  );
};

export default ImageModal;
