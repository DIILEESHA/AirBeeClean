import React, { useEffect, useState } from "react";
import "./pricing.css";
import { GoArrowUpRight } from "react-icons/go";
import { client } from "../../sanityClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Prices from "./prices.json";
const Pricing = () => {
  const [pricing, setPricing] = useState([]);
  const [showAllAddons, setShowAllAddons] = useState(false);

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
      <div className="maho">
        <h2 className="header_titles">Starting Rates by Home Size</h2>
      </div>
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
            spaceBetween={20}
            slidesPerView={1} // Default for mobile
            navigation={{
              nextEl: ".right_arrow",
              prevEl: ".left_arrow",
            }}
            breakpoints={{
              // When window width is >= 576px (small tablets)
              676: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // When window width is >= 768px (tablets)
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // When window width is >= 992px (small desktops)
              992: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              // When window width is >= 1200px (desktops)
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
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

              <div className="table_view">
                <div className="tab">
                  <div className="row_view">
                    <h2 className="prop">Property Type </h2>
                  </div>
                  <div className="row_view">
                    <h2 className="prop">Clean Only</h2>
                  </div>
                </div>
                <div className="line"></div>

                {/* {pricing.map((indexs, i) => { */}

                {Prices.generalCleaning.map((priced, idx) => (
                  <div className="tab" key={idx}>
                    <div className="row_view">
                      <h2 className="prop max">{priced?.propertyType}</h2>
                    </div>
                    <div className="row_view">
                      <h2 className="prop max">{priced.cleanOnlyPrice}</h2>
                    </div>
                  </div>
                  // })}
                ))}

                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="bottom_subs">
            <div className="pricing_sub">
              <h2 className="pricing_main">✨Add-On & Specialist Services</h2>
              <div className="line"></div>
              <p className="pricing_para">
                Enhance your clean with specialist solutions for fabrics,
                furniture, and more.
              </p>

              <div className="table_view">
                <div className="tab">
                  <div className="row_view">
                    <h2 className="prop">Service</h2>
                  </div>
                  <div className="row_view">
                    <h2 className="prop">Price (From)</h2>
                  </div>
                </div>
                <div className="line"></div>

                {(showAllAddons
                  ? Prices.addons
                  : Prices.addons.slice(0, 4)
                ).map((addon, idx) => (
                  <div className="tab" key={idx}>
                    <div className="row_view">
                      <h2 className="prop max">{addon.service}</h2>
                    </div>
                    <div className="row_view">
                      <h2 className="prop max">{addon.priceFrom}</h2>
                    </div>
                  </div>
                ))}

                {Prices.addons.length > 3 && (
                  <div className="see_more_container">
                    <button
                      className="see_more_btn"
                      onClick={() => setShowAllAddons(!showAllAddons)}
                    >
                      {showAllAddons
                        ? "See less services"
                        : "Click here to See more services"}
                    </button>
                  </div>
                )}

                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
