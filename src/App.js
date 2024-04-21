import React from "react";
import Signin from "./pages/Signin";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Hero from "./pages/Hero";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Chatwall from "./components/chatwall/Chatwall";
import MessagesLayout from "./components/chatwall/messages/MessagesLayout"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Hero/>),
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:"/about",
        element: <About/>
      }
    ]
  },
  {
    path: "/signin",
    element: (<Signin/>)
  },
  {
    path:"/chatwall",
    element: <Chatwall/>,
    children:[
      {
        index:true,
        element:"hi"
      },
      {
        path:"/chatwall/:id",
        element:<MessagesLayout/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
