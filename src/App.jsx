
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Nav from './component/Nav/Nav';
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
  ]);

  return (
    <>
    <RouterProvider router={router} />    </>
  )
}

export default App
