import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
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
import UpdateProfile from './layouts/UpdateProfile/UpdateProfile.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

import Dashboard from './layouts/Dashboard/Dashboard.jsx';
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
        loader: () => fetch('/data.json'),
        element: <PrivateRoute><Details></Details></PrivateRoute> 
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>

    </AuthProvider>

  </React.StrictMode>,
)
