import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: JSON.parse(localStorage.getItem('books')) || [],
  orders: JSON.parse(localStorage.getItem('orders')) || [],
  activeTab: 'dashboard',
  showProfilePopup: false
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // Book actions
    addBook: (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
        localStorage.setItem('books', JSON.stringify(state.books));
      }
    },

    // Order actions
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    updateOrderStatus: (state, action) => {
      const { orderId, newStatus } = action.payload;
      const order = state.orders.find(o => o.id === orderId);
      if (order) {
        order.status = newStatus;
        localStorage.setItem('orders', JSON.stringify(state.orders));
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },

    // UI actions
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setShowProfilePopup: (state, action) => {
      state.showProfilePopup = action.payload;
    }
  },
});

export const {
  addBook,
  deleteBook,
  updateBook,
  addOrder,
  updateOrderStatus,
  deleteOrder,
  setActiveTab,
  setShowProfilePopup
} = bookSlice.actions;

export default bookSlice.reducer; 