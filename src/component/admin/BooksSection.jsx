import React, { useState, useEffect } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function BooksSection() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  // Filter books by search
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      (book.isbn && book.isbn.toLowerCase().includes(search.toLowerCase()))
  );

  // Stock badge color
  const stockBadge = (stock) =>
    stock < 20
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  // Actions (implement handlers as needed)
  const handleView = (book) => {
    alert(`View book: ${book.title}`);
  };
  const handleEdit = (book) => {
    alert(`Edit book: ${book.title}`);
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      const updated = books.filter((b) => b.id !== id);
      setBooks(updated);
      localStorage.setItem("books", JSON.stringify(updated));
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h2 className="text-4xl font-bold text-[#1a2332]">Books</h2>
          <p className="text-gray-500 text-lg">Manage your book inventory</p>
        </div>
        <button
          className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2"
          // onClick={...} // You can use this to open the AddBookSection
        >
          <span className="text-xl">+</span> Add New Book
        </button>
      </div>
      <div className="flex items-center justify-between mb-2">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN..."
          className="w-full max-w-md rounded-md border border-gray-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="text-gray-400 ml-4">{filteredBooks.length} books found</span>
      </div>
      <div className="bg-white rounded-xl shadow border border-gray-100 mt-2 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-700 text-base border-b">
              <th className="py-3 px-6 font-semibold">Title</th>
              <th className="py-3 px-6 font-semibold">Author</th>
              <th className="py-3 px-6 font-semibold">Price</th>
              <th className="py-3 px-6 font-semibold">Stock</th>
              <th className="py-3 px-6 font-semibold">Category</th>
              <th className="py-3 px-6 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-6 font-bold">{book.title}</td>
                <td className="py-3 px-6">{book.author}</td>
                <td className="py-3 px-6 font-semibold">${parseFloat(book.price).toFixed(2)}</td>
                <td className="py-3 px-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${stockBadge(book.stock)}`}>
                    {book.stock}
                  </span>
                </td>
                <td className="py-3 px-6">{book.category}</td>
                <td className="py-3 px-6 flex gap-4">
                  <button
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => handleView(book)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => handleEdit(book)}
                  >
                    <FaEdit />
                  </button> 
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(book.id)}
                  >
                    <FaTrash />           
                  </button>
                </td>
              </tr>
            ))}
            {filteredBooks.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-400">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}