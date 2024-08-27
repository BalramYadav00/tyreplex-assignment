import React from 'react';
import Slider from 'react-slick/lib/slider';

const tireBrands = [
    "https://seeklogo.com/images/M/mrf-logo-5351D248B9-seeklogo.com.png",
    "https://seeklogo.com/images/M/mrf-logo-5351D248B9-seeklogo.com.png",
    "https://seeklogo.com/images/M/mrf-logo-5351D248B9-seeklogo.com.png",
    "https://seeklogo.com/images/M/mrf-logo-5351D248B9-seeklogo.com.png",
    "https://seeklogo.com/images/M/mrf-logo-5351D248B9-seeklogo.com.png",
    "https://seeklogo.com/images/M/mrf-logo-5351D248B9-seeklogo.com.png",
    // Add more brand images as needed
  ];
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 5, // Number of slides to show
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 420, // Breakpoint for mobile devices
            settings: {
              slidesToShow: 1, // Show 1 slide at a time on smaller screens
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // Breakpoint for mobile devices
            settings: {
              slidesToShow: 3, // Show 1 slide at a time on smaller screens
              slidesToScroll: 1,
            },
          },
          {
              breakpoint: 1200, // Breakpoint for mobile devices
              settings: {
                slidesToShow: 4, // Show 1 slide at a time on smaller screens
                slidesToScroll: 1,
              },
            },
        ],
    };

const DealsIn = () => {
  return (
    <section className=" mx-auto px-4 pt-8 pb-16 shadow-lg border rounded-lg mt-10">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Deals In
      </h2>
      <Slider  {...settings}>
        {tireBrands.map((brand, index) => (
          <div key={index} className="relative group p-2">
            <div
              className="bg-cover bg-center h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-lg mx-auto"
              style={{ backgroundImage: `url(${brand})` }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  );
};

export default DealsIn;
