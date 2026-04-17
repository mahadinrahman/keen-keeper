import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './MainLayout';
import Home from './Components/Home/Home';
import Timeline from './Components/Timeline/Timeline';
import Stats from './Components/Stats/Stats';
import ErrorUI from './Error';
import Details from './Components/Home/Details';
import ContextProvider from './ContextProvider';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
      index:true,
      element:<Home></Home>
    },
    {
     path:"/timeline",
     element:<Timeline></Timeline>
    },
    {
      path:"/stats",
      element:<Stats></Stats>
    },
    {
      path:"/details/:id",
      element:<Details></Details>
    },
    ],
    errorElement:<ErrorUI></ErrorUI>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
