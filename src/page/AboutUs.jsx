import teams from "../images/team.jpg"


const AboutUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3">
      <p>
        <b>CloudForge Bank</b> is a secure and modern online banking platform designed to simplify personal and business
        financial management. Our services combine speed, reliability, and security to help users manage accounts, transfer
        funds, and access financial tools from anywhere, at any time. Built with cutting-edge cloud technologies,
        CloudForge ensures a seamless and trustworthy digital banking experience.
      </p>
      <p>
        Our mission is to empower individuals and businesses with innovative banking solutions that enhance financial
        freedom and convenience. We prioritize user experience, offering a user-friendly interface, robust security
        measures, and responsive customer support. Whether you're managing personal finances or running a business,
        CloudForge Bank is your trusted partner in achieving financial success.
       </p>
       <div>
        <h2>Meet The Team</h2>
        <img
          src={teams}
          alt="Tech-Tribe Banner"
          width="100%"
          height="auto"
          className="home-image"
        />
        <p>

        </p>
       </div>
    </div>
  );
};

export default AboutUs;
