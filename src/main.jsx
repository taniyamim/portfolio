import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/Layout/Main.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Contact from './components/Contact/Contact.jsx';
import Projects from './components/Projects/Projects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    

  </React.StrictMode>,
)
