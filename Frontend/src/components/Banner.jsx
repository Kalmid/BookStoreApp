import React from "react";

function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mt-12 md:mt-32">
                <div className="space-y-12">
                    <h1 className="text-4xl font-bold">
                        Hello, Welcomes here to learn something{" "}
                        <span className="text-pink-500">new everyday!!!</span>
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                        et totam. Tempora amet atque expedita, quae corrupti totam sed
                        pariatur corporis at veniam est voluptas animi!
                    </p>
                </div>
                </div>
                <div className="w-full md:w-1/2">Right</div>
            </div>
        </>
    )
}

export default Banner;