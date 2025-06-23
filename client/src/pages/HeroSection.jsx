import React from 'react';
import { Phone, Package, ArrowRight } from 'lucide-react';
import doctorImage from '../assets/doctor.jpg'; // Replace with your actual image
import aboutImage from '../assets/about.jpg'; // Replace with your image
import { ShieldCheck, UserCheck } from 'lucide-react';
import { Link } from "react-router-dom";
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';
import { UserSquare } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

import doctorImage1 from '../assets/contact-doctor.jpg'; // Update the image path as needed
import { PhoneCall } from 'lucide-react';



const services = [
  {
    label: "Teeth Whitening",
    image: "service1.jpg",
  },
  {
    label: "Dental Implants",
    image: "service2.jpg",
  },
  {
    label: "Cosmetic Dentistry",
    image: "service3.jpg",
  },
];

const reviews = [
  {
    title: 'The Best Dental Care!',
    text: 'Dr. Michael Carter and his team made my smile brighter with their amazing teeth whitening service. The results were beyond my expectations!',
    name: 'Jessica Reynolds',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    title: 'A Pain-Free Experience!',
    text: 'I was nervous about getting dental implants, but Dr. James Patel made the process smooth and painless. I can finally smile with confidence!',
    name: 'Mark Thompson',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    rating: 5,
  },
  {
    title: 'Super Friendly Staff!',
    text: 'The whole Flossy team was welcoming and professional. I never thought going to the dentist could be enjoyable.',
    name: 'Priya Mehta',
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
    rating: 4,
  },
  {
    title: 'Outstanding Service!',
    text: 'From consultation to treatment, everything was perfect. The modern equipment and gentle approach made all the difference.',
    name: 'David Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    title: 'Highly Recommended!',
    text: 'Professional, caring, and efficient. My family has been coming here for years and we couldn\'t be happier with the service.',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    rating: 5,
  },
  {
    title: 'Amazing Results!',
    text: 'The orthodontic treatment exceeded my expectations. My teeth look perfect and the journey was surprisingly comfortable.',
    name: 'Alex Chen',
    avatar: 'https://randomuser.me/api/portraits/men/25.jpg',
    rating: 4,
  },
];



