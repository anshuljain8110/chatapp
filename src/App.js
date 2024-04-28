import React from "react";
import Signin from "./pages/Signin";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Hero from "./pages/Hero";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Chatwall from "./components/chatwall/Chatwall";
import MessagesLayout from "./components/chatwall/messages/MessagesLayout"
import "./App.css"
import ChatwallHome from "./components/chatwall/ChatwallHome";

const router = createBrowserRouter([
  {
    path: "/chatapp/",
    element: (<Hero/>),
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:"/chatapp/about",
        element: <About/>
      }
    ]
  },
  {
    path: "/chatapp/signin",
    element: (<Signin/>)
  },
  {
    path:"/chatapp/chatwall",
    element: <Chatwall/>,
    children:[
      {
        index:true,
        element:<ChatwallHome/>
      },
      {
        path:"/chatapp/chatwall/:id",
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
