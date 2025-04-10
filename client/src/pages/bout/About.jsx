import React, { useEffect, useState } from "react";
import { client } from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import "./bout.css";
import Services from "../../components/service/Services";
import Loader from "../../components/loader/Loader";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"][0]{
          title,
          description,
          missiontitle,
          missionImage{asset->{url}},
          missionbody,
          committitle,
          commitTitle{asset->{url}},
          commitbody
        }`
      )
      .then((data) => setAboutData(data))
      .catch(console.error);
  }, []);

  if (!aboutData)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="abo">
      <div className="mahos">
        <h2 className="header_titles"> {aboutData.title}</h2>
      </div>

      <div className="intro_base">
        <p className="intro_para">{aboutData.description}</p>
      </div>

      {/* Mission Section */}
      <div className="mission_base">
        <div className="mision_grid dsx">
          <div className="mision_sub_grid ">
            <h2 className="our_mission">{aboutData.missiontitle}</h2>
            <div className="line"></div>
            <div className="our_mission_para">
              <PortableText value={aboutData.missionbody} />
            </div>
          </div>
          <div className="mision_sub_grid ">
            <div className="mission_i">
              <img
                src={aboutData.missionImage?.asset?.url}
                alt="Mission"
                className="mission_img"
              />
            </div>
          </div>
        </div>
      </div>

      <Services />

      {/* Commitment Section */}
      <div className="mission_base">
        <div className="mision_grid dlx">
          <div className="mision_sub_grid">
            <div className="mission_i">
              <img
                src={aboutData.commitTitle?.asset?.url}
                alt="Commitment"
                className="mission_img"
              />
            </div>
          </div>
          <div className="mision_sub_grid">
            <h2 className="our_mission">{aboutData.committitle}</h2>
            <div className="line"></div>
            <div className="our_mission_para">
              <PortableText value={aboutData.commitbody} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
