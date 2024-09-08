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
          element:<SingleBookCard></SingleBookCard>,
          loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        },{
          path:'shop',
          element:<Shop></Shop>
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
          element:<Deshboard></Deshboard>
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
          element:<EditBooks></EditBooks>
        }
      ]
    }
  ]);

  export default router;