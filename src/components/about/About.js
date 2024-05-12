import React from "react";


export default function About() {
  const arr = [
    {name:"Anshul Jain",position:"Full Stack",image:"https://res.cloudinary.com/dtws0vjlb/image/upload/v1689062624/avtars/towkg9tprt2ujol2b3il.png",connect:"https://www.linkedin.com/in/anshuljain8110/"},

    {name:"Arpit Manchanda",position:"Logistics",image:"https://res.cloudinary.com/dtws0vjlb/image/upload/v1689062625/avtars/u0z9gqq7t3uc5hr5gmnu.png",connect:"https://www.linkedin.com/in/arpit-manchanda-85638225a/"},

    {name:"Anushka Gupta",position:"Frontend",image:"https://res.cloudinary.com/dtws0vjlb/image/upload/v1689062626/avtars/xpsbmt8qmcachkch9grk.png",connect:"https://www.linkedin.com/in/anushka-gupta-562673260/"},

    {name:"Apoorva",position:"Designer",image:"https://res.cloudinary.com/dtws0vjlb/image/upload/v1689062626/avtars/vvs3zcuzl0dfbqo2cw17.png",connect:"https://www.linkedin.com/in/anshuljain8110/"},
  ]

  const arr2 = [
    {
      feature: "Simple",
      desc:"is so simple you already know how to use it.",
      path: "M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"
    },
    {
      feature: "Secure",
      desc:"messages are heavily encrypted and can self-destruct.",
      path: "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"
    },
    {
      feature: "Synced",
      desc:"lets you access your chats from multiple devices.",
      path: "M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"
    },
    {
      feature: "Simple",
      desc:"has no limits on the size of your media and chats.",
      path: "M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"
    },
    {
      feature: "Social",
      desc:"can handel 50K users per day",
      path: "M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
    },
    {
      feature: "Fast",
      desc:"delivers messages faster than any other application.",
      path: "M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"
    },
  ]
  return (
    <div>
      <section className="bg-blue-500 flex flex-col p-32">
        <h2 className="text-4xl font-semibold text-center text-white mb-4">
          So what is <span className="text-blue-900 font-semibold">ChatPlane ?</span> 🤷‍♂️{" "}
        </h2>
        <p className="text-xl text-center text-white px-4">
          At ChatPlane, we believe that communication is the cornerstone of
          human connection. Our chat app is designed to facilitate seamless
          communication and foster meaningful connections between individuals,
          teams, and communities, no matter where they are in the world.
        </p>
      </section>






      <section className="relative p-32 flex flex-col gap-2 items-center justify-center" style={{backgroundColor:"rgb(117, 232, 225)"}}>
        <h2 className="text-3xl mb-4 font-semibold text-white">Why To Use <span className="text-blue-800">ChatPlane ?</span> 🤔</h2>
        <div className="grid grid-cols-3">
          {arr2.map((e)=>{
            return <div className="flex items-center flex-col p-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 " viewBox="0 0 512 512"><path d={e.path} fill="rgb(59 130 246)"/></svg>
              <h2 className="text-blue-800 font-semibold my-4 text-3xl">{e.feature}</h2>
              <p className="text-blue-500 text-center"><span className="text-blue-800 font-semibold">ChatPlane</span> {e.desc}</p>
            </div>
          })}
        </div>
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






      <section className="flex flex-col items-center justify-center p-32 relative bg-blue-600">
        <h2 className="text-3xl font-semibold text-white mb-8">Our <span className="text-red-400">Team</span> 😁</h2>
        <div className="grid grid-cols-4 gap-16">
          {arr.map((e)=>{
            return <div className="flex flex-col items-center justify-center">
            <img
              src={e.image}
              alt="pp"
              className="rounded rounded-full h-64 w-64 bg-blue-300 p-1"
            />
            <h2 className="text-white text-2xl font-semibold">{e.name}</h2>
            <p className="text-blue-200">{e.position}</p>
            <a className="my-2 p-4 rounded rounded-full bg-blue-700 hover:bg-blue-800 text-white" target="_blank"  rel="noreferrer" href={e.connect}>Connect</a>
          </div>
          })}
        </div>
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




      <section className="bg-blue-500 flex flex-col p-32 relative">
        <h2 className="text-4xl font-semibold text-center text-white mb-4">Our Mission</h2>
        <p className="text-xl text-center text-white px-4">At ChatPlane, our mission is to empower individuals, teams, and communities to connect, collaborate, and communicate effortlessly. We believe that communication is the foundation of meaningful relationships and productive interactions, and we are dedicated to providing a platform that facilitates seamless communication while prioritizing privacy, security, and user satisfaction</p>
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
