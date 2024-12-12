import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-extrabold text-lg">SignUp</h3>
            <div className="mt-6 space-y-2 ">
              <span>Name</span>
              <br />
              <input
                className="w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-900 dark:text-white"
                type="text"
                placeholder="Enter Your Full Name"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>
            <div className="mt-6 space-y-2 ">
              <span>Email</span>
              <br />
              <input
                className="w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-900 dark:text-white"
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>
            <div className="mt-6 space-y-2">
              <span>Password</span>
              <br />
              <input
                className="w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-900 dark:text-white"
                type="text"
                placeholder="Enter Password here"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password is required
                </span>
              )}
            </div>
            <div className="mt-4 flex justify-around items-center">
              <button className="bg-pink-500 hover:bg-pink-700 duration-200 px-3 py-1 rounded-md text-white">
                Sign Up
              </button>
              <p>
                Have Account?{" "}
                <Link
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </Link>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
