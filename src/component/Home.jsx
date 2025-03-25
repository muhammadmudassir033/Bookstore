import React from "react";
import BannerImage  from "../assets/images/Banner.png"; // Import discount banner image
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
        <div className="absolute inset-0 bg-opacity-40 flex flex-col   justify-center">
          <h2 className="text-5xl font-bold text-yellow-200">25% discount</h2>
          <p className="text-5xl font-semibold text-white">all Paulo Coelho <p>books!</p></p>
        </div>
      </div> 

      {/* Best-Selling Author Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4"> 
          Best-selling author of The Alchemist
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Book Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden"> 
            <img
              src={Book1Image}  
              alt="Manuscript Found in Accra"
              className="w-64 h-48 object-cover"  
            /> 
            <div className="p-6">
              <h4 className="text-lg font-bold mb-2">PAULO COELHO</h4>
              <p className="text-gray-600 mb-4">Manuscript Found in Accra</p>
              <p className="text-gray-500">Like the D...</p>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Book2Image}
              alt="The Alchemist"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold mb-2">PAULO COELHO</h4>
              <p className="text-gray-600 mb-4">The Alchemist</p>
              <p className="text-gray-500">Best Seller</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Book3Image}
              alt="Dune"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold mb-2">Dune</h4>
              <p className="text-gray-600 mb-4">Frank Herbert</p>
              <p className="text-gray-500">87,75 $</p>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Book4Image}
              alt="1984"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold mb-2">1984</h4>
              <p className="text-gray-600 mb-4">George Orwell</p>
              <p className="text-gray-500">35,75 $</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Books Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Other Books</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Book Card 1 */}
        

          {/* Book Card 3 */}
          {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Book5Image}
              alt="Ikigai"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold mb-2">Ikigai</h4>
              <p className="text-gray-600 mb-4">Hector Garcia</p>
              <p className="text-gray-500">36,00 $</p>
            </div>
          </div> */}

          {/* Book Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={Book1Image} // Replace with appropriate image
              alt="Metaphysics"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-lg font-bold mb-2">Metaphysics</h4>
              <p className="text-gray-600 mb-4">Aristotle</p>
              <p className="text-gray-500">36,00 $</p>
            </div>
          </div>
        </div>
      </div>

      {/* View All Buttons */}
      <div className="mt-8 flex justify-between">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          View All Classics
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          View All
        </button>
      </div>
    </div>
  );
}

export default BookStore;