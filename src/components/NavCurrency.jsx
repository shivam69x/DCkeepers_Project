import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useCurrency } from "../components/CurrencyContext"; // ✅ Adjust path if needed

const NavCurrency = () => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const currencyRef = useRef(null);

  const { selectedCurrency, setSelectedCurrency } = useCurrency(); // ✅ use context

  const currencies = [
    { code: "INR", name: "₹ INR", flag: "🇮🇳" },
    { code: "USD", name: "$ USD", flag: "🇺🇸" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setIsCurrencyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCurrencyToggle = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency.code); // ✅ Save only the currency code globally
    setIsCurrencyOpen(false);
  };

  const currentCurrency = currencies.find(c => c.code === selectedCurrency);

  return (
    <div className="flex items-center space-x-1 px-[1px]">
      <div className="relative" ref={currencyRef}>
        <button
          onClick={handleCurrencyToggle}
          className={`
            relative left-[10px] flex items-center pl-[16px] px-[1px] py-[8px] text-[16px] font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[80px] justify-between hover:text-blue-500
            ${
              selectedCurrency === "USD"
                ? "bg-blue-100 text-blue-800 border-blue-300"
                : "bg-white text-gray-700 border-gray-300"
            }
            w-[90px]
          `}
        >
          <div className="flex items-center justify-center gap-1 truncate">
            <span>{currentCurrency?.name}</span>
          </div>
          <ChevronDown
            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
              isCurrencyOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isCurrencyOpen && (
          <div className="absolute -right-[105px] lg:right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => selectCurrency(currency)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 transition-colors duration-150
                  ${
                    selectedCurrency === currency.code
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <span>{currency.flag}</span>
                <span>{currency.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavCurrency;
