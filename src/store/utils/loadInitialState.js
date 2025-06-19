export const loadInitialState = () => {
  return {
    cart: {
      items: JSON.parse(localStorage.getItem('cart')) || [],
      total: 0,
    },
    books: {
      books: JSON.parse(localStorage.getItem('books')) || [],
      filteredBooks: JSON.parse(localStorage.getItem('books')) || [],
      categories: ['Best Selling', 'Classic', 'Children'],
      selectedCategory: 'All',
      searchTerm: '',
    },
    orders: {
      orders: JSON.parse(localStorage.getItem('orders')) || [],
      filteredOrders: JSON.parse(localStorage.getItem('orders')) || [],
      statusFilter: 'All',
      searchTerm: '',
    },
    auth: {
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
      isAuthenticated: !!JSON.parse(localStorage.getItem('currentUser')),
    },
  };
}; 