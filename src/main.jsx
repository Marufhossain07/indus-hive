import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/root/Root.jsx';
import Home from './layouts/home/Home.jsx'
import Error from './layouts/Error/Error.jsx'
import Details from './layouts/Details/Details.jsx';
import Login from './layouts/login/Login.jsx';
import Register from './layouts/register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/property/:id',
        loader: () => fetch('./data.json'),
        element: <Details></Details>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
