import React from "react";
import aboutimg from "../assets/aboutimg.png";
const About = () => {
  return (
    <div>
      {/* about text  */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div>
          <img src={aboutimg} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
          The unseen of spending three years at Pixelgrade
          </h2>
          <p className="md:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
