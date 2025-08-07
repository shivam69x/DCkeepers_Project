import React, { useState } from "react";

const faqs = [
  {
    question: "What makes DC Keepers different from other hosting providers?",
    answer:
      "At DC Keepers, we offer the customized plans according to the client business goals. Support team will always be available to resolve your queries.",
  },
  {
    question: "How do I know which hosting service is right for my business?",
    answer:
      "Choosing the right hosting service or plan depends on your business needs. If you are an entrepreneur shared hosting might be a good option for you, if you're scaling up or a giant enterprise the you can proceed with Cloud or VPS hosting solutions. Our team can help you to choose the specific plan according to your needs.",
  },
  {
    question: "Do you offer support if I run into technical issues?",
    answer:
      "Yes, Our support team is available 24/7 to help with any technical issues or queries related to the services. Support team will help you with setting up your hosting or facing issues after set-up.",
  },
  {
    question: "Are your services secure?",
    answer:
      "Yes, Security is a our top priority at DC Keepers. We use latest technologies and best practices to protect your data/websites and make sure that your services are safe with us & from online threats.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payments through credit cards, PayPal & UPI. If you need any other payment option, feel free to contact us.",
  },
  {
    question: "Can I migrate my existing website to DC Keepers?",
    answer:
      "Yes, we do offer website migration services from cPanel/Plesk panel. Our team will be working with you to ensure the minimal downtime while migrating the website. If you have any other panel or queries related to migration please feel free contact us.",
  },
];

export default function Faqsection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

  return (
    <section id="faq" className="max-w-[1150px] flex justify-center m-auto py-12 border border-slate-300 bg-white rounded-2xl mt-16 bg-gradient-to-t from-sky-200 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`accordion border border-solid border-gray-300 p-4  rounded-xl mb-8 lg:p-4 transition duration-500 ${
                  isOpen ? "bg-indigo-50 border-indigo-600" : ""
                }`}
              >
                <button
                  className={`px-6 accordion-toggle group inline-flex items-center justify-between text-left text-lg font-semibold leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 ${
                    isOpen ? "font-medium text-indigo-600" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h5>{faq.question}</h5>
                  {isOpen ? (
                    <MinusIcon />
                  ) : (
                    <PlusIcon />
                  )}
                </button>

                {isOpen && (
                  <div className="accordion-content w-full overflow-hidden pr-4 mt-4">
                    <p className="text-base text-gray-900 font-normal leading-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg
      className="w-6 h-6 text-gray-900 group-hover:text-indigo-600"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 12H18M12 18V6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      className="w-6 h-6 text-gray-900 group-hover:text-indigo-600"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 12H18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
