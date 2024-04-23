import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="flex px-36 py-12 bg-blue-500 items-center relative">
        <div>
          <h1 className="mb-8 font-medium text-7xl">
            Have You <span className="text-white">Chat</span> Best Yet ???
          </h1>
          <p className="mb-8 text-3xl text-blue-100">
            <span className="text-red-700 font-semibold">Fast. </span>
            <span className="text-yellow-300 font-semibold">Free. </span>
            <span className="text-green-400 font-semibold">Secure. </span>
          </p>
          <Link
            className=" p-4 bg-blue-600 rounded-full text-white hover:bg-blue-700 font-semibold"
            to="/chatwall"
          >
            Chat Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-6 ml-1 mb-1 inline"
            >
              <path
                fill="#ffffff"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </Link>
        </div>

        <img
          className="w-2/4"
          src="https://uploads-ssl.webflow.com/5ec19145e5370d18c6fc5c9e/5ecc2f8b71c39539a4032f9a_hero-section-img-min.png"
          alt="dd"
        />

        {/* <div class="custom-shape-divider-top-1713803907">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div> */}
      </section>

      <section className=" flex flex-col p-36 bg-blue-600 items-center relative">
        <h2 className="text-center text-4xl font-medium mb-8 text-blue-200">
          Introducing{" "}
          <span className="font-bold text-6xl text-white">ChatPlane 😎</span>
        </h2>
        <p className="text-xl text-blue-100 p-4 text-center ">
          Welcome to ChatPlane a chating webApp, where seamless communication
          meets unparalleled convenience! Our chat app is designed to
          revolutionize the way you connect and interact with others, offering a
          dynamic platform that facilitates effortless conversations in
          real-time. Whether you're keeping in touch with friends and family,
          collaborating with colleagues, or networking with like-minded
          individuals
        </p>
        <Link
          to="/about"
          className="mt-4 p-4 bg-blue-700 rounded-full text-white hover:bg-blue-800 font-semibold"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-6 ml-1 mb-1 inline"
          >
            <path
              fill="#ffffff"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </Link>
        <div class="custom-shape-divider-top-1713803907">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section
        className="p-32 flex items-center relative"
        style={{ backgroundColor: "rgb(117 232 225)" }}
      >
        <h2 className="text-3xl text-center m-4">
          With The Unbeatable{" "}
          <span className="text-blue-700 font-bold text-5xl">UI</span>
          <span className="text-black text-5xl">/</span>
          <span className="text-red-700 font-bold text-5xl">UX</span>
        </h2>
        <img
          src="https://uploads-ssl.webflow.com/5ec19145e5370d18c6fc5c9e/5ed024b6465a6bd5124fd8bc_Direct%20Messaging-min-p-1600.jpeg"
          alt="pp"
          className="w-4/5"
        />
        <div class="custom-shape-divider-top-1713803907">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="bg-blue-500 p-32 flex flex-col items-center text-white relative">
        <h2 className="text-4xl mb-8">So what are you waiting for ??? 🤔</h2>
        <Link
          to="/chatwall"
          className="mt-4 p-4 bg-blue-700 rounded-full text-white hover:bg-blue-800 font-semibold"
        >
          Check Out Now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-6 ml-1 mb-1 inline"
          >
            <path
              fill="#ffffff"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </Link>

        <div class="custom-shape-divider-top-1713803907">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
