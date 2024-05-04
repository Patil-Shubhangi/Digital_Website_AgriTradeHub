import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/veg.png";
import "./about.css";

const TeamMember = ({ name, role, imageSrc, altText, description }) => (
  <div className="team_member">
    <div className="team_img">
      <img src={imageSrc} alt={altText} />
    </div>
    <div className="content">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <section className="about">
        <Back
          name="About AgriTradeHub"
          title="A Digital Platform"
          cover={img}
        />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="AgriTradeHub" subtitle="AgriConnect: Where Trade Blossoms" />
            <p>
              Welcome to AgriTradeHub, your gateway to a world of agricultural trade opportunities. Our platform brings together farmers, producers, buyers, and sellers from across the globe, fostering connections that cultivate success.
            </p>
            <p>
              Whether you're seeking to expand your market reach, source high-quality products, or optimize your supply chain, AgriTradeHub is here to empower you with seamless transactions, valuable insights, and unparalleled networking. Join us in redefining the future of agritrade, where growth knows no bounds.
            </p>
            <button className="btn2">Subscribe Us</button>
          </div>
          <div className="right row">
            <img src="https://www.icegif.com/wp-content/uploads/2023/02/icegif-582.gif" alt="Market" />
          </div>
        </div>
      </section>

      <div className="About-container">
        <div className="wrapper">
          <div className="team">
            <TeamMember
              name="Producer"
              role="Farmers"
              imageSrc="https://letsdrawthat.com/wp-content/uploads/images/farmer/how-to-draw-a-farmer-color-drawing-950x950.jpg"
              altText="Farmers"
              description="As a crucial part of AgriTradeHub, our producers are the backbone of our agricultural ecosystem. These dedicated individuals are primarily farmers, harvesting crops, rearing livestock, and managing agricultural activities. At AgriTradeHub, we honor and support our producers, recognizing their invaluable contributions to our platform as a whole."
            />
            <TeamMember
              name="Consumer"
              role="Selling the Products"
              imageSrc="https://cdn3.vectorstock.com/i/1000x1000/11/72/farm-agriculture-logo-or-label-happy-farmer-vector-20571172.jpg"
              altText="Sellers"
              description="At AgriTradeHub, consumers are at the heart of our mission to bridge the gap between producers and buyers in the agricultural marketplace. As consumers, our role is multifaceted and pivotal in the agricultural supply chain. We are individuals, businesses, and communities who rely on agricultural products for sustenance, commerce, and cultural practices."
            />
            <TeamMember
              name="Buyers"
              role="Buying the Products"
              imageSrc="https://th.bing.com/th/id/R.4bb6486a7630a2e6199febd557eb96e5?rik=whT2Kf810F0qRg&riu=http%3a%2f%2fwww.weblab24.it%2fwp-content%2fuploads%2f2017%2f05%2fbuyer-persona-image1.png&ehk=hr%2fIXrMeuVljIgXoYK2GHJ1gEqWMuDMeeIc1R4cLuRo%3d&risl=&pid=ImgRaw&r=0"
              altText="Buyers"
              description="As integral members of AgriTradeHub, buyers play a pivotal role in facilitating transactions and driving market dynamics within the agricultural ecosystem. Buyers encompass a diverse range of entities, including retailers, wholesalers, distributors, and food service providers, all of whom play crucial roles in connecting producers with end consumers."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
