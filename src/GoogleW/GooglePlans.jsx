import React, { useState, useEffect } from "react";
import { Check, Star } from "lucide-react";
import GoogleImg from "../assets/googleall01.png"
import { useCurrency } from "../components/CurrencyContext.jsx";
import { useNavigate } from "react-router-dom";


const GooglePlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { convertPrice } = useCurrency();
  

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  
    const navigateToBilling = (plan) => {
      navigate("/billing", {
        state: {
          plan: {
            ...plan,
            category: "Google Plans", // helpful for invoice display
            type: "monthly", // you can modify this if you add durations
          },
        },
      });
    };

  const plans = [
    {
      name: "Basic",
      price: 163,
      originalPrice: 326,
      savings: "50%",
      description: "Perfect for personal websites and blogs",
      features: [
        "Custom and secure business email",
        "100 participant video meetings",
        "30 GB pooled storage per user",
        "Security and management controls",
        "Standard support",
      ],
      ctaText: "Buy Now",
      popular: false,
    },
    {
      name: "Professional",
      price: 580,
      originalPrice: 1160,
      savings: "50%",
      description: "Ideal for growing businesses and portfolios",
      features: [
    "Custom and secure business email",
        "150 participant video meetings + Recording",
        "2 TB pooled storage per user",
        "Security and management controls",
        "Standard support (paid upgrade to enhanced support)",
      ],
      ctaText: "Buy Now",
      popular: true,
    },
    {
      name: "Business",
      price: 999,
      originalPrice: 1998,
      savings: "50%",
      description: "Advanced features for professional websites",
      features: [
         "Custom and secure business email + ediscovery, retention",
        "500 participant video meetings + recording, attendance tracking",
        "5 TB pooled storage per user",
        "Enhanced security and management controls, including Vault and advanced endpoint management",
        "Standard support (paid upgrade to enhanced support)",
      ],
      ctaText: "Buy Now",
      popular: false,
    },
    {
      name: "Enterprise",
      price: 1499,
      originalPrice: 2998,
      savings: "50%",
      description: "Maximum performance for high-traffic sites",
      features: [
         "Custom and secure business email + eDiscovery, retention, S/MIME encryption",
        "1,000 participant video meetings + recording, attendance tracking, noise cancellation, in-domain live streaming",
        "5 TB pooled storage per user, with ability to request more",
        "Advanced security, management and compliance controls, including Vault, DLP, data regions and enterprise endpoint management",
      ],
      ctaText: "Buy Now",
      popular: false,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
            <div className="flex justify-center items-center flex-col w-[350px] lg:w-[550px] m-auto mb-6">
                <img className="" src={GoogleImg} alt="google suits" />
            </div>

          <h2 className="text-2xl sm:text-[40px] font-bold text-[#0e3c47] mb-5 items-center ">
            Choose Your Perfect
            <span className="text-blue-600 "> Microsoft 365 Plan</span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed">
            Get started with complete confidence. Our 30-day money-back
            guarantee means it's risk-free.
          </p>
        </div>

       {/* Plans Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {plans.map((plan, index) => (
    <div
      key={plan.name}
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
        plan.popular ? "ring-4 ring-green-500 ring-opacity-80" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      {/* ⭐️ ADD Flex column here */}
      <div className="p-8 flex flex-col h-full">
        {/* Plan Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#0e3c47] mb-2">
            {plan.name}
          </h3>
          <p className="text-[#0e3c47da] text-sm mb-4">{plan.description}</p>

          {/* Pricing */}
          <div className="mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-400 text-lg line-through">
                {convertPrice(plan.originalPrice)}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                Save {plan.savings}
              </span>
            </div>
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-[#0e3c47]">
                {convertPrice(plan.price)}
              </span>
              <span className="text-gray-600 ml-1">/month</span>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-8">
          <ul className="space-y-4">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Spacer to push the button down */}
        <div className="flex-grow" />

        {/* CTA Button */}
        <button
        onClick={() => navigateToBilling(plan)}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 ${
            plan.popular
              ? "rounded-xl border border-white bg-gradient-to-r from-[#0e3c47] to-[#0040514d] text-white shadow-lg backdrop-blur-md transition duration-300 hover:border-white/100 hover:from-[#133c46] hover:to-[#0040515d] hover:shadow-xl"
              : "bg-gray-100 text-gray-900 hover:bg-blue-50 hover:text-blue-700 border-2 border-transparent hover:border-blue-200"
          }`}
        >
          {plan.ctaText}
        </button>

        
      </div>
    </div>
  ))}
</div>


        {/* Bottom Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/90 border  backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-11">
              Best Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  99.9% Uptime
                </h4>
                <p className="text-gray-600 text-xs">
                  Guaranteed reliable hosting
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  Free Migration
                </h4>
                <p className="text-gray-600 text-xs">
                  We'll move your site for free
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  24/7 Support
                </h4>
                <p className="text-gray-600 text-xs">
                  Expert help when you need it
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-3">
                  <Check className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
                  Multi Data Center
                </h4>
                <p className="text-gray-600 text-xs">
                  Worldwide Data Center Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GooglePlans;
