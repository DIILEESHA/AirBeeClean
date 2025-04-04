import React, { useEffect, useState, useRef } from "react";
import { client, urlFor } from "../../sanityClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./service.css";
import { Link } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Services = () => {
  const [services, setServices] = useState([]);
  const swiperRef = useRef(null); // Reference for Swiper instance

  useEffect(() => {
    client
      .fetch(`*[_type == "service"]`)
      .then((data) => setServices(data))
      .catch(console.error);
  }, []);

  return (
    <div className="service_container">
      <h2 className="ser_title">Cleaning services for just about anyone</h2>
      <div className="dol">
        {/* Custom Navigation Buttons */}
        <div className="custom-swiper-buttons">
          <button
            className="tin prus"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <MdArrowBackIos className="halo" />
          </button>

          <button
            className="tin crus"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <MdArrowForwardIos className="halo" />
          </button>
        </div>

        <Swiper
          className="devon"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in ref
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={false} // Disable default navigation
        >
          {services.map((service) => (
            <SwiperSlide key={service._id}>
              <div className="service_sub_grid">
                <img
                  src={urlFor(service.image).url()}
                  alt={service.title}
                  className="service_img"
                />

                <p className="service_name">{service.title}</p>
                <ul className="service_ul">
                  {service.features?.map((feature, index) => (
                    <li key={index} className="service_li">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="bottom_btner">
                  <Link to={`/service/${service._id}`}>
                    <button className="bottom_btn">Learn More</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h2 className="ser_title">Booking is quick and easy</h2>

      <div className="bookin_process">
        <div className="bookin_sub">
          <img
            className="hab"
            src="https://prohousekeepers.com/wp-content/uploads/2023/02/how-we-work-1.png"
            alt=""
          />
          <h2 className="book_title">book</h2>
          <p className="book_p">Choose your ideal time and service.</p>
        </div>
        <div className="bookin_sub">
          <img
            className="hab"
            src="https://prohousekeepers.com/wp-content/uploads/2023/02/how-we-work-2.png"
            alt=""
          />
          <h2 className="book_title">CLEAN</h2>
          <p className="book_p">
            Once confirmed, we will arrive ready to clean with all supplies!
          </p>
        </div>{" "}
        <div className="bookin_sub">
          <img
            className="hab"
            src="https://prohousekeepers.com/wp-content/uploads/2023/02/how-we-work-3.png"
            alt=""
          />
          <h2 className="book_title">SIT BACK & RELAX</h2>
          <p className="book_p">
            Enjoy your clean home backed by our 100% satisfaction guarantee!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
