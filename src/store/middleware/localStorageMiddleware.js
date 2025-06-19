export const localStorageMiddleware = store => next => action => {
  const result = next(action);
  
  // Save to localStorage based on action type
  switch (action.type) {
    case 'cart/setCart':
    case 'cart/addToCart':
    case 'cart/removeFromCart':
    case 'cart/updateQuantity':
    case 'cart/clearCart':
      localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
      break;
      
    case 'books/setBooks':
    case 'books/addBook':
    case 'books/updateBook':
    case 'books/deleteBook':
      localStorage.setItem('books', JSON.stringify(store.getState().books.books));
      break;
      
    case 'orders/setOrders':
    case 'orders/addOrder':
    case 'orders/updateOrderStatus':
    case 'orders/deleteOrder':
      localStorage.setItem('orders', JSON.stringify(store.getState().orders.orders));
      break;
      
    case 'auth/setCurrentUser':
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      break;
      
    case 'auth/logout':
      localStorage.removeItem('currentUser');
      break;
  }
  
  return result;
}; 