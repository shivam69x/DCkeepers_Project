import React from "react";
import { DollarSign, Zap, Settings, Shield } from "lucide-react";
import { useCurrency } from "../components/CurrencyContext.jsx";


export default function ProxyFeatures() {
  const { convertPrice } = useCurrency();

  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      title: "Affordable Proxy",
      description: `Need lots of proxies within budget? Webshare Proxy is the perfect fit. Plans starting at ${convertPrice(
        400
      )}/mo.`,
    },
    {
      icon: <Zap className="w-6 h-6 text-green-600" />,
      title: "Fast Proxy Servers",
      description:
        "Proxy servers are optimized to handle fast traffic from all around the world. All proxy servers have dedicated Gigabit line to connect to internet.",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      title: "Fully Customizable",
      description:
        "Configure countries, bandwidth, threads and speed. Not sure? Start small and customize as you go. No commitments required.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Fully Private",
      description:
        "Your daily proxy activity is safe with us. Your private information is never shared with 3rd parties.",
    },
  ];

 
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e3c47] mb-4">
              Proxy Server Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How are the proxy servers different from{" "}
              <span className="text-green-600 font-medium">private proxy</span>{" "}
              and{" "}
              <span className="text-green-600 font-medium">
                dedicated proxy
              </span>
              ?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-sky-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0e3c47] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
