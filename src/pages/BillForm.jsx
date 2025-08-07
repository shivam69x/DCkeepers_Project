import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';


import { useLocation, useNavigate } from 'react-router-dom';
import OrderSummary from '../BillComponents/OrderSummary';
import BillingAddressForm from '../BillComponents/BillingAddressForm';


const BillForm = () => {
  const { state } = useLocation();
  const plan = state?.plan;
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    gstin: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    navigate("/invoice", {
      state: {
        plan,
        billing: formData
      }
    });
  }
};


  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700 font-semibold">No plan selected. Please go back and choose a plan.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Billing Form */}
          <div className="order-2 lg:order-1">
            <BillingAddressForm
              formData={formData}
              errors={errors}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          </div>

          {/* Right Column - Order Summary */}
          <div className="order-1 lg:order-2">
            <OrderSummary plan={plan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillForm;
