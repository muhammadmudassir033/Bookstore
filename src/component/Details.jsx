import React, { useState } from "react";
// import { booksData } from "../assets/utils/book";
import { useParams } from "react-router-dom";
import { children, bestSelling, classic } from "../assets/utils/book";

debugger
const booksData = [...children, ...bestSelling,  ...classic];

const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id)); 
  const [showCart, setShowCart] = useState(false);  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  if (!book) {
    return <div>Book not found</div>; 
  }

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    // Get current user
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      alert('Please login to place an order');
      return;
    }

    // Create order object
    const order = {
      id: Date.now(),
      customerName: `${formData.firstName} ${formData.lastName}`,
      items: [book.title],
      total: book.price,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
      shippingAddress: {
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip
      },
      paymentInfo: {
        cardNumber: formData.cardNumber.slice(-4),
        expDate: formData.expDate
      }
    };

    // Get existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Add new order
    const updatedOrders = [...existingOrders, order];
    
    // Save to localStorage
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    // Reset form and close cart
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      cardNumber: "",
      expDate: "",
      cvv: "",
    });
    setShowCart(false);

    // Show success message
    alert('Order placed successfully!');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
        {/* Book Cover - Responsive image container */}
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-[280px]">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden aspect-[2/3]">
            <img
              src={book.image}
              alt={`${book.title} cover`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
          </div>
        </div>

        {/* Book Details - Responsive content */}
        <div className="w-full md:w-2/3 lg:w-3/4 space-y-5">
          {/* Title Section */}
          <div>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-600 mb-2">
              {book.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-600">
              {book.author}
            </p>
          </div>

          {/* Description Section */}
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-500 mb-3">
              Summary
            </h3>
            <p className="text-gray-800 dark:text-gray-500 leading-relaxed">
              {book.description}
            </p>
          </div>

          {/* Price and Action */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-5">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-black">
                  {book.price}
                </span>
                <span className="text-sm font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                  In Stock
                </span>
              </div>
              <button
                onClick={() => setShowCart(true)}
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-2 px-4 
             sm:py-2.5 sm:px-6 rounded-lg transition-all duration-200  
             shadow hover:shadow-md active:scale-[0.98]
             dark:bg-indigo-600 dark:hover:bg-indigo-700
             focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-700 mb-4">
              Product Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 dark:text-gray-600">
                  <span className="font-medium text-gray-900 dark:text-gray-800">
                    Publisher:
                  </span>{" "}
                  {book.publisher}
                </p>
              </div>
              {/* Add more details here if needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white dark:bg-gray-800 py-2 z-10">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Checkout
              </h1>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Item */}
            <div className="mb-6 border-b pb-6 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-full sm:w-24 h-32 sm:h-24 bg-gray-200 rounded-lg overflow-hidden dark:bg-gray-700 flex-shrink-0">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-800 dark:text-white truncate">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {book.author}
                  </p>
                  <p className="text-gray-800 dark:text-white font-medium mt-1">
                    {book.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Form Sections */}
            <div className="space-y-6">
              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                  Payment Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label
                      htmlFor="card_number"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="card_number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="exp_date"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="exp_date"
                      name="expDate"
                      value={formData.expDate}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-gray-700 dark:text-white mb-1"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end sticky bottom-0 bg-white dark:bg-gray-800 py-4 -mb-6">
              <button
                onClick={handlePlaceOrder}
                className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
