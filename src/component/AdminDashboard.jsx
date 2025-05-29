import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaBox,
  FaDollarSign,
  FaExclamationCircle,
  FaUserCircle,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import AddBookSection from "./admin/AddBookSection";
import OrdersSection from "./admin/order";
import BooksSection from "./admin/BooksSection";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [books, setBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  // const [showAddBook, setShowAddBook] = useState(false);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setOrders(storedOrders);
    setBooks(storedBooks);
  }, []);

  const totalBooks = books.length;
  const totalOrders = orders.length;
  const totalSales = orders
    .reduce((sum, o) => sum + (parseFloat(o.total) || 0), 0)
    .toFixed(2);
  const lowStockItems = books.filter((b) => b.stock && b.stock < 20).length;

  const recentActivity = [
    orders.length > 0 && {
      type: "order",
      text: "New order received",
      detail: `Order #${orders[orders.length - 1].id} from ${
        orders[orders.length - 1].customerName
      }`,
    },
    books.length > 0 && {
      type: "stock",
      text: "Book stock updated",
      detail: `"${books[0].title}" - ${books[0].stock || 42} in stock`,
    },
    books.find((b) => b.stock && b.stock < 20) && {
      type: "lowstock",
      text: "Low stock alert",
      detail: `"${books.find((b) => b.stock && b.stock < 20)?.title}" - only ${
        books.find((b) => b.stock && b.stock < 20)?.stock || 15
      } remaining`,
    },
  ].filter(Boolean);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-base">
      {/* Sidebar */}
      <aside className="w-60 bg-[#1a2332] flex flex-col justify-between fixed h-full">
        <div>
          <div className="px-8 py-8 text-3xl font-extrabold tracking-widest text-white font-mono uppercase drop-shadow-lg select-none">
            BookStore <span className="text-blue-400">Admin</span>
          </div>
          <nav className="flex flex-col gap-1 mt-4">
            <button
              className={`flex items-center gap-3 px-8 py-2.5 text-gray-300 hover:bg-[#232e43] hover:text-white rounded transition ${
                activeTab === "dashboard" ? "bg-[#232e43] text-white" : ""
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <FaBox className="text-lg" /> <span>Dashboard</span>
            </button>
            <button
              className={`flex items-center gap-3 px-8 py-2.5 text-gray-300 hover:bg-[#232e43] hover:text-white rounded transition ${
                activeTab === "books" ? "bg-[#232e43] text-white" : ""
              }`}
              onClick={() => setActiveTab("books")}
            >
              <FaBook className="text-lg" /> <span>Books</span>
            </button>
            <button
              className={`flex items-center gap-3 px-8 py-2.5 text-gray-300 hover:bg-[#232e43] hover:text-white rounded transition ${
                activeTab === "orders" && <OrdersSection />
                  ? "bg-[#232e43] text-white"
                  : ""
              }`}
              onClick={() => setActiveTab("orders")}
            >
              <FaBox className="text-lg" /> <span>Orders</span>
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-3 px-8 py-6 border-t border-[#232e43] text-white">
          <FaUserCircle className="text-2xl" />
          <span className="text-base">Admin User</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-60 p-10">
        {activeTab === "dashboard" && (
          <div>
            <h1 className="text-3xl font-bold text-[#1a2332] mb-1">
              Dashboard
            </h1>
            <p className="text-gray-500 mb-8 text-lg">
              Overview of your bookstore operations
            </p>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white rounded-xl shadow p-6">
                <span className="bg-blue-100 text-blue-600 rounded-full p-4 text-2xl">
                  <FaBook />
                </span>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Total Books
                  </div>
                  <div className="text-2xl font-bold text-[#1a2332]">
                    {totalBooks}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow p-6">
                <span className="bg-green-100 text-green-600 rounded-full p-4 text-2xl">
                  <FaBox />
                </span>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Total Orders
                  </div>
                  <div className="text-2xl font-bold text-[#1a2332]">
                    {totalOrders}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow p-6">
                <span className="bg-purple-100 text-purple-600 rounded-full p-4 text-2xl">
                  <FaDollarSign />
                </span>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Total Sales
                  </div>
                  <div className="text-2xl font-bold text-[#1a2332]">
                    ${totalSales}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl shadow p-6">
                <span className="bg-orange-100 text-orange-600 rounded-full p-4 text-2xl">
                  <FaExclamationCircle />
                </span>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Low Stock Items
                  </div>
                  <div className="text-2xl font-bold text-[#1a2332]">
                    {lowStockItems}
                  </div>
                </div>
              </div>
            </div>
            {/* Dashboard Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow p-8 col-span-2">
                <h2 className="text-lg font-semibold mb-4 text-[#1a2332]">
                  Recent Activity
                </h2>
                <ul>
                  {recentActivity.length === 0 && (
                    <li className="text-gray-400 text-base">
                      No recent activity
                    </li>
                  )}
                  {recentActivity.map((act, idx) => (
                    <li
                      key={idx}
                      className="mb-4 pl-2 border-l-4"
                      style={{
                        borderColor:
                          act.type === "order"
                            ? "#22c55e"
                            : act.type === "stock"
                            ? "#2563eb"
                            : "#f59e42",
                      }}
                    >
                      <span className="block font-medium text-[#1a2332] text-base">
                        {act.text}
                      </span>
                      <span className="block text-sm text-gray-500">
                        {act.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow p-8 flex flex-col">
                <h2 className="text-lg font-semibold mb-4 text-[#1a2332]">
                  Quick Actions
                </h2>
                <div className="flex gap-4">
                  <button
                    className="flex-1 flex flex-col items-center justify-center bg-blue-50 text-blue-600 font-semibold rounded-lg py-8 shadow hover:bg-blue-100 text-base transition"
                    onClick={() => setActiveTab("addBook")}
                  >
                    <FaBook className="text-2xl mb-2" /> Add New Book
                  </button>
                  <button className="flex-1 flex flex-col items-center justify-center bg-green-50 text-green-600 font-semibold rounded-lg py-8 shadow hover:bg-green-100 text-base transition">
                    <FaBox className="text-2xl mb-2" /> Process Orders
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "addBook" && (
          <AddBookSection onCancel={() => setActiveTab("dashboard")} />
        )}
        {activeTab === "orders" && <OrdersSection />}
        {activeTab === "books" && <BooksSection />}
      </main>
    </div>
  );
};

export default AdminDashboard;
