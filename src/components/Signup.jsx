// import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
    // to check on which current page we are
    const location = useLocation();
    // to navigate from current page to homepage after Signup
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        console.log(data)
        await axios.post("http://localhost:5000/api/auth/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Signup Successfully");
                    // to navigate to homepage after Signup
                    navigate(from, { replace: true });
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
            <Navbar />
            <div className="flex h-screen items-center justify-center dark:text-white">
                <div className=" w-[600px] ">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white"
                            >
                                ✕
                            </Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className="mt-4 space-y-2 ">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your fullname"
                                    className="w-80 px-3 py-1 border rounded-md outline-none" name="name"
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.fullname && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            {/* Email */}
                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("email", { required: true })} name="email"
                                />
                                <br />
                                {errors.email && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            {/* Password */}
                            <div className="mt-4 space-y-2">
                                <span>Password</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-1 border rounded-md outline-none" name="password"
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            {/* Button */}
                            <div className="flex justify-around mt-4">
                                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                    Signup
                                </button>
                                <p className="text-xl">
                                    Have account?{" "}
                                    <button
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >
                                        Login
                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
