import React, { useState } from "react";
import ImageModal from "../common/ImageModal";
import { BiSolidStar } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiMapPinLineFill } from "react-icons/pi";
import { MdAccessTimeFilled, MdMiscellaneousServices } from "react-icons/md";
import ReviewSlider from "../common/ReviewSlider";
import DealsIn from "../common/DealsIn";
import ProductCard from "../common/productCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Number of slides to show
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768, // Breakpoint for mobile devices
      settings: {
        slidesToShow: 1, // Show 1 slide at a time on smaller screens
        slidesToScroll: 1,
      },
    },
  ],
};

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const images = [
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
  ];

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage("");
  };

  return (
    <>
      <div class="dealer-info-wrapper w-full bg-white shadow-lg border rounded-lg">
        <div class="flex flex-col">
          <div class=" w-full p-4 rounded-lg mt-4 md:mt-0 flex flex-col justify-center">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className="px-2">
                  <a href="javascript:void(0);" onClick={() => openModal(src)}>
                    <img
                      className="w-full h-56 object-cover rounded-lg"
                      src={src}
                      alt={`Gallery Img ${index + 1}`}
                    />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
          <div class="dealer-content p-4 rounded-lg w-full">
            <h1 class="text-2xl font-bold uppercase flex items-center">
              Lorem ipsum dolor sit amet
              <span class="bg-transparent text-sm text-green-600 ml-2 flex items-center">
                <i class="fas fa-check-circle"></i> Verified
              </span>
            </h1>
            <div class="flex items-center mt-2">
              <span class="bg-emerald-600 text-white px-2 py-1 rounded">
                4.9
              </span>
              <ul class="flex ml-2 space-x-1 text-yellow-400">
                <li>
                  <BiSolidStar size={20} />
                </li>
                <li>
                  <BiSolidStar size={20} />
                </li>
                <li>
                  <BiSolidStar size={20} />
                </li>
                <li>
                  <BiSolidStar size={20} />
                </li>
                <li>
                  <BiSolidStar size={20} />
                </li>
              </ul>
              <span class="ml-2 text-gray-500 underline">2278 Reviews</span>
            </div>
            <div class="mt-4 text-gray-900">
              <p className="flex flex-col sm:flex-row  gap-2">
                <PiMapPinLineFill size={23} /> PLOT NUMBER-09 GROUND FLOOR CISF
                CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar
                Pradesh, 201014
              </p>
              <p class="mt-2 flex flex-col sm:flex-row  gap-2">
                <MdAccessTimeFilled size={23} /> Open - Monday to Sunday -
                10:00AM to 8:00PM
              </p>
            </div>
            <div>
              <p class="mt-2 flex items-center text-lg gap-2 w-full">
                <MdMiscellaneousServices size={23} /> Services
              </p>
              <ul className="list-disc px-4 font-semibold mt-2">
                <li className="">Wheel Balancing</li>
                <li className="">Wheel Alignment</li>
              </ul>
            </div>
            <div class="mt-4 w-fit space-x-2">
              <a
                href="#b"
                target="_blank"
                rel="noreferrer"
                class="relative inline-block"
              >
                <span class="absolute top-1 left-1 h-full w-full rounded-lg bg-black"></span>
                <span class="relative inline-block h-full w-full rounded-lg border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-150 hover:bg-yellow-400 hover:text-gray-900">
                  Get Direction
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                class="relative inline-block"
              >
                <span class="absolute top-1 left-1 h-full w-full rounded-lg bg-black"></span>
                <span class="relative inline-block h-full w-full rounded-lg border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-150 hover:bg-red-400 hover:text-gray-900">
                  Book
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <DealsIn />
      <ProductCard />
      <ReviewSlider />
      <ImageModal
        showModal={showModal}
        closeModal={closeModal}
        imageSrc={currentImage}
      />
    </>
  );
}

export default Home;
