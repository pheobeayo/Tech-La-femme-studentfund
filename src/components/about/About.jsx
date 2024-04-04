import React from "react";
import aboutimage from "../../assets/aboutimage.svg";

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
        <div class="md:mx-96 md:px-16 px-6 mb-3 ">
          <h2 className="text-[#091913] text-3xl font-bold leading-10">
            About Us
          </h2>
        </div>
        <div className="grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="content-card w-full md:w-[70%] mb-5 h-full p-1">
            <p className=" text-[#091913] text-lg font-normal text-justify">
              At StudFund, we believe that every student deserves the
              opportunity to  pursue
              <br />
              their educational aspirations without financial
              constraints. Our mission is to
              <br />  empower students from diverse backgrounds to
              unlock their full potential
              <br />
               through accessible and transparent funding
              solutions.
            </p>
            <p className=" text-[#091913] text-lg font-normal text-justify">
              Driven by a passion for education and innovation, StudFund is revolutionizing
              <br />
               the way students access financial support for
              their academic endeavors.
              <br />  With a commitment to transparency, security, and
              accountability, we
              <br />
               provide a trusted platform where students can
              connect with contributors
              <br />
               who share our vision of advancing education.
            </p>
            <p className=" text-[#091913] text-lg font-normal text-justify">
              Our platform harnesses the power of blockchain technology to
              ensure that
              <br />
              funds are securely held in escrow until release conditions are
              met,  providing
              <br />
              peace of mind to both students and contributors. By
              leveraging cutting-edge
              <br />
               technology, we aim to create a seamless and efficient
              funding  process that
              <br />
              removes barriers to education and promotes equal opportunities for all.
              <br />
              
            </p>
            <p className=" text-[#091913] text-lg font-normal text-justify">
              At StudFund, we are more than just a funding platform; we are a community 
              <br />
              dedicated to supporting the next generation of leaders, innovators, and
              <br />
                change-makers. Together, we can make a difference
              in the lives of
              <br />
               students and empower them to realize their dreams.
            </p>
            <p className=" text-[#091913] text-lg font-normal text-justify">
              Join us in our mission to transform education and unlock the
              potential of
              <br />
              students worldwide. Together, we can build a brighter future for
              <br />
              generations to come
            </p>
          </div>

          <div className="content-card w-full md:w-[50%] mb-5 h-full">
            <img
              src={aboutimage}
              alt="aboutimage"
              className="object-fit-object  w-full object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
