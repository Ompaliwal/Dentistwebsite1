// src/pages/AboutUs.jsx
import React from "react";
import { ShieldCheck, UserCheck, UserSquare } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import aboutImage from "../assets/about.jpg";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "Insurance Support",
    description: "Assistance with dental insurance and financing.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-blue-500" />,
    title: "Experienced Dentists",
    description: "Skilled professionals with years of expertise.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
    <div className="bg-blue-100 p-2 rounded-md">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const doctors = [
  {
    img: doctor1,
    name: "Dr. Benjamin Hayes",
    role: "Cosmetic Dentist",
  },
  {
    img: doctor2,
    name: "Dr. Olivia Carter",
    role: "Pediatric Dentist",
  },
  {
    img: doctor3,
    name: "Dr. Emily Ross",
    role: "Pediatric Dentist Specialist",
  },
];

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-white font-jakarta about-hero-section">
        <div className="container max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
          <div className="flex-1 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Dedicated To Your <span className="text-blue-500">Smile</span>, <br />
              Committed To Your <span className="text-blue-500">Care</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              At Dentistry, we believe that exceptional oral health is fundamental to your overall well-being and self-confidence.
              Our expert team of dental professionals is dedicated to providing top-quality, patient-centered care
              in a comfortable and friendly environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {features.map((item, index) => (
                <FeatureCard key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <img
              src={aboutImage}
              alt="Smiling dental team"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto lg:mx-0 h-[450px] object-cover about-hero-image"
            />
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 font-jakarta bg-white about-doctors-section">
        <div className="container max-w-4xl mx-auto text-left mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Skilled <span className="text-blue-500">Hands</span>, Caring Hearts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            At Dentistry, our expert team combines advanced dental expertise with genuine care to deliver outstanding treatment outcomes.
          </p>
  <button className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-xl font-medium hover:bg-blue-200 transition">
    <UserSquare className="w-5 h-5" />
    Our Doctors
  </button>

        </div>

        <div className="container max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 doctor-grid">
          {doctors.map((doc, idx) => (
            <div key={idx} className="relative group text-center overflow-hidden rounded-2xl shadow-md doctor-card">
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow">
                  <a href="#" className="text-gray-700 hover:text-blue-500"><FaWhatsapp size={16} /></a>
                  <a href="#" className="text-gray-700 hover:text-pink-500"><FaInstagram size={16} /></a>
                  <a href="#" className="text-gray-700 hover:text-blue-700"><FaLinkedin size={16} /></a>
                  <a href="#" className="text-gray-700 hover:text-sky-500"><FaTelegramPlane size={16} /></a>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                <p className="text-sm text-gray-600">{doc.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
