import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Users from './components/Users.jsx';
import Errorpage from './components/Errorpage.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-seven-beta.vercel.app/coffee'),
      },
      {
        path: "/addCoffee",
        element: <PrivateRoutes>
          <AddCoffee></AddCoffee>
        </PrivateRoutes>,
      },
      {
        path: "/updateCoffee/:id",
        element: <PrivateRoutes>
          <UpdateCoffee></UpdateCoffee>
        </PrivateRoutes>,
        loader: ({params}) => fetch(`https://coffee-store-server-seven-beta.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/coffee/:id",
        element: <PrivateRoutes>
          <ViewCoffee></ViewCoffee>
        </PrivateRoutes>,
        loader: ({params}) => fetch(`https://coffee-store-server-seven-beta.vercel.app/coffee/${params.id}`)
      },
      {
        path:'/signin',
        element: <SignIn></SignIn>,
      },
      {
        path:'/signup',
        element: <SignUp></SignUp>,

      },
      {
        path:'/users',
        element: <PrivateRoutes>
          <Users></Users>
        </PrivateRoutes>,
        loader: () => fetch('https://coffee-store-server-seven-beta.vercel.app/users'),
      },
      {
        path: "*",
        element: <Errorpage></Errorpage>  
      },

    ]
  },

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
