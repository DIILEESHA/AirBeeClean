import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { CgMathMinus } from "react-icons/cg";
import "./single.css";
import { client } from "../../sanityClient"; // Adjust the path if needed
import { PortableText } from "@portabletext/react";

const Single = () => {
  const { slug } = useParams(); // Get the slug from the URL params
  const [activeIndex, setActiveIndex] = useState(0); // For accordion functionality
  const [serviceData, setServiceData] = useState(null); // State to store fetched service data
  const [expanded, setExpanded] = useState(false); // State to control "See More"/"See Less"

  useEffect(() => {
    // Fetch content from Sanity based on the slug
    const fetchService = async () => {
      const query = `*[_type == "single" && slug.current == $slug][0]{
        title,
        image {
          asset->{
            url
          }
        },
        description[] {
          ...,
          _type == "image" => {
            asset->{
              url
            }
          }
        },
        cards[] {
          title,
          body
        }
      }`;

      try {
        const result = await client.fetch(query, { slug }); // Fetch the data
        setServiceData(result); // Set the fetched data into state
        console.log("data", result); // Log the fetched data
      } catch (error) {
        console.error("Error fetching data from Sanity:", error); // Handle any error
      }
    };

    if (slug) {
      fetchService(); // Only fetch if slug is available
    }
  }, [slug]);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle accordion open/close
  };

  const handleDescriptionToggle = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  // Show loading state until the data is fetched
  if (!serviceData) return <div>Loading...</div>;

  return (
    <div className="single_container">
      {/* <div className="dilsa"> */}
      <div className="imra">
        <img
          className="kukka"
          src={serviceData?.image?.asset?.url}
          alt="Top Image"
        />
        <div className="mlop">
          <h2 className="header_titles">{serviceData.title}</h2>
        </div>
        {/* </div> */}
      </div>

      <div className="single_slider">
      <div className="single_sub_slide">
          <div className="link_card">
            <h2 className="link_service_card_title">Our Services</h2>
            <ul className="link_service_ul">
              <li className="link_service_li">
                <Link className="a" to="/service/regular-home-cleaning">
                  Regular Home Cleaning
                </Link>
              </li>
              <li className="link_service_li">
                <Link className="a" to="/service/deep-cleaning">
                  Deep Cleaning
                </Link>
              </li>
              <li className="link_service_li">
                <Link className="a" to="/service/airbnb-cleaning">
                  Airbnb & Short-Stay Cleaning
                </Link>
              </li>
              <li className="link_service_li">
                <Link className="a" to="/service/end-of-tenancy-cleaning">
                  End of Tenancy Cleaning
                </Link>
              </li>
              <li className="link_service_li">
                <Link className="a" to="/service/office-cleaning">
                  Office & Commercial Cleaning
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="single_sub_slide">
          <h2 className="single_service_title">{serviceData.title}</h2>
          <div className="line"></div>

          <div className="single_service_top_para">
            {/* Render description with both text and images */}
            {serviceData?.description.map((block, index) => {
              if (block._type === "image") {
                return (
                  <img
                    key={index}
                    style={{ width: "100%", marginBottom: "20px" }}
                    src={block.asset.url}
                    alt="Service description"
                  />
                );
              }
              if (block._type === "block") {
                const fullText = block.children
                  .map((child) => child.text)
                  .join(" ");
                const truncatedText =
                  fullText.length > 200
                    ? fullText.substring(0, 300) + "..."
                    : fullText;

                return (
                  <p key={index}>
                    {expanded || fullText.length <= 200
                      ? fullText
                      : truncatedText}
                    {fullText.length > 200 && (
                      <span
                        onClick={handleDescriptionToggle}
                        className="see_more_btn ffr"

                        // style={{ color: "blue", cursor: "pointer" }}
                      >
                        {expanded ? " See Less" : " See More"}
                      </span>
                    )}
                  </p>
                );
              }
              return null;
            })}
          </div>

          <div className="expand_card">
            {serviceData.cards?.map((card, index) => (
              <div className="single_expand_card" key={index}>
                <div className="nadan" onClick={() => handleToggle(index)}>
                  <div className="tile_base">
                    <h2 className="service_expand_title">{card.title}</h2>
                  </div>
                  <div className="tile_base">
                    {activeIndex === index ? (
                      <CgMathMinus className="pluser" />
                    ) : (
                      <GoPlus className="pluser" />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <>
                    <div className="line"></div>
                    <p className="expand_body">
                      <PortableText value={card.body} />
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Single;
