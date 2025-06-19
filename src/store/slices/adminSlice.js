import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  books: [],
  activeTab: 'dashboard',
  showProfilePopup: false,
  currentUser: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setShowProfilePopup: (state, action) => {
      state.showProfilePopup = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    updateOrderStatus: (state, action) => {
      const { orderId, newStatus } = action.payload;
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = newStatus;
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
  },
});

export const {
  setOrders,
  setBooks,
  setActiveTab,
  setShowProfilePopup,
  setCurrentUser,
  updateOrderStatus,
  deleteOrder,
  deleteBook,
  addBook,
  updateBook,
} = adminSlice.actions;

export default adminSlice.reducer; 