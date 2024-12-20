import React from "react";
import { Link } from "react-router";
import Signup from "./Signup";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully!");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              // to="/"
              onClick={() => document.getElementById("my_modal_3").closeModal()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-extrabold text-lg">LogIn</h3>
            <div className="mt-4 space-y-2 ">
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
            <div className="mt-10 space-y-2">
              <span>Password</span>
              <br />
              <input
                className="w-80 px-3 border rounded-md outline-none py-1 dark:bg-slate-900 dark:text-white"
                type="password"
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
              <input
                className="bg-pink-500 hover:bg-pink-700 duration-200 px-3 py-1 rounded-md text-white"
                type="submit"
                value="Login"
              />
              {/* Login */}
              {/* </button> */}
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Signup
                </Link>
                {/* <Signup /> */}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
