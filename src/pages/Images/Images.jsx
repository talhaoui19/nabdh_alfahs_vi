import  { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Images.css";

import {
  about_image,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
} from "../../assets/index";
// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Function to open modal with selected image
  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  return (
    <>
      <div className="mt-[-50px]">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {[
            about_image,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img9,
            img10,
            img11,
            img12,
            img13,
            img14,
            img15,
          ].map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img
                src={imgSrc}
                alt={`slide-${index}`}
                onClick={() => openModal(imgSrc)}
                style={{ cursor: "pointer" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal to display enlarged image */}
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={currentImage} alt="enlarged" />
        </div>
      )}
    </>
  );
}
