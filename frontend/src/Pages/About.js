import React from "react";
import "./About.css";
import logo from  '../imgpro/about2.jpg'

const About = () => {
  return (
    <div className="container">
      <h3>
        <strong>About Us</strong>
      </h3>
      <div className="main">
        <div className="image">
          <img src={logo} alt="about" height='400px'/>
        </div>
        <div className="sub" >
          <p>
            We are tried to make a simple inventory application,
            <br />
            if you have any issue please feel free to contact us.
            <br />
          </p>

          <p>
            <strong>
              We are delivering wide range of electrical products,
              <br />
              You can do enquiry or any other information <br />
              you can direct contact to our conatct person
            </strong>
          </p>
          <h2 style={{marginTop:60}}>Thank You</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
