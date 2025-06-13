import React, { useState, useEffect, useRef } from "react";
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
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa6';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [books, setBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setOrders(storedOrders);
    setBooks(storedBooks);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }
    setCurrentUser(user);
  }, [navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showProfilePopup &&
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowProfilePopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfilePopup]);

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

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setShowProfilePopup(false);
    navigate('/login');
  };

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
                activeTab === "orders" ? "bg-[#232e43] text-white" : ""
              }`}
              onClick={() => setActiveTab("orders")}
            >
              <FaBox className="text-lg" /> <span>Orders</span>
            </button>
          </nav>
        </div>

        {/* Admin Profile Section */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setShowProfilePopup(!showProfilePopup)}
            className="w-full flex items-center gap-4 px-8 py-5 border-t border-[#232e43] text-white hover:bg-[#232e43] transition group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300">
              <span className="text-white font-bold text-lg">
                {currentUser?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold tracking-wide">{currentUser?.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <p className="text-sm text-gray-300">Admin</p>
              </div>
            </div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${showProfilePopup ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Profile Popup */}
          {showProfilePopup && currentUser && (
            <div
              ref={popupRef}
              className="absolute bottom-full left-0 mb-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100"
            >
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {currentUser.name.charAt(0).toUpperCase()}       
                    </span> 
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{currentUser.name}</p>
                    <p className="text-xs text-gray-500">{currentUser.email}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}   
                className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */} 
      <main className="flex-1 ml-60 p-10">   
        {/* Admin Header */}
        <header className="bg-white shadow-sm"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"> 
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
          </div>
        </header>

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
