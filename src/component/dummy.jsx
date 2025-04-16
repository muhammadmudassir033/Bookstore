import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/Banner.png";
import Book1Image from "../assets/images/book1.png";
import Book2Image from "../assets/images/book2.png";
import Book3Image from "../assets/images/book3.png";
import Book4Image from "../assets/images/book4.png";
import class1Image from "../assets/images/class1.png";
import class2Image from "../assets/images/class2.png";
import class3Image from "../assets/images/class3.png";
import class4Image from "../assets/images/class4.png";

// Create a books data array
const booksData = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    price: "$87.75",
    image: Book1Image,
    description:
      "Dune is set in the distant future amidst a feudal interstellar society...",
    publisher: "Ace Books",
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$19.99",
    image: Book2Image,
    description:
      "The Alchemist follows a young Andalusian shepherd named Santiago...",
    publisher: "HarperOne",
  },
  {
    id: 3,
    title: "1988",
    author: "George  Orwell",
    price: "$39.99",
    image: Book3Image,
    description:
      "The Alchemist follows a young Andalusian shepherd named Santiago...",
    publisher: "HarperOne",
  },
  {
    id: 4,
    title: "Ikigait",
    author: "Hector Garcia",
    price: "36,00 $",
    image: Book4Image,
    description:
      "Ikigai reveals the secrets to their longevity and happiness: how they eat, how they move, how they work, how they foster collaboration and community, and—their best-kept secret—how they find the ikigai that brings satisfaction to their lives. And it provides practical tools to help you discover your own ikigai.",
    publisher: "HarperOne",
  },
  {
    id: 5,
    title: "Metafizik",
    author: "Aristoteles",
    price: "36,00 $",
    image: class1Image,
    description:
      "Metafizik (meaning Metaphysics in Turkish) by Aristotle is a foundational work in philosophy, exploring the nature of reality, existence, and the ultimate principles of the universe, with a focus on the study of being as being",
    publisher: "HarperOne",
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$19.99",
    image: class2Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt.",
    publisher: "HarperOne",
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$19.99",
    image: class3Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt. ",
    publisher: "HarperOne",
  },

  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$19.99",
    image: class4Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt.",
    publisher: "HarperOne",
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$19.99",
    image: Book2Image, 
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt..",
  },
  {
    id: 10,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$19.99",
    image: Book2Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt..",
    publisher: "HarperOne",
  },
  {
    id: 11,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$19.99",
    image: Book2Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt..",
    publisher: "HarperOne",
  },
  {
    id: 12,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$19.99",
    image: Book2Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt...",
    publisher: "HarperOne",
  },
  
  // Add all your books here with their details
];

function BookStore() {
  return (
    <div className="bg-gray-100 p-8">
      {/* ... (keep your banner code the same) ... */}
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
          {booksData.slice(0, 4).map((book) => (
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
      <div className="mb-16 mt-16">
        <h3 className="text-3xl font-bold mb-4">Classic Books</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {booksData.slice(0, 4).map((book) => (
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
      <div className="mb-16 mt-16">
        <h3 className="text-3xl font-bold mb-4">Childern</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {booksData.slice(0, 4).map((book) => (
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
      

      {/* Other sections can follow the same pattern */}
    </div>
  );
}

export default BookStore;
