import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../components/CurrencyContext"; // ✅ Import context

export default function Offers() {
  const [selectedOS, setSelectedOS] = useState("linux");
  const navigate = useNavigate();
  const { convertPrice } = useCurrency(); // ✅ Use currency converter

  const handleBuyNow = (plan) => {
    navigate("/billing", { state: { plan } });
  };

  const plans = {
    linux: [
      {
        name: "Shared Hosting",
        subtitle: "STARTING FROM",
        price: 199,
        features: [
          "1 Website",
          "1 Cpanel account",
          "2 GB Storage",
          "5GB Bandwidth",
          "5 Email Accounts",
          "3 Sub Domains",
          "1 Mysql Database",
        ],
        buttonStyle: "primary",
      },
      {
        name: "Reseller Hosting",
        subtitle: "STARTING FROM",
        price: 699,
        features: [
          "Unlimited Websites",
          "Unlimited Cpanel Accounts",
          "25 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Email Accounts",
          "Unlimited Sub Domains",
          "Unlimited Mysql Database",
        ],
        buttonStyle: "primary",
      },
      {
        name: "Cloud VPS",
        subtitle: "Best for Entrepreneurs",
        price: 999,
        features: [
          "2 CPU Cores",
          "2 GB RAM",
          "30 GB Hard Disk-SSD",
          "1TB Bandwidth",
          "1 IP Addresses",
          "Free CentOS WP-Cpanel",
          "99.9% Uptime Guarantee",
        ],
        buttonStyle: "primary",
        bestValue: true,
      },
      {
        name: "Forex Server",
        subtitle: "STARTING FROM",
        price: 1499,
        features: [
          "2 CPU Cores",
          "4 GB RAM",
          "50 GB Hard Disk-SSD",
          "Intel Core i5-3470 4 Cores",
          "8 GB DDR5",
          "1 GBPS Bandwidth",
          "1 IP Address",
          "99.9% Uptime Guarantee",
        ],
        buttonStyle: "primary",
      },
    ],
    windows: [
      {
        name: "Shared Hosting",
        subtitle: "STARTING FROM",
        price: 299,
        features: [
          "1 Website",
          "1 Plesk account",
          "3 GB Storage",
          "10GB Bandwidth",
          "10 Email Accounts",
          "5 Sub Domains",
          "1 MSSQL Database",
        ],
        buttonStyle: "primary",
      },
      {
        name: "Reseller Hosting",
        subtitle: "STARTING FROM",
        price: 899,
        features: [
          "Unlimited Websites",
          "Unlimited Plesk Accounts",
          "35 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Email Accounts",
          "Unlimited Sub Domains",
          "Unlimited MSSQL Database",
        ],
        buttonStyle: "primary",
      },
      {
        name: "Cloud VPS",
        subtitle: "Best for Entrepreneurs",
        price: 1299,
        features: [
          "2 CPU Cores",
          "3 GB RAM",
          "40 GB Hard Disk-SSD",
          "1.5TB Bandwidth",
          "1 IP Addresses",
          "Free Windows Server",
          "99.9% Uptime Guarantee",
        ],
        buttonStyle: "primary",
        bestValue: true,
      },
      {
        name: "Forex Server",
        subtitle: "STARTING FROM",
        price: 1899,
        features: [
          "4 CPU Cores",
          "6 GB RAM",
          "75 GB Hard Disk-SSD",
          "Intel Core i7-4770 4 Cores",
          "12 GB DDR5",
          "1 GBPS Bandwidth",
          "2 IP Addresses",
          "99.9% Uptime Guarantee",
        ],
        buttonStyle: "primary",
      },
    ],
  };

  return (
    <div
      id="offers"
      className="w-full min-h-screen bg-white-to-br from-orange-100 via-orange-50 to-orange-200 mt-10"
    >
      <div className="max-w-[1500px] mx-auto py-12 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0e3c47] mb-6">
            Most Popular Hosting Plans
          </h1>
          <h2 className="text-[#0e3c47c3] mb-8 text-sm sm:text-base">
            Cheap and best Server Hosting provider in India
          </h2>

          {/* OS Toggle */}
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-full p-1 shadow-lg">
              <div className="flex">
                <button
                  onClick={() => setSelectedOS("linux")}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedOS === "linux"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  Linux
                </button>
                <button
                  onClick={() => setSelectedOS("windows")}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1500px] mx-auto px-4">
          {plans[selectedOS].map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg px-4 py-6 sm:px-6 sm:py-8 flex flex-col justify-between ${
                plan.bestValue
                  ? "ring-4 ring-green-500 transform scale-[1.02]"
                  : ""
              }`}
            >
              {plan.bestValue && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium relative -top-1">
                    Best value
                  </div>
                </div>
              )}

              <div className="flex-grow">
                <div className="text-center mb-6 px-2">
                  <h3 className="text-lg font-bold text-[#0e3c47] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#0e3c47de] mb-4">
                    {plan.subtitle}
                  </p>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#0b2d35]">
                      {convertPrice(plan.price)}
                    </span>
                    <span className="text-[#0e3c47cb]">/mo.</span>
                  </div>

                  <button
                    onClick={() => handleBuyNow(plan)}
                    className={`w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ease-in-out transform ${
                      plan.buttonStyle === "primary"
                        ? "bg-[#1c7389] text-white hover:bg-[#0e3c47] hover:scale-105"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105"
                    }`}
                  >
                    BUY NOW
                  </button>
                </div>

                <div>
                  <h4 className="font-bold text-base text-[#0b2e36] mb-3">
                    Key features
                  </h4>
                  <ul className="space-y-3 list-disc px-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-gray-700"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-4 mt-6">
                <button
                  className={`w-full py-2 px-3 rounded-lg font-medium transition-transform duration-300 ease-in-out transform text-sm ${
                    plan.buttonStyle === "primary"
                      ? "border border-gray-800 text-black hover:scale-105"
                      : "border border-gray-300 text-gray-900 hover:bg-gray-50 hover:scale-105"
                  }`}
                >
                  COMPARE PLANS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
