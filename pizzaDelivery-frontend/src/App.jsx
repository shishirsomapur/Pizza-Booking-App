import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import VegPizza from './components/VegPizza'
import NonVegPizza from './components/NonVegPizza'
import Cart from './components/Cart'
import Signup from './components/Signup'

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
        element: <><Signup/></>
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
