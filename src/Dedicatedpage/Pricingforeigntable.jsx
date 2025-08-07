import React, { useState } from 'react';
import { Server } from 'lucide-react';
import { useCurrency } from "../components/CurrencyContext.jsx";
import { useNavigate } from "react-router-dom"; 

const PricingforeignTable = () => {
  const [selectedOs, setSelectedOs] = useState('linux');
  const {convertPrice} = useCurrency();

  const navigate = useNavigate();
  
    const navigateToBilling = (server) => {
      navigate("/billing", {
        state: {
          plan: {
            ...server,
            category: "D-India Hosting", 
            type: "monthly",
          },
        },
      });
    };

  const servers = [
    {
      processor: "Intel Core i5-13400 6 Cores",
      clock: "2.50GHz Base / 4.60GHz Turbo",
      ram: "32 GB DDR4",
      storage: "1 TB NVMe SSD",
      bandwidth: "100 TB",
      ips: "1 IPv4",
      price: 4999,
      popular: false,
      location: "USA - Los Angeles"
    },
    {
      processor: "Intel Core i7-13700 8 Cores",
      clock: "2.10GHz Base / 5.20GHz Turbo",
      ram: "64 GB DDR4",
      storage: "2 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 7999,
      popular: true,
      location: "USA - New York"
    },
    {
      processor: "AMD Ryzen 7 7700X 8 Cores",
      clock: "4.50GHz Base / 5.40GHz Turbo",
      ram: "32 GB DDR5",
      storage: "1 TB NVMe SSD",
      bandwidth: "100 TB",
      ips: "1 IPv4",
      price: 6999,
      popular: false,
      location: "Canada - Toronto"
    },
    {
      processor: "Intel Xeon E-2378 8 Cores",
      clock: "2.60GHz Base / 4.80GHz Turbo",
      ram: "128 GB DDR4 ECC",
      storage: "4 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 12999,
      popular: false,
      location: "UK - London"
    },
    {
      processor: "AMD EPYC 7443P 24 Cores",
      clock: "2.85GHz Base / 4.00GHz Turbo",
      ram: "256 GB DDR4 ECC",
      storage: "8 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 18999,
      popular: false,
      location: "Germany - Frankfurt"
    },
    {
      processor: "Intel Xeon Gold 5418Y 24 Cores",
      clock: "2.00GHz Base / 4.10GHz Turbo",
      ram: "512 GB DDR5 ECC",
      storage: "16 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 24999,
      popular: false,
      location: "Netherlands - Amsterdam"
    },
    {
      processor: "AMD EPYC 7763 64 Cores",
      clock: "2.45GHz Base / 3.50GHz Turbo",
      ram: "1 TB DDR4 ECC",
      storage: "32 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "1 IPv4",
      price: 35999,
      popular: false,
      location: "France - Paris"
    },
    {
      processor: "Dual Intel Xeon Gold 6448Y 64 Cores",
      clock: "2.10GHz Base / 4.20GHz Turbo",
      ram: "1 TB DDR5 ECC",
      storage: "64 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "5 IPv4",
      price: 49999,
      popular: false,
      location: "Switzerland - Zurich"
    },
    {
      processor: "Dual AMD EPYC 9654 192 Cores",
      clock: "2.40GHz Base / 3.70GHz Turbo",
      ram: "2 TB DDR5 ECC",
      storage: "128 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "10 IPv4",
      price: 79999,
      popular: false,
      location: "Singapore"
    },
    {
      processor: "Quad Intel Xeon Platinum 8490H 240 Cores",
      clock: "1.90GHz Base / 3.50GHz Turbo",
      ram: "4 TB DDR5 ECC",
      storage: "256 TB NVMe SSD",
      bandwidth: "Unlimited",
      ips: "25 IPv4",
      price: 149999,
      popular: false,
      location: "Japan - Tokyo"
    }
  ];

  return (
    <div id="foreign" className="min-h-screen bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-500 drop-shadow-sm tracking-tight">
              Foreign's Best Linux / Windows Dedicated Servers at Affordable Prices
            </h1>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          {/* Table Header */}
          <div className="bg-sky-900 text-white rounded-t-lg">
            <div className="grid grid-cols-8 gap-6 p-4 font-semibold text-sm lg:text-base">
              <div>Dedicated Processors</div>
              <div>Clock Speed</div>
              <div>RAM</div>
              <div>Storage</div>
              <div>Bandwidth</div>
              <div>IPs</div>
              <div>Price/Month</div>
              <div>Order</div>
            </div>
          </div>

          {/* Server Rows */}
          <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
            {servers.map((server, index) => (
              <div
                key={index}
                className={`grid grid-cols-8 gap-4 p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                  server.popular ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="font-medium text-slate-700">
                  {server.processor}
                  {server.popular && (
                    <span className="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <div className="text-slate-600 text-sm">{server.clock}</div>
                <div className="text-slate-600 text-sm">{server.ram}</div>
                <div className="text-slate-600 text-sm">{server.storage}</div>
                <div className="text-slate-600 text-sm">{server.bandwidth}</div>
                <div className="text-slate-600 text-sm">{server.ips}</div>
                <div className="text-slate-600 text-sm"> {convertPrice (server.price)} </div>
                <div>
                  <button 
                  onClick={() => navigateToBilling(server)}
                  className="bg-sky-900 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-6 lg:hidden">
          {servers.map((server, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md border ${
                server.popular ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              <div className="mb-2">
                <h2 className="text-base font-semibold text-slate-800">{server.processor}</h2>
                <p className="text-sm text-sky-600">{server.location}</p>
                {server.popular && (
                  <span className="inline-block mt-1 px-2 py-1 text-xs text-white bg-blue-500 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <ul className="text-sm text-slate-600 space-y-1">
                <li><strong>Clock:</strong> {server.clock}</li>
                <li><strong>RAM:</strong> {server.ram}</li>
                <li><strong>Storage:</strong> {server.storage}</li>
                <li><strong>Bandwidth:</strong> {server.bandwidth}</li>
                <li><strong>IPs:</strong> {server.ips}</li>
                <li><strong>Price:</strong> ₹{server.price.toLocaleString()}</li>
              </ul>
              <div className="mt-4">
                <button className="w-full bg-sky-900 hover:bg-teal-600 text-white py-2 rounded-md transition-colors text-sm font-medium">
                  Configure Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingforeignTable;
