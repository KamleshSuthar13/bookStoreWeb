import React from "react";
import { useForm } from "react-hook-form";


const ContactPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data); // Handle the form data here
      };
  return (
    <>
      <div className="max-h-screen-2xl flex justify-center mx-auto px-4 md:px-20 container">
        <div className="mt-28 md:px-20 px-4 py-5 border rounded-lg shadow-2xl w-[600px] mb-10">
          <h1 className="text-2xl">Contact Us</h1>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-6 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  className="w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-900 dark:text-white"
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>
              <div className="mt-6 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  className="w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-900 dark:text-white"
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500 text-sm">Email is required</span>
                )}
              </div>
              <div className="mt-6 space-y-2 ">
                <span>Conatct No.</span>
                <br />
                <input
                  className="w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-900 dark:text-white"
                  type="text"
                  placeholder="Contact"
                  {...register("number", { required: true })}
                />
                <br />
                {errors.number && (
                  <span className="text-red-500 text-sm">Contact No. is required</span>
                )}
              </div>
              <div className="mt-6 flex justify-around items-center">
              <button className="bg-pink-500 hover:bg-pink-700 duration-200 px-3 py-1 rounded-md text-white">
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
