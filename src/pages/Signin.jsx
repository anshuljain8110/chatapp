import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { Navigate } from "react-router-dom";

export default function Signin() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const firebase = useFirebase();
  const setTheme = firebase.checkTheme
  
  return (
    <section className={`bg-gray-50 ${setTheme("dark:bg-gray-900")}`}>
      {firebase.loggedIn && (<Navigate to="/" replace="true"/>)}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p className={`flex items-center mb-6 text-2xl font-semibold text-gray-900 ${setTheme("dark:text-white")} `}>
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </p>
        <div className={`w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ${setTheme("dark:bg-gray-800 dark:border-gray-700")} `}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className={`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ${setTheme("dark:text-white")}`}>
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={(e)=>{
              e.preventDefault()
              firebase.signupUserWithEmailAndPassword(email,password)
            }}>
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${setTheme("dark:text-white")}`}
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${setTheme("dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500")} `}
                  placeholder="yourname@email.com"
                  required=""
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${setTheme("dark:text-white")} `}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${setTheme("dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500")}`}
                  required=""
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>

              <button
                type="submit"
                className={` bg-blue-900 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${setTheme("dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800")}`}
              >
                Sign in
              </button>
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p> */}
            </form>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-400 border-1"></div>
              <div className={`px-3 font-bold text-gray-800 text-md ${setTheme("dark:text-gray-300")}`}>or</div>
              <div className="flex-grow border-t border-gray-400 border-1"></div>
            </div>
            <div className="w-full flex justify-center px-6 sm:px-0 max-w-sm">
              <button
                type="button"
                className="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
                onClick={()=>{firebase.signUpWithGoogle()}}
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign up with Google<div></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
