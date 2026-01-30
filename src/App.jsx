import Start from './assets/Start'
import About from './assets/About'
import Contact from './assets/Contact'
import Portfolio from './assets/Portfolio'
import Layout from './assets/Component/Layout'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Start /> },
      { path: "About", element: <About /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />
}

export default App;
