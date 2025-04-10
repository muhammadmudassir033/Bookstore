import React from "react";
import { useParams } from "react-router-dom";
const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Cover - Now using the actual book image */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden aspect-[2/3]">
            <img
              src={book.image}
              alt={`${book.title} cover`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Book Details */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {book.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{book.author}</p>

          <div className="prose max-w-none text-gray-700 mb-8">
            <h3 className="text-xl font-semibold mb-4">Summary</h3>
            <p className="mb-4">{book.description}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  {book.price}
                </span>
                <span className="ml-2 text-sm text-green-600">In Stock</span>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <h3 className="text-xl font-semibold mb-4">Product Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <span className="font-medium">Publisher:</span> {book.publisher}
            </p>
            {/* <p className="text-gray-600"><span className="font-medium">Publication Date:</span> {book.publicationDate}</p> */}
          </div>
          {/* <div>
            <p className="text-gray-600"><span className="font-medium">Pages:</span> {book.pages}</p>
            <p className="text-gray-600"><span className="font-medium">ISBN:</span> {book.isbn}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
