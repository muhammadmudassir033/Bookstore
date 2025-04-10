import React from "react";
import BannerImage from "../assets/images/Banner.png"; // Import discount banner image
import Book1Image from "../assets/images/book1.png"; // Import book 1 image
import Book2Image from "../assets/images/book2.png"; // Import book 2 image
import Book3Image from "../assets/images/book3.png"; // Import book 3 image
import Book4Image from "../assets/images/book4.png"; // Import book 4 image
// import Book5Image from "../assets/images/book5.jpg"; // Import book 5 image

function BookStore() {
  return (
    <div className="bg-gray-100 p-8">
      {/* Discount Banner with Image */}
      <div className="relative mb-8 rounded-lg overflow-hidden">
        <img
          src={BannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col   ml-12 justify-center">
          <h2 className="text-5xl font-bold text-yellow-200">25% discount</h2>
          <p className="text-5xl font-semibold text-white">
            all Paulo Coelho <p>books!</p>
          </p>
        </div>
      </div>

      {/* Best-Selling Author Section */}
      <div className="mb-16 mt-16"> 
        <h3 className="text-3xl font-bold mb-4">Best-selling</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Book Card 1 */}
          <div className="bg-gray-150 rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book1Image}
                alt="Manuscript Found in Accra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">Dune</h4>
              <p className="text-blue-900 text-xl font-semibold">$24.99</p>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="bg-gray-150 rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book2Image}
                alt="The Alchemist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">The Alchemist</h4>
              <p className="text-gray-500 font-semibold">$19.99</p>
            </div>
          </div>

          {/* Book Card 3 */}
          <div className="bg-gray-150 rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book3Image}
                alt="Dune"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">Dune</h4>
              <p className="text-gray-500 font-semibold">$87.75</p>
            </div>
          </div>

          {/* Book Card 4 */}
          <div className="bg-gray-150 rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book4Image}
                alt="1984"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">1984</h4>
              <p className="text-gray-500 font-semibold">$35.75</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Books Section */}
      <div className=" mt-16 mb-16">
        <h3 className="text-3xl font-bold mb-4">Classic Books</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Book Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book1Image}
                alt="Manuscript Found in Accra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">Manuscript Found in Accra</h4>
              <p className="text-gray-500 font-semibold">$24.99</p>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book2Image}
                alt="The Alchemist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">The Alchemist</h4>
              <p className="text-gray-500 font-semibold">$19.99</p>
            </div>
          </div>

          {/* Book Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book3Image}
                alt="Dune"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">Dune</h4>
              <p className="text-gray-500 font-semibold">$87.75</p>
            </div>
          </div>

          {/* Book Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book4Image}
                alt="1984"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">1984</h4>
              <p className="text-gray-500 font-semibold">$35.75</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-16">
        <h3 className="text-3xl font-bold mb-6">Childern</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Book Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book1Image}
                alt="Manuscript Found in Accra"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">Manuscript Found in Accra</h4>
              <p className="text-gray-500 font-semibold">$24.99</p>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book2Image}
                alt="The Alchemist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">The Alchemist</h4>
              <p className="text-gray-500 font-semibold">$19.99</p>
            </div>
          </div>

          {/* Book Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book3Image}
                alt="Dune"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">Dune</h4>
              <p className="text-gray-500 font-semibold">$87.75</p>
            </div>
          </div>

          {/* Book Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="w-1/2">
              <img
                src={Book4Image}
                alt="1984"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <h4 className="text-lg font-bold">1984</h4>
              <p className="text-gray-500 font-semibold">$35.75</p>
            </div>
          </div>
        </div>
      </div>
      

      {/* Other sections can follow the same pattern */} 
    </div>
  );
}

export default BookStore;
