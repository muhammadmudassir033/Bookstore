import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  filteredBooks: [],
  categories: ['Best Selling', 'Classic', 'Children'],
  selectedCategory: 'All',
  searchTerm: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
      state.filteredBooks = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
      state.filteredBooks = state.books;
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
        state.filteredBooks = state.books;
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
      state.filteredBooks = state.books;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      if (action.payload === 'All') {
        state.filteredBooks = state.books;
      } else {
        state.filteredBooks = state.books.filter(book => book.category === action.payload);
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredBooks = state.books.filter(book => 
        book.title.toLowerCase().includes(action.payload.toLowerCase()) ||
        book.author.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const {
  setBooks,
  addBook,
  updateBook,
  deleteBook,
  setCategory,
  setSearchTerm,
} = booksSlice.actions;

export default booksSlice.reducer; 