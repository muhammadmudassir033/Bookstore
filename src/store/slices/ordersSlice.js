import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  filteredOrders: [],
  statusFilter: 'All',
  searchTerm: '',
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
      state.filteredOrders = action.payload;
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      state.filteredOrders = state.orders;
    },
    updateOrderStatus: (state, action) => {
      const { orderId, newStatus } = action.payload;
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = newStatus;
      }
      state.filteredOrders = state.orders;
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
      state.filteredOrders = state.orders;
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
      if (action.payload === 'All') {
        state.filteredOrders = state.orders;
      } else {
        state.filteredOrders = state.orders.filter(order => order.status === action.payload);
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredOrders = state.orders.filter(order => 
        order.id.toString().includes(action.payload) ||
        order.customerName.toLowerCase().includes(action.payload.toLowerCase()) ||
        (order.email && order.email.toLowerCase().includes(action.payload.toLowerCase()))
      );
    },
  },
});

export const {
  setOrders,
  addOrder,
  updateOrderStatus,
  deleteOrder,
  setStatusFilter,
  setSearchTerm,
} = ordersSlice.actions;

export default ordersSlice.reducer; 