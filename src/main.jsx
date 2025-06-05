import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import counterReducer from './store/counterSlice.js';
import todoReducer from './store/todoSlice.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store  = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
