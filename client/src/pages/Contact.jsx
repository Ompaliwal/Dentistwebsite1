import React, { useState } from 'react';
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
      {/* Section Heading */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto text-left mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-2">Contact Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Have questions or want to book an appointment? Reach out to our friendly team—we're here to help!
          </p>
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

          {/* Right Side Image (only visible on md and above) */}
          <div className="hidden md:flex justify-center pr-5 md:pr-10 mt-8 md:mt-0">
            <img
              src={doctorImage1}
              alt="Doctor with patient"
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
              alt="Doctor with patient"
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
