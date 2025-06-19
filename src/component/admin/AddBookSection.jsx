import React, { useState } from 'react';

function AddBookSection({ onAddBook, onCancel }) {
  const [form, setForm] = useState({
    title: '',
    author: '',
    price: '',
    stock: '',
    category: '',
    isbn: '',
    publishDate: '',
    coverImage: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation: all fields required except coverImage
    if (!form.title || !form.author || !form.price || !form.stock || !form.category || !form.isbn || !form.publishDate || !form.description) {
      alert('Please fill in all fields.');
      return;
    }
    const newBook = {
      id: Date.now(),
      ...form,
      price: parseFloat(form.price),
      stock: parseInt(form.stock, 10),
    };
    onAddBook(newBook);
    setForm({
      title: '', author: '', price: '', stock: '', category: '', isbn: '', publishDate: '', coverImage: '', description: '',
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 px-2 sm:px-6 lg:px-8">
      <div className="mb-2">
        <h2 className="text-4xl font-bold text-[#1a2332]">Add New Book</h2>
        <p className="text-gray-500 text-lg">Add a new book to your inventory</p>
      </div>
      <div className="bg-white rounded-xl shadow border border-gray-100 p-8 mt-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input name="title" type="text" value={form.title} onChange={handleChange} className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Author</label>
            <input name="author" type="text" value={form.author} onChange={handleChange} className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Price ($)</label>
            <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" min="0" step="0.01" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Stock</label>
            <input name="stock" type="number" value={form.stock} onChange={handleChange} className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" min="0" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select name="category" value={form.category} onChange={handleChange} className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option value="">Select a category</option>
              <option>Programming</option>
              <option>Non-fiction</option>
              <option>Children</option>
              <option>Classic</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">ISBN</label>
            <input name="isbn" type="text" value={form.isbn} onChange={handleChange} className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Publish Date</label>
            <input name="publishDate" type="date" value={form.publishDate} onChange={handleChange} className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Cover Image URL</label>
            <input name="coverImage" type="text" value={form.coverImage} onChange={handleChange} className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="/placeholder.svg" />
          </div>
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="md:col-span-2 flex justify-end gap-2 mt-8">
            <button type="button" onClick={onCancel} className="px-5 py-2 rounded bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Add Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBookSection;
