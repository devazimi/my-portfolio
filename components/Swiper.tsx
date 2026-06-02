import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const images = [
  {
    id: 1,
    projectImages: [
      "/images/3.jpg",
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
    ],
  },
  {
    id: 2,
    projectImages: [
      "/images/5.jpg",
      "/images/4.jpg",
      "/images/3.jpg",
      "/images/2.jpg",
      "/images/1.jpg",
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
    ],
  },
];

export default function GallerySlider({ id }: { id: number }) {
  const [activeFlashBtn, setActiveFlahBtn] = useState(false);

  const currentProjectImages = images.find((i) => i.id === id);

  return (
    <div
      className={`relative w-full max-w-6xl mx-auto py-16`}
      onMouseEnter={() => setActiveFlahBtn(true)}
      onMouseLeave={() => setActiveFlahBtn(false)}
    >
      {/* Prev Button */}
      <button
        className={`${activeFlashBtn ? "opacity-100" : "opacity-0"} custom-prev absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full bg-btn-light text-btn-dark p-3 md:p-4 shadow-lg text-xs md:text-lg hover:text-sm hover:md:text-xl  transition-all duration-300 `}
      >
        <FaArrowLeft />
      </button>

      {/* Next Button */}
      <button
        className={`${activeFlashBtn ? "opacity-100" : "opacity-0"} custom-next absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full bg-btn-light text-btn-dark p-3 md:p-4 shadow-lg text-xs md:text-lg hover:text-sm hover:md:text-xl transition-all`}
      >
        <FaArrowRight />
      </button>

      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 1,
          scale: 0.85,
        }}
        className="gallery-swiper"
      >
        {currentProjectImages?.projectImages.map((image, index) => (
          <SwiperSlide
            key={index}
            className="!w-[220px] md:!w-[280px] lg:!w-[320px]"
          >
            <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden">
              <Image
                src={image}
                fill
                alt={`slide-${index}`}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
