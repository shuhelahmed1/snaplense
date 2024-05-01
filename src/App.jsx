
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Nav from './component/Nav/Nav';
import Products from './component/Products/Products';
function App() {

 
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Nav></Nav><Home/></> 
    
    },
    {
      path: "/about",
      element: <><Nav></Nav><About/></> 
    },
    {
      path: "/products",
      element: <><Nav></Nav><Products/></> 
    },
    {
      path: "/products/:id",
      element: <><Nav></Nav><Products/></> 
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />    </>
  )
}

export default App
