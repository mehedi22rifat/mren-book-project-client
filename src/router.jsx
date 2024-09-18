import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import ErrorElements from "./components/ErrorElements";
import Home from "./home";
import About from "./components/about";
import SingleBookCard from "./components/SingleBookCard";
import Shop from "./Shop";
import DeshobardLayout from "./deshboard/DeshobardLayout";
import Deshboard from "./deshboard/Deshboard";
import { UploadBooks } from "./deshboard/UploadBooks";
import { ManageBooks } from "./deshboard/ManageBooks";
import { EditBooks } from "./deshboard/EditBooks";
import SingUp from "./components/SingUp";
import SingIn from "./components/SingIn";
import PrivateRoute from "./contects/privateRoute/PrivateRoute";
import Blog from "./components/Blog";






  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorElements></ErrorElements>,
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:'/book/:id',
          element:<PrivateRoute><SingleBookCard></SingleBookCard></PrivateRoute>,
          loader:({params}) => fetch(`https://mren-server.vercel.app/book/${params.id}`)
          // https://mren-server.vercel.app/
        },{
          path:'shop',
          element:<Shop></Shop>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }

      ]
    },
    {
      path:'/admin/deshboard',
      errorElement:<ErrorElements></ErrorElements>,
      element:<DeshobardLayout></DeshobardLayout>,
      children:[
        {
          path:'/admin/deshboard',
          element:<PrivateRoute><Deshboard></Deshboard></PrivateRoute>
        },
        {
          path:'/admin/deshboard/upload',
          element:<UploadBooks></UploadBooks>
        },
        {
          path:'/admin/deshboard/manage',
          element:<ManageBooks></ManageBooks>
        }
        ,
        {
          path:'/admin/deshboard/edit-books/:id',
          element:<EditBooks></EditBooks>,
          loader:({params}) => fetch(`https://mren-server.vercel.app/book/${params.id}`)
        }
      ]
    },
    {
      path:'/singUp',
      element:<SingUp></SingUp>
    },
    {
      path:'/singIn',
      element:<SingIn></SingIn>
    }
  ]);

  export default router;