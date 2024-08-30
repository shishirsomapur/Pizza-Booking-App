import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import VegPizza from './components/VegPizza'
import NonVegPizza from './components/NonVegPizza'
import Cart from './components/Cart'
import Signup from './components/Signup'
import Checkout from './components/Checkout'
import Payment from './components/Payment'
import Profile from './components/Profile'
import Orders from './components/Orders'
import TrackOrder from './components/TrackOrder'

const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <><Navbar /><Home /></>
      },
      {
        path: '/menu',
        element: <><Navbar /><Menu /></>
      },
      {
        path: '/vegpizza',
        element: <><Navbar /><VegPizza /></>
      },
      {
        path: '/nonvegpizza',
        element: <><Navbar /><NonVegPizza /></>
      },
      {
        path: '/cart',
        element: <><Navbar /><Cart /></>
      },
      {
        path: '/signup',
        element: <><Signup /></>
      },
      {
        path: '/checkout',
        element: <><Navbar /><Checkout /></>
      },
      {
        path: '/payment',
        element: <><Payment/></>
      },
      {
        path: '/profile',
        element: <><Profile/></>
      },
      {
        path: '/orders',
        element: <><Orders/></>
      },
      {
        path: '/trackOrder',
        element: <><TrackOrder/></>
      }
    ]
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
