import React, { useState, useEffect } from "react";
import {
  Check,
  Server,
  Shield,
  Globe,
  Wrench,
  Headphones,
  Star,
} from "lucide-react";
import { useCurrency } from "../components/CurrencyContext";
import { useNavigate } from "react-router-dom";

const LPlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { convertPrice } = useCurrency();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  const navigateToBilling = (plan) => {
  const planWithoutIcons = {
    ...plan,
    features: plan.features.map((item) => item.text), // Make it ["text1", "text2"]
    category: "Linux Hosting",
    type: "monthly",
  };

  navigate("/billing", { state: { plan: planWithoutIcons } });
};




  const plans = [
    {
      name: "cPanel/whm licenses for VPS Server",
      subtitle: "START FROM",
      price: 599,
      features: [
        {
          icon: <Globe className="w-4 h-4" />,
          text: "Create cPanel unlimited accounts",
        },
        {
          icon: <Shield className="w-4 h-4" />,
          text: "Free Premium softaculous (One click CMS installer )",
        },
        {
          icon: <Shield className="w-4 h-4" />,
          text: "Free Free FileSSL (Lets encrypt SSL certificate )",
        },
        {
          icon: <Wrench className="w-4 h-4" />,
          text: "Free sitepad website builder",
        },
        {
          icon: <Server className="w-4 h-4" />,
          text: "Free Installation for license",
        },
        {
          icon: <Headphones className="w-4 h-4" />,
          text: "Always free in house technical support",
        },
      ],
      bestValue: false,
    },
    {
      name: "cPanel/whm licenses for Dedicated Server",
      subtitle: "START FROM",
      price: 1099,
      features: [
        {
          icon: <Globe className="w-4 h-4" />,
          text: "Create cPanel unlimited accounts",
        },
        {
          icon: <Shield className="w-4 h-4" />,
          text: "Free Premium softaculous (One click CMS installer )",
        },
        {
          icon: <Shield className="w-4 h-4" />,
          text: "Free Free FileSSL (Lets encrypt SSL certificate )",
        },
        {
          icon: <Wrench className="w-4 h-4" />,
          text: "Free sitepad website builder",
        },
        {
          icon: <Server className="w-4 h-4" />,
          text: "Free Installation for license",
        },
        {
          icon: <Headphones className="w-4 h-4" />,
          text: "Always free in house technical support",
        },
      ],
      bestValue: true,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-[40px] font-bold text-[#0e3c47] mb-5">
            Choose Your Perfect{" "}
            <span className="text-blue-600">cPanel License Plan</span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed">
            Flexible licensing for VPS and Dedicated servers with premium
            features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                plan.bestValue ? "ring-4 ring-green-500 ring-opacity-80" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.bestValue && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" /> Best Value
                  </div>
                </div>
              )}

              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#0e3c47] mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                <div className="text-4xl font-bold text-[#0e3c47] mb-6">
                  {convertPrice(plan.price)}
                </div>

                <ul className="space-y-4 text-left mb-6">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <span className="text-green-600">{feature.icon}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigateToBilling(plan)}
                  className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 ${
                    plan.bestValue
                      ? "bg-gradient-to-r from-[#1c7389] to-[#0e3c47] text-white shadow-lg hover:opacity-90"
                      : "bg-gradient-to-r from-[#1c7389] to-[#0e3c47] text-white shadow-lg hover:opacity-90"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LPlans;
