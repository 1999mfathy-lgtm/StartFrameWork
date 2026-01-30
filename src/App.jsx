import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Start from './assets/Start'
import About from './assets/About'
import Contact from './assets/Contact'
import Portfolio from './assets/Portfolio'
import Layout from './assets/Component/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const routes = createBrowserRouter([
  {path: "",element: <Layout />, children: [
    {path: "", element: <Start />,},
      {path: "/About", element: <About />,},
      {path: "/Portfolio", element: <Portfolio />,},
       {path: "/Contact", element: <Contact />,},
    ],
  },
]);

function App() {

  return (
    <>
<RouterProvider router={routes}/>
    </>
  )
}
export default App
