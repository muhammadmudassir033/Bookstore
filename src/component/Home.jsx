import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/Banner.png";
import { bestSelling, children, classic } from "../assets/utils/book";

function Home({ searchTerm }) {
  // Filter books based on search term
  const filteredBooks = bestSelling.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 p-8">  
      {/* Banner */}
      <div className="relative mt-16 mb-8 rounded-lg overflow-hidden">
        <img
          src={BannerImage}               
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col ml-12 justify-center">
          <h2 className="text-5xl font-bold text-yellow-200">25% discount</h2>
          <p className="text-5xl font-semibold text-white">
            all Paulo Coelho <p>books!</p> 
          </p> 
        </div>
      </div>

      {/* Search Results (only shown when searching) */}
      {searchTerm && (
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-4">
            Search Results for "{searchTerm}"
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <Link
                to={`/book/${book.id}`}
                key={book.id}
                className="bg-gray-150 rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow"
              >
                <div className="w-1/2">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-between">
                  <h4 className="text-lg font-bold">{book.title}</h4>
                  <p className="text-[#6251DD] text-xl font-semibold">
                    {book.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Category Sections (only shown when NOT searching) */}
      {!searchTerm && (
        <>
          {/* Best-Selling Section */}
          <div className="mb-16 mt-16">
            <h3 className="text-3xl font-bold mb-4">Best-selling</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSelling.map((book) => (
                <Link
                  to={`/book/${book.id}`}
                  key={book.id}
                  className="bg-gray-150 rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow"
                > 
                  <div className="w-1/2"> 
                    <img
                      src={book.image}
                      alt={book.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div> 
                  <div className="w-1/2 p-4 flex flex-col justify-between">    
                    <h4 className="text-lg font-bold">{book.title}</h4> 
                    <p className="text-[#6251DD] text-xl font-semibold">  
                      {book.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Classic Books Section */}
          <div className="mb-16 mt-16">
            <h3 className="text-3xl font-bold mb-4">Classic Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {classic.map((book) => (
                <Link
                  to={`/book/${book.id}`}
                  key={book.id}
                  className="bg-gray-150 rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow"
                >
                  <div className="w-1/2">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 p-4 flex flex-col justify-between">
                    <h4 className="text-lg font-bold">{book.title}</h4>
                    <p className="text-[#6251DD] text-xl font-semibold">
                      {book.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Children's Books Section */}
          <div className="mb-16 mt-16">
            <h3 className="text-3xl font-bold mb-4">Children</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {children.map((book) => (
                <Link
                  to={`/book/${book.id}`}
                  key={book.id}
                  className="bg-gray-150 rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow"
                >
                  <div className="w-1/2">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 p-4 flex flex-col justify-between">
                    <h4 className="text-lg font-bold">{book.title}</h4>
                    <p className="text-[#6251DD] text-xl font-semibold">
                      {book.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;  // Fixed export name to match component