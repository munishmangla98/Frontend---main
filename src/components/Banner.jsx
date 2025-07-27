// import React from 'react'
import logo from "../../public/MTT.png";

function Banner() {
    return (
        <>
            <div className="max-w-screen-2x1 container mx-auto md:px-10 px-4 flex flex-col md:flex-row my-10">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
                    <div className="space-y-8">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Welcomes here to learn something{" "}
                            <span className="text-pink-500">new everyday!!!</span>
                        </h1>
                        <p className="text-sm md:text-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                            et totam. Tempora amet atque expedita, quae corrupti totam sed
                            pariatur corporis at veniam est voluptas animi!
                        </p>
                       
                    </div>
                    <button className="btn mt-6 btn-secondary">Get Started</button>
                </div>
                <div className="order-1 w-full mt-20 md:w-1/2">
                    <img
                        src={logo}
                        className="rounded-full md:w-[440px] md:h-[430px] md:ml-12"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default Banner
