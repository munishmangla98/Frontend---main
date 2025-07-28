// // import React from 'react'
// import logo from "../../public/MTT.png";

// function Banner() {
//     return (
//         <>
//             <div className="max-w-screen-2x1 container mx-auto md:px-10 px-4 flex flex-col md:flex-row my-10">
//                 <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
//                     <div className="space-y-8">
//                         <h1 className="text-2xl md:text-4xl font-bold">
//                             Welcome to Mang Tech Talk — where innovation{" "}
//                             <span className="text-pink-500">meets inspiration.!!!</span>
//                         </h1>
//                         <p className="text-sm md:text-xl">
//                             Dive into a futuristic hub of tech discussions, cutting-edge trends, and real-world insights from developers, designers, AI enthusiasts, and digital creators. Whether you're a curious learner or a seasoned techie, this is your space to explore, connect, and grow. 🚀
//                         </p>
                       
//                     </div>
//                     <button className="btn mt-6 btn-secondary">Get Started</button>
//                 </div>
//                 <div className="order-1 w-full mt-20 md:w-1/2">
//                     <img
//                         src={logo}
//                         className="rounded-full md:w-[440px] md:h-[430px] md:ml-12"
//                         alt=""
//                     />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Banner

import React from "react";
import logo from "../../public/MTT.png";

function Banner() {
  return (
    
    <section className="bg-gray-950 text-white py-16 mt-16">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Welcome to <span className="text-blue-500">Mang Tech Talk</span> —<br />
              where <span className="text-pink-500">innovation</span> meets <span className="text-green-400">inspiration</span>!
            </h1>

            <p className="text-base md:text-lg text-gray-300">
              Dive into a futuristic hub of tech discussions, cutting-edge trends, and real-world insights from developers, designers, AI enthusiasts, and digital creators. Whether you're a curious learner or a seasoned techie, this is your space to explore, connect, and grow. 🚀
            </p>

            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={logo}
            alt="Mang Tech Talk Logo"
            className="w-64 h-64 md:w-[420px] md:h-[420px] rounded-full shadow-2xl border-4 border-pink-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
