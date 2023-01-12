import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { testimonialsData } from "../data/testimonials.data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map(({ avatarImg, name, company, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client-avatar">
                <img loading="lazy" src={avatarImg} alt={name} />
              </div>
              <h5 className="client-name">{name}</h5>
              <h6 className="client-company">{company}</h6>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
