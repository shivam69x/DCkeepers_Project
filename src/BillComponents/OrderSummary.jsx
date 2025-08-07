import { useNavigate } from "react-router-dom";

const OrderSummary = ({ plan }) => {
  const navigate = useNavigate();

  if (!plan) return <p>No plan selected.</p>;

  const basePrice = parseInt(plan.price);
  const gst = Math.round(basePrice * 0.18);
  const shipping = 0;
  const total = basePrice + gst + shipping;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Order Summary
      </h2>

      {/* Plan Info */}
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
            <p className="text-sm text-gray-500">{plan.subtitle}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">
              {formatPrice(basePrice)}
            </p>
            <span className="text-xs text-gray-500">per month</span>
          </div>
        </div>

        {/* Features List */}
        <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
          {plan.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Promo Code */}
      <div className="mb-6 w-full">
        <div className="flex flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Enter promo code"
            className="w-full sm:flex-1 px-3 py-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="w-full sm:w-auto px-4 py-2 bg-gray-100 text-gray-700 border border-t-0 sm:border-t sm:border-l-0 border-gray-300 rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Apply
          </button>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="border-t border-gray-200 pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">{formatPrice(basePrice)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="text-green-600">Free</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Taxes (GST 18%)</span>
          <span className="text-gray-900">{formatPrice(gst)}</span>
        </div>

        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="mt-6 p-3 bg-blue-50 rounded-md">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-blue-600 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm text-blue-800 font-medium">
            10-day money-back guarantee
          </span>
        </div>
      </div>

    </div>
  );
};

export default OrderSummary;
