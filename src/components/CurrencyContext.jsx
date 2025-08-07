import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("INR");
  const conversionRate = 0.012; // Example: ₹1 = $0.012

  const convertPrice = (priceInINR) => {
    if (selectedCurrency === "INR") return `₹${priceInINR}`;
    return `$${(priceInINR * conversionRate).toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{ selectedCurrency, setSelectedCurrency, convertPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
