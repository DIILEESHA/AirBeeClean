import React, { useEffect, useState } from "react";
import "./pricing.css";
import { GoArrowUpRight } from "react-icons/go";
import { client } from "../../sanityClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Pricing = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await client.fetch(
        `*[_type == "pricing"] | order(sortOrder asc)`
      );
      console.log("Fetched pricing data:", data);
      setPricing(data);
    };

    fetchServices();
  }, []);

  return (
    <div className="pricing_container">
      <h2 className="ser_title">Cleaning services for just about anyone</h2>
      <div className="prcing_grid_contain">
        <div className="maliya">
          <h2 className="pricing_main">
            🏡General Cleaning Services (Without Oven)
          </h2>

          {/* Arrow Navigation for Swiper */}
          <div className="slider_arrow">
            <div className="dem right_arrow">
              <img
                className="resizer"
                src="https://i.imgur.com/kaIGxCN.png"
                alt="→"
              />
            </div>

            <div className="dem left_arrow">
              <img
                className="resizer"
                src="https://i.imgur.com/kaIGxCN.png"
                alt="←"
              />
            </div>
          </div>
        </div>
        <div className="lines"></div>

        {/* Swiper for Slider */}
        <div className="pricing_grid">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3} // Adjust per screen size
            spaceBetween={30}
            navigation={{
              nextEl: ".right_arrow",
              prevEl: ".left_arrow",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
          >
            {pricing.map((price, idx) => (
              <SwiperSlide key={idx}>
                <div className="pricing_sub">
                  <h2 className="pricing_sub_title">{price.subtitle}</h2>
                  <div className="line"></div>

                  <h2 className="main_price">{price.price}</h2>
                  <p className="pricing_para">
                    {price.showFullDescription
                      ? price.description
                      : `${price.description?.slice(0, 20)}...`}
                    {price.description?.length > 40 && (
                      <button
                        className="see_more_btn ffr"
                        onClick={() => {
                          const updatedPricing = [...pricing];
                          updatedPricing[idx].showFullDescription =
                            !updatedPricing[idx].showFullDescription;
                          setPricing(updatedPricing);
                        }}
                      >
                        {price.showFullDescription ? "See less" : "See more"}
                      </button>
                    )}
                  </p>

                  <div className="line"></div>

                  <div className="commitment_section">
                    <ul className="commit_ul">
                      <li className="commit_li">
                        <div className="ri_icon">
                          <GoArrowUpRight className="bull" />
                        </div>
                        No contracts or commitments
                      </li>
                      <li className="commit_li">
                        <div className="ri_icon">
                          <GoArrowUpRight className="bull" />
                        </div>
                        Easy last-minute bookings
                      </li>
                      <li className="commit_li">
                        <div className="ri_icon">
                          <GoArrowUpRight className="bull" />
                        </div>
                        Same housekeeper for recurring customers
                      </li>
                      <li className="commit_li">
                        <div className="ri_icon">
                          <GoArrowUpRight className="bull" />
                        </div>
                        Live customer support
                      </li>
                    </ul>
                  </div>

                  {price.serviceOptions?.length > 0 && (
                    <div className="services_section">
                      <h2 className="service_title">Services</h2>
                      <div className="line"></div>
                      <ul className="servicez_ul">
                        {price.serviceOptions.map((opt, i) => (
                          <li className="se_li" key={i}>
                            <h2 className="serz_name">{opt?.name}</h2>
                            <h2 className="serz_name lpo">£{opt?.price}</h2>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {price.features?.length > 0 && (
                    <div className="services_section">
                      <h2 className="service_title">Features</h2>
                      <div className="line"></div>
                      <ul className="servicez_ul">
                        {(price.showAllFeatures
                          ? price.features
                          : price.features.slice(0, 3)
                        ).map((feature, i) => (
                          <li className="se_li" key={i}>
                            <h2 className="serz_name kera">{feature}</h2>
                          </li>
                        ))}
                      </ul>

                      <div className="line"></div>
                      {price.features.length > 2 && (
                        <button
                          className="see_more_btn"
                          onClick={() => {
                            const updatedPricing = [...pricing];
                            updatedPricing[idx].showAllFeatures =
                              !updatedPricing[idx].showAllFeatures;
                            setPricing(updatedPricing);
                          }}
                        >
                          {price.showAllFeatures
                            ? "See less features"
                            : "Click here to See more features"}
                        </button>
                      )}
                    </div>
                  )}

                  <div className="price_btn">
                    <button className="book">book now</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="bottom_grid">
          <div className="bottom_subs">
            <div className="pricing_sub">
              <h2 className="pricing_main">🐝Airbnb & Short Stay Turnaround</h2>
              <div className="line"></div>
              <p className="pricing_para">
                Fast, professional resets with optional linen service—perfect
                for Airbnb, Turno, or short-stay hosts.
              </p>
            </div>
          </div>
          <div className="bottom_subs">
            <div className="pricing_sub">
              <h2 className="pricing_main">✨Add-On & Specialist Services</h2>
              <div className="line"></div>{" "}
              <p className="pricing_para">
                Enhance your clean with specialist solutions for fabrics,
                furniture, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
