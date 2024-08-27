import React from "react";
import { GoStarFill } from "react-icons/go";
import Slider from "react-slick";

const ProductCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 2, // Show 1 slide at a time on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mx-auto px-4 pt-8 pb-16 shadow-lg border rounded-lg mt-10">
      <div className="mb-4">
        <p className="font-bold text-xl"> Product Available</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {Array(8).fill(0).map(item =>  <div class="bg-white rounded-lg shadow-lg hover:shadow-xl border p-6 group">
          <div class="relative overflow-hidden">
            <img
              class="object-cover w-full h-48"
              src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-178,q-78,q-60"
              alt="Apollo AMAZER 4G LIFE"
            />
            <div class="absolute inset-0 bg-black hidden group-hover:block rounded-t-lg transition-all durat bg-opacity-40">
              <div class="absolute inset-0 flex items-center justify-center">
                <a
                  href="#"
                  title="Apollo AMAZER 4G LIFE 145/80 R12"
                  class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mt-4">AMAZER 4G LIFE</h3>
          <p class="text-gray-500 text-sm mt-2">145/80 R12</p>
          <div class="flex items-center mt-2">
            <GoStarFill className="text-yellow-300" />
            <span class="ml-1 text-gray-900">4</span>
            <span class="ml-2 text-gray-500">321 Reviews</span>
          </div>
          <div class="flex items-center justify-between mt-4">
            <span class="text-gray-900 font-bold text-lg">₹ 3,136</span>
            <span class="text-sm text-green-500">Offer available</span>
          </div>
          <div class="mt-2 text-gray-500 text-sm">Tube Type</div>
          <div class="mt-2 text-gray-500 text-sm">5 Year Warranty</div>
        </div>)}
      </div>
    </div>
  );
};

export default ProductCard;