const ReviewCard = ({ review }) => (
  <div className="min-w-[320px] max-w-[320px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mx-3 flex-shrink-0">
    <h4 className="text-lg font-semibold mb-3 text-gray-900">{review.title}</h4>
    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{review.text}</p>
    <div className="flex items-center gap-3 mt-auto">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
      />
      <div>
        <p className="font-medium text-gray-900">{review.name}</p>
        <div className="text-yellow-400 text-sm flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <>
      <section className="bg-gray-50 py-16 text-center font-jakarta">
        <div className="container">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Creating Beautiful Smiles <br /> with <span className="text-blue-500">Expert Care</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            At Flossy, we believe in creating healthy, confident smiles with expert care and advanced technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 items-center justify-center flex-wrap mb-10">
            {/* Get Started Button (Contact Page) */}
            <Link to="/contact">
              <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-blue-600 transition cursor-pointer">
                <div className="bg-white p-1.5 rounded-md">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                Get Started
              </button>
            </Link>

            {/* Our Services Button */}
            <Link to="/services">
              <button className="flex items-center gap-2 border border-blue-500 text-black px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition cursor-pointer">
                <div className="bg-blue-500 p-1.5 rounded-md">
                  <Package className="w-5 h-5 text-white" />
                </div>
                Our Services
              </button>
            </Link>
          </div>

          {/* Doctor Image with Side Cards */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Left Card - Contact Page */}
            <Link to="/contact" className="w-72">
              <div className="bg-white rounded-xl shadow-md px-6 py-4 text-left w-full flex items-center justify-between hover:shadow-lg transition">
                <div>
                  <h4 className="font-semibold text-gray-900">Book Appointment</h4>
                  <p className="text-sm text-gray-500">Ready for a Healthier Smile?</p>
                </div>
                <div className="bg-blue-500 text-white p-2 rounded-md">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Doctor Image */}
            <img
              src={doctorImage}
              alt="Dentist Doctor"
              className="w-[280px] sm:w-[340px] rounded-xl"
            />

            {/* Right Card - Services Page */}
            <Link to="/services" className="w-72">
              <div className="bg-white rounded-xl shadow-md px-6 py-4 text-left w-full flex items-center justify-between hover:shadow-lg transition">
                <div>
                  <h4 className="font-semibold text-gray-900">Patient Comfort</h4>
                  <p className="text-sm text-gray-500">Painless Treatments</p>
                </div>
                <div className="bg-blue-500 text-white p-2 rounded-md">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white font-jakarta text-center">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-blue-500">Dental Care</span> For Every Smile
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            At Flossy, we offer a full range of dental treatments to keep your smile healthy, bright, and confident.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={service.image}
                  alt={service.label}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium text-gray-800 shadow-sm">
                  {service.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white font-jakarta">
        <div className="container">
          <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
            {/* Left Text Content */}
            <div className="flex-1 text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Dedicated To Your <span className="text-blue-500">Smile</span>, <br />
                Committed To Your <span className="text-blue-500">Care</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                At Flossy, we believe that a healthy smile is the key to confidence and well-being.
                Our expert team of dental professionals is dedicated to providing top-quality, patient-centered care
                in a comfortable and friendly environment.
              </p>

              <Link to="/about">
                <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-3 rounded-xl font-medium hover:bg-blue-200 transition cursor-pointer">
                  <ShieldCheck className="w-5 h-5" />
                  About Us
                </button>
              </Link>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {/* Card 1 */}
                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <ShieldCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Insurance Support</h4>
                    <p className="text-sm text-gray-600">Assistance with dental insurance and financing.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <UserCheck className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Experienced Dentists</h4>
                    <p className="text-sm text-gray-600">Skilled professionals with years of expertise.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img
                src={aboutImage}
                alt="Smiling dental team"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto lg:mx-0 h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .scroll-container {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 40s;
          }
        }
      `}</style>

      <section className="bg-gradient-to-b from-gray-50 to-white py-16 font-jakarta overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-500">Happy</span> Patients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Hear from our satisfied patients about their experiences at Flossy and how our expert care has transformed their dental health.
            </p>
          </div>

          {/* Infinite Scroll Container */}
          <div className="scroll-container">
            <div className="flex animate-scroll">
              {duplicatedReviews.map((review, index) => (
                <ReviewCard key={`${review.name}-${index}`} review={review} />
              ))}
            </div>
          </div>

          {/* Bottom fade effect for better visual */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              ⭐ Trusted by 500+ happy patients
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 font-jakarta">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start">

          {/* Left Side Content */}
          <div className="flex flex-col justify-start space-y-6 pl-6 md:pl-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                New To <span className="text-blue-500">Flossy</span>? Enjoy A Special <br />
                Welcome <span className="text-blue-500">Offer</span>!
              </h2>
              <p className="text-gray-600 text-base">
                First-time patients get a free consultation and exclusive discounts on their first treatment.
              </p>
            </div>

            {/* Contact Button */}
            <Link to="/contact">
            <button className="flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-3 rounded-xl font-medium w-fit hover:bg-blue-200 transition cursor-pointer">
              <PhoneCall className="w-5 h-5" />
              Contact Us
            </button>
            </Link>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center pr-5 md:pr-10 mt-8 md:mt-0">
            <img
              src={doctorImage1}
              alt="Docstors"
              className="rounded-2xl w-full max-w-md object-cover"
              style={{ maxHeight: '450px' }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 font-jakarta bg-white">
        <div className="container max-w-4xl mx-auto text-left mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Skilled <span className="text-blue-500">Hands</span>, Caring Hearts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            At Flossy, our team of skilled and compassionate dental professionals is dedicated to providing top-quality care.
          </p>
          <button className="mt-4 inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-xl font-medium hover:bg-blue-200 transition">
            <UserSquare className="w-5 h-5" />
            Our Doctors
          </button>
        </div>

        <div className="container max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[{
            img: doctor1,
            name: 'Dr. Benjamin Hayes',
            role: 'Cosmetic Dentist'
          }, {
            img: doctor2,
            name: 'Dr. Olivia Carter',
            role: 'Pediatric Dentist'
          }, {
            img: doctor3,
            name: 'Dr. Emily Ross',
            role: 'Pediatric Dentist Specialist'
          }].map((doc, idx) => (
            <div key={idx} className="relative group text-center overflow-hidden rounded-2xl shadow-md">
              {/* Image with hover effect */}
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Social links overlay */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow">
                  <a href="#" className="text-gray-700 hover:text-blue-500"><FaWhatsapp size={16} /></a>
                  <a href="#" className="text-gray-700 hover:text-pink-500"><FaInstagram size={16} /></a>
                  <a href="#" className="text-gray-700 hover:text-blue-700"><FaLinkedin size={16} /></a>
                  <a href="#" className="text-gray-700 hover:text-sky-500"><FaTelegramPlane size={16} /></a>
                </div>
              </div>

              {/* Name and Role */}
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

export default HeroSection;
