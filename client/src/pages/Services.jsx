import React from "react";
import {
  ShieldCheck,
  Smile,
  Stethoscope,
  Wand2,
  Zap,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import aboutImage from "../assets/service-doctor.jpg"; // Replace with your image
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // ✅ SEO library

const services = [
  {
    title: "Teeth Whitening",
    description:
      "We will brighten your smile with our professional teeth whitening treatments.",
    icon: <BadgeCheck size={32} className="text-blue-500" />,
  },
  {
    title: "Dental Implants",
    description:
      "Our advanced implant technology ensures comfort, stability, and a flawless smile.",
    icon: <ShieldCheck size={32} className="text-blue-500" />,
  },
  {
    title: "Orthodontics",
    description:
      "Straighten your teeth with our modern orthodontic solutions, including braces and aligners.",
    icon: <Smile size={32} className="text-blue-500" />,
  },
  {
    title: "Checkups",
    description:
      "Routine dental checkups to maintain your oral health and catch problems early.",
    icon: <Stethoscope size={32} className="text-blue-500" />,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with veneers, bonding, and other cosmetic dental solutions.",
    icon: <Wand2 size={32} className="text-blue-500" />,
  },
  {
    title: "Emergency Dental Care",
    description:
      "When emergencies happen, our team provides urgent care when you need it most.",
    icon: <Zap size={32} className="text-blue-500" />,
  },
];

const Services = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Our Dental Services | Flossy Dental Care</title>
        <meta
          name="description"
          content="Explore award-winning dental services including whitening, implants, orthodontics, and emergency care at Flossy Dental Clinic."
        />
        <meta
          name="keywords"
          content="dental services, teeth whitening, dental implants, orthodontics, dental checkups, cosmetic dentistry, emergency dental care"
        />
        <link rel="canonical" href="https://yourdomain.com/services" />
        <meta property="og:title" content="Dental Services | Flossy Clinic" />
        <meta
          property="og:description"
          content="Award-winning dental treatments designed to perfect your smile. Schedule your appointment today."
        />
        <meta property="og:image" content="https://yourdomain.com/assets/service-doctor.jpg" />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="py-20 bg-[#f8fbff] font-jakarta services-section">
        <div className="container max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <header className="text-left mb-10"> {/* ✅ Semantic heading */}
              <h1 className="text-4xl font-bold text-blue-500 mb-2">Our Services</h1>
              <p className="text-gray-600 text-lg max-w-md">
                Discover a range of award-winning dental treatments tailored to your smile.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 services-grid">
              {services.map((service, idx) => (
                <article
                  key={idx}
                  className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 services-card"
                >
                  <div className="mb-3" aria-hidden="true">{service.icon}</div>
                  <h2 className="text-lg font-semibold text-blue-500 mb-1">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                  <Link to="/contact">
                    <button className="relative inline-flex items-center text-sm font-medium text-black-700 cursor-pointer group">
                      Get An Appointment
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full">
            <img
              src={aboutImage}
              alt="Smiling patient receiving dental care from professional doctor"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-xl shadow-md services-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
