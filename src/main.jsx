import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Header from './components/Header/Header';
// import { Children } from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
    
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
