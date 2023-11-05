import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import DonationBlogs from './donationBlogs/DonationBlogs';
import Donation from './donationBlogs/Donation';
import Statistics from './donationBlogs/Statistics';
import DonationDetails from './donationBlogs/DonationDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<DonationBlogs/>,
        loader:async ()=>fetch("donation.json")
      },
      {
        path:"/donation",
        loader:()=>fetch("donation.json"),
        element:<Donation/>
      },
      {
        path:"/statistics",
        loader:()=>fetch("donation.json"),
        element:<Statistics/>
      },

      {
        path:"/donationDetails/:id",
        loader:()=>fetch("donation.json"),
        element:<DonationDetails/>
      }
    ]
      
    
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
