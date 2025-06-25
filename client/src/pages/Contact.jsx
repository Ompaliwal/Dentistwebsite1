import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; // ✅ SEO Helmet
import { Phone, Mail, Plus, Minus } from 'lucide-react';
import doctorImage from '../assets/faq-doctor.jpg';
import doctorImage1 from '../assets/Doctorcontact.jpg';

const ContactPage = () => {
  const faqs = [
    {
      question: 'How Often Should I Visit The Dentist For A Checkup?',
      answer: 'We recommend visiting every 6 months for a routine cleaning and checkup.',
    },
    {
      question: 'Do You Accept Insurance Plans?',
      answer: 'Yes, we accept most major dental insurance plans. Contact us for details.',
    },
    {
      question: 'Is Teeth Whitening Safe?',
      answer: 'Absolutely. Our treatments are professional and carefully supervised.',
    },
    {
      question: 'What Should I Do In Case Of A Dental Emergency?',
      answer: 'Call our office immediately. We prioritize emergency cases to provide urgent care.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-jakarta">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Flossy Dentistry</title>
        <meta name="description" content="Get in touch with Flossy Dentistry for appointments, inquiries, and expert dental care. We're here to help you smile brighter." />
        <link rel="canonical" href="https://yourdomain.com/contact" />
        <meta property="og:title" content="Contact Us | Flossy Dentistry" />
        <meta property="og:description" content="Have questions? Reach out to our friendly dental team. We're here to help you smile better!" />
        <meta property="og:image" content="https://yourdomain.com/assets/faq-doctor.jpg" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Section Heading */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto text-left mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-2">Contact Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Have questions or want to book an appointment? Reach out to our friendly team—we're here to help!
          </p>
        </div>

        {/* Map Preview */}
        <div className="container max-w-4xl mx-auto mb-12">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg" style={{ height: '350px' }}>
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315904!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f7fd81%3A0xf577c8b1a0e8e8e8!2sDentist!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div>
            <p className="text-gray-700 mb-4">
              Ready for a brighter, healthier smile? Booking an appointment at Dentistry is quick and convenient.
            </p>

            {/* Office Hours */}
            <div className="border-t pt-4 space-y-2 text-sm text-gray-800">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span>9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM – 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>

            {/* Contact Boxes */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <div className="bg-blue-50 p-4 rounded-lg w-full">
                <div className="flex items-center gap-2 mb-1 text-blue-500 font-semibold">
                  <Mail className="w-5 h-5" />
                  Email Us
                </div>
                <p className="text-sm text-gray-600">contact@dentistryhub.com</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg w-full">
                <div className="flex items-center gap-2 mb-1 text-blue-500 font-semibold">
                  <Phone className="w-5 h-5" />
                  Call Us
                </div>
                <p className="text-sm text-gray-600">+1 (555) 123–4567</p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden md:flex justify-center pr-5 md:pr-10 mt-8 md:mt-0">
            <img
              src={doctorImage1}
              alt="Smiling dentist ready to assist patients"
              className="rounded-2xl w-full max-w-md object-cover"
              style={{ maxHeight: '450px' }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f8fbff]">
        <div className="container max-w-4xl mx-auto grid md:grid-cols-2 items-start gap-10">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={doctorImage}
              alt="Dentist consulting a patient about dental care"
              className="w-full max-w-md rounded-xl shadow-md mx-auto"
            />
          </div>

          {/* Right FAQs */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Got <span className="text-blue-500">Questions</span>? We've Got Answers!
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-blue-100 rounded-lg px-4 py-3 cursor-pointer transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center font-medium text-gray-800">
                    <span>{faq.question}</span>
                    {openIndex === index ? (
                      <Minus size={20} className="transition-transform duration-300 rotate-180" />
                    ) : (
                      <Plus size={20} className="transition-transform duration-300" />
                    )}
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out`}
                    style={{
                      maxHeight: openIndex === index ? '500px' : '0',
                      opacity: openIndex === index ? 1 : 0,
                      marginTop: openIndex === index ? 8 : 0,
                    }}
                  >
                    <p className="text-sm text-gray-700 py-2">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
