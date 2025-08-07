import React from "react";
import { Zap } from "lucide-react";
import { useCurrency } from "../components/CurrencyContext.jsx";
import { useNavigate } from "react-router-dom";

export default function ProxyPriceTable() {
  const { convertPrice } = useCurrency();
  const navigate = useNavigate();

  const pricingData = [
    {
      name: "Proxy Plan - 2GB RAM",
      ram: "2 GB",
      speed: "500 MBPS",
      price: 400,
      originalPrice: 500,
    },
    {
      name: "Proxy Plan - 4GB RAM",
      ram: "4 GB",
      speed: "1 GBPS",
      price: 500,
      originalPrice: 600,
    },
    {
      name: "Proxy Plan - 8GB RAM",
      ram: "8 GB",
      speed: "1 to 3 GBPS",
      price: 900,
      originalPrice: 1000,
    },
    {
      name: "Proxy Plan - 16GB RAM",
      ram: "16 GB",
      speed: "2 to 3 GBPS",
      price: 1300,
      originalPrice: 1500,
    },
    {
      name: "Proxy Plan - 32GB RAM",
      ram: "32 GB",
      speed: "3 to 4 GBPS",
      price: 3200,
      originalPrice: 3500,
    },
    {
      name: "Proxy Plan - 64GB RAM",
      ram: "64 GB",
      speed: "3 to 5 GBPS",
      price: 4500,
      originalPrice: 4800,
    },
  ];

  const navigateToBilling = (plan) => {
    const cleanedPlan = {
      name: plan.name,
      ram: plan.ram,
      speed: plan.speed,
      price: plan.price,
      originalPrice: plan.originalPrice,
      category: "Proxy Plans",
      type: "monthly",
    };

    navigate("/billing", { state: { plan: cleanedPlan } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-100 via-white to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0e3c47] mb-4">
              Proxy Server Plans
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect plan based on your RAM and speed requirements
            </p>
          </div>

          {/* Desktop Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hidden md:block">
            <div className="bg-sky-900 text-white">
              <div className="grid grid-cols-4 gap-4 px-6 py-4">
                <div className="font-semibold">RAM</div>
                <div className="font-semibold">Price</div>
                <div className="font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Speed
                </div>
                <div></div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {pricingData.map((plan, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 px-6 py-4 items-center hover:bg-sky-50 transition-colors duration-150"
                >
                  <div className="font-medium text-[#0e3c47]">{plan.ram}</div>
                  <div className="font-semibold text-sky-700">
                    {convertPrice(plan.price)}/m
                  </div>
                  <div className="text-gray-700">{plan.speed}</div>
                  <div>
                    <button
                      onClick={() => navigateToBilling(plan)}
                      className="text-sm bg-sky-700 text-white py-2 px-4 rounded-lg hover:bg-sky-900 transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden mt-8 space-y-4">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-[#0e3c47]">{plan.ram}</span>
                  <span className="font-semibold text-indigo-600">
                    {convertPrice(plan.price)}/m
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 mb-3">
                  <Zap className="w-4 h-4 text-indigo-600" />
                  <span>{plan.speed}</span>
                </div>
                <button
                  onClick={() => navigateToBilling(plan)}
                  className="w-full text-sm bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              All plans include unlimited bandwidth and 24/7 customer support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
