import React from "react";
import banner from "../../public/banner1.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-5 flex md:flex-row flex-col-reverse my-10 ">
        <div className="md:w-1/2 w-full md:mt-32 mt-2">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              officiis, aliquid expedita itaque sapiente incidunt odit ea ad
              quis fuga sint reprehenderit perferendis asperiores inventore
              dicta quo consectetur nemo nostrum!
            </p>
          <div>
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 "
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow " placeholder="Enter your Email to login" />
            </label>
          </div>
          </div>
          <div>
          <button className="btn btn-secondary mt-6">Secondary</button>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
            <img src={banner} className="w-full md:mt-24 " alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;