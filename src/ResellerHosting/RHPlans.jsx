import React, { useState, useEffect } from "react";
import { Check, Star } from "lucide-react";
import { useCurrency } from "../components/CurrencyContext.jsx"; // <--- NEW
import { useNavigate } from "react-router-dom";

const RHPlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOS, setSelectedOS] = useState("linux");
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
            category: "Reseller Hosting", // helpful for invoice display
            type: "monthly", // you can modify this if you add durations
          },
        },
      });
    };

  const linuxPlans = [
    {
      name: "Basic",
      price: 799,
      originalPrice: 1598,
      savings: "50%",
      description: "Perfect for personal websites and blogs",
      features: [
        "Unlimited Website",
        "25 GB Storage",
        "Unlimited Bandwidth",
        "Unlimited cPanel Accounts",
        "Unlimited Email Accounts",
        "Unlimited Sub Domains",
        "Unlimited Mysql Database",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "Buy Now",
      popular: false,
    },
    {
      name: "Professional",
      price: 1299,
      originalPrice: 2598,
      savings: "50%",
      description: "Ideal for growing businesses and portfolios",
      features: [
        "Unlimited Website",
        "50 GB Storage",
        "Unlimited Bandwidth",
        "Unlimited cPanel Accounts",
        "Unlimited Email Accounts",
        "Unlimited Sub Domains",
        "Unlimited Mysql Database",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "Buy Now",
      popular: true,
    },
    {
      name: "Business",
      price: 1599,
      originalPrice: 3198,
      savings: "50%",
      description: "Advanced features for professional websites",
      features: [
        "Unlimited Website",
        "100 GB Storage",
        "Unlimited Bandwidth",
        "Unlimited cPanel Accounts",
        "Unlimited Email Accounts",
        "Unlimited Sub Domains",
        "Unlimited Mysql Database",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "Buy Now",
      popular: false,
    },
    {
      name: "Enterprise",
      price: 2199,
      originalPrice: 4398,
      savings: "50%",
      description: "Maximum performance for high-traffic sites",
      features: [
        "Unlimited Website",
        "200 GB Storage",
        "Unlimited Bandwidth",
        "Unlimited cPanel Accounts",
        "Unlimited Email Accounts",
        "Unlimited Sub Domains",
        "Unlimited Mysql Database",
        "99.9% Uptime Guarantee",
      ],
      ctaText: "Buy Now",
      popular: false,
    },
  ];

  const windowsPlans = linuxPlans.map(plan => ({
    ...plan,
    name: plan.name + " Windows",
    features: plan.features.map(f =>
      f.includes("cPanel") ? f.replace("cPanel", "Plesk") : f
    ),
    ctaText: "Get Started",
  }));

  const plans = selectedOS === "linux" ? linuxPlans : windowsPlans;

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
            Choose Your Perfect
            <span className="text-blue-600"> Reseller Hosting Plan</span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed">
            Get started with complete confidence. Our 30-day money-back
            guarantee means it's risk-free.
          </p>

          {/* OS Toggle */}
          <div className="flex justify-center mt-6">
            <div className="bg-gray-100 rounded-full p-1 shadow-lg">
              <div className="flex">
                <button
                  onClick={() => setSelectedOS("linux")}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedOS === "linux"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  Linux
                </button>
                <button
                  onClick={() => setSelectedOS("windows")}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
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
          {plans.map((plan, index) => (
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
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
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

                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                onClick={()=>navigateToBilling(plan)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#0e3c47] to-[#0040514d] text-white shadow-lg"
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
};

export default RHPlans;
