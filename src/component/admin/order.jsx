import React, { useState, useEffect } from 'react';
import { FaEye, FaTrash, FaEdit } from 'react-icons/fa';

const statusColors = {
  Delivered: 'bg-green-100 text-green-700',
  Processing: 'bg-blue-100 text-blue-700',
  Shipped: 'bg-purple-100 text-purple-700',
  Pending: 'bg-yellow-100 text-yellow-700',
};

const statusOptions = ['Pending', 'Processing', 'Shipped', 'Delivered'];

export default function OrdersSection() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null); 

  // Load orders from localStorage 
  useEffect(() => { 
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  // Filter orders
  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.id.toString().includes(search) ||
      (order.customerName && order.customerName.toLowerCase().includes(search.toLowerCase())) ||
      (order.email && order.email.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = status === 'All' || order.status === status;
    return matchesSearch && matchesStatus; 
  }); 

  // Delete order
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      const updatedOrders = orders.filter(order => order.id !== id);
      setOrders(updatedOrders);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      if (selectedOrder && selectedOrder.id === id) setSelectedOrder(null);
    }
  };

  // Update order status
  const handleStatusChange = (id, newStatus) => { 
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders); 
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    if (selectedOrder && selectedOrder.id === id) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  }; 

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 px-2 sm:px-6 lg:px-8">
      <div className="mb-2">
        <h2 className="text-4xl font-bold text-[#1a2332]">Orders</h2>
        <p className="text-gray-500 text-lg">Manage and process customer orders</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6 mb-2">
        <input
          type="text"
          placeholder="Search by order ID, customer..."  
          className="w-full md:w-1/2 rounded-md border border-gray-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <span className="text-gray-600 font-medium">Status:</span>
          <select
            className="rounded-md border border-gray-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            <option>All</option>
            {statusOptions.map(opt => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow border border-gray-100 mt-2 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-700 text-base border-b">
              <th className="py-3 px-6 font-medium">Order ID</th>
              <th className="py-3 px-6 font-medium">Customer</th>
              <th className="py-3 px-6 font-medium">Date</th>
              <th className="py-3 px-6 font-medium">Total</th>
              <th className="py-3 px-6 font-medium">Status</th>
              <th className="py-3 px-6 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="border-b last:border-b-0 hover:bg-gray-50">
                <td className="py-3 px-6 font-bold">{order.id}</td>
                <td className="py-3 px-6">
                  <div className="font-medium">{order.customerName}</div>
                  {order.email && <div className="text-gray-500 text-sm">{order.email}</div>}
                </td>
                <td className="py-3 px-6">{order.date}</td> 
                <td className="py-3 px-6 font-medium">${order.total}</td> 
                <td className="py-3 px-6">
                  <select
                    className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status] || ''}`}
                    value={order.status}
                    onChange={e => handleStatusChange(order.id, e.target.value)}
                  >
                    {statusOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </td>
                <td className="py-3 px-6 flex gap-2">
                  <button
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <FaEye className="inline-block" /> View
                  </button> 
                  <button  
                    className="flex items-center gap-1 text-red-600 hover:underline"
                    onClick={() => handleDelete(order.id)}
                  >
                    <FaTrash className="inline-block" /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-gray-400">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setSelectedOrder(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Order Details</h3>
            <div className="mb-2"><span className="font-medium">Order ID:</span> {selectedOrder.id}</div>
            <div className="mb-2"><span className="font-medium">Customer:</span> {selectedOrder.customerName}</div>
            {selectedOrder.email && <div className="mb-2"><span className="font-medium">Email:</span> {selectedOrder.email}</div>}
            <div className="mb-2"><span className="font-medium">Date:</span> {selectedOrder.date}</div>
            <div className="mb-2"><span className="font-medium">Total:</span> ${selectedOrder.total}</div>
            <div className="mb-2"><span className="font-medium">Status:</span> {selectedOrder.status}</div>
            <div className="mb-2"><span className="font-medium">Items:</span> {selectedOrder.items && selectedOrder.items.join(', ')}</div>
            {selectedOrder.shippingAddress && (
              <div className="mb-2">
                <span className="font-medium">Shipping Address:</span>
                <div>
                  {selectedOrder.shippingAddress.address}, {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.zip}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}