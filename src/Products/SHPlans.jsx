import React, { useState, useEffect } from "react";
import { Check, Star } from "lucide-react";
import { useCurrency } from "../components/CurrencyContext.jsx"; // <--- NEW
import { useNavigate } from "react-router-dom";

export default function SHPlans() {
  const [selectedOS, setSelectedOS] = useState("linux");
  const [isVisible, setIsVisible] = useState(false);
  const { convertPrice } = useCurrency(); // <--- NEW

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
            category: "Shared Hosting", // helpful for invoice display
            type: "monthly", // you can modify this if you add durations
          },
        },
      });
    };

  const plans = {
    linux: [
      {
        name: "Basic",
        price: "199",
        originalPrice: "398",
        savings: "50%",
        description: "Perfect for personal websites and blogs",
        features: [
          "1 Website",
          "1 cPanel Account",
          "2 GB Storage",
          "5GB Bandwidth",
          "5 Email Account",
          "3 Sub Domains",
          "1 Mssql Database",
        ],
        ctaText: "Buy Now",
        popular: false,
      },
      {
        name: "Professional",
        price: "259",
        originalPrice: "518",
        savings: "50%",
        description: "Ideal for growing businesses and portfolios",
        features: [
          "5 Website",
          "5 cPanel Account",
          "5 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Account",
          "Unlimited Sub Domains",
          "Unlimited Database",
        ],
        ctaText: "Buy Now",
        popular: true,
      },
      {
        name: "Business",
        price: "349",
        originalPrice: "698",
        savings: "50%",
        description: "Advanced features for professional websites",
        features: [
          "10 Website",
          "10 cPanel Account",
          "10 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Account",
          "Unlimited Sub Domains",
          "Unlimited Database",
        ],
        ctaText: "Buy Now",
        popular: false,
      },
      {
        name: "Enterprise",
        price: "599",
        originalPrice: "1,198",
        savings: "50%",
        description: "Maximum performance for high-traffic sites",
        features: [
          "Unlimited Website",
          "Unlimited cPanel Account",
          "20 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Account",
          "Unlimited Sub Domains",
          "Unlimited Database",
        ],
        ctaText: "Buy Now",
        popular: false,
      },
    ],
    windows: [
      {
        name: "Basic",
        price: "199",
        originalPrice: "398",
        savings: "50%",
        description: "Perfect for personal websites and blogs",
        features: [
          "1 Website",
          "1 Plesk Account",
          "2 GB Storage",
          "5GB Bandwidth",
          "5 Email Account",
          "3 Sub Domains",
          "1 Mssql Database",
        ],
        ctaText: "Buy Now",
        popular: false,
      },
      {
        name: "Professional",
        price: "259",
        originalPrice: "518",
        savings: "50%",
        description: "Ideal for growing businesses and portfolios",
        features: [
          "5 Website",
          "5 Plesk Account",
          "5 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Account",
          "Unlimited Sub Domains",
          "Unlimited Database",
        ],
        ctaText: "Buy Now",
        popular: true,
      },
      {
        name: "Business",
        price: "349",
        originalPrice: "698",
        savings: "50%",
        description: "Advanced features for professional websites",
        features: [
          "10 Website",
          "10 Plesk Account",
          "10 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Account",
          "Unlimited Sub Domains",
          "Unlimited Database",
        ],
        ctaText: "Buy Now",
        popular: false,
      },
      {
        name: "Enterprise",
        price: "599",
        originalPrice: "1,198",
        savings: "50%",
        description: "Maximum performance for high-traffic sites",
        features: [
          "Unlimited Website",
          "Unlimited Plesk Account",
          "20 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Account",
          "Unlimited Sub Domains",
          "Unlimited Database",
        ],
        ctaText: "Buy Now",
        popular: false,
      },
    ],
  };

  const currentPlans = plans[selectedOS];

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-[40px] font-bold text-[#0e3c47] mb-5">
            Choose Your Perfect{" "}
            <span className="text-blue-600">Shared Hosting Plan</span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed mb-8">
            Get started with complete confidence. Our 30-day money-back
            guarantee means it's risk-free.
          </p>

          {/* OS Selection Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full shadow-lg p-1 border border-blue-200">
              <div className="flex">
                <button
                  onClick={() => setSelectedOS("linux")}
                  className={`px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${
                    selectedOS === "linux"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  Linux
                </button>
                <button
                  onClick={() => setSelectedOS("windows")}
                  className={`px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${
                    selectedOS === "windows"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  Windows
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={`${selectedOS}-${plan.name}`}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                plan.popular ? "ring-4 ring-green-500 ring-opacity-80" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0e3c47] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#0e3c47da] text-sm mb-4">
                    {plan.description}
                  </p>
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

                {/* CTA Button */}
                <button
                onClick={() => navigateToBilling(plan)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "rounded-xl border border-white bg-gradient-to-r from-[#0e3c47] to-[#0040514d] text-white shadow-lg backdrop-blur-md hover:from-[#133c46] hover:to-[#0040515d] hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-blue-50 hover:text-blue-700 border-2 border-transparent hover:border-blue-200"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
