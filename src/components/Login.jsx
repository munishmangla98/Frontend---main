import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const userInfo = {
                email: data.email,
                password: data.password,
            };
            const response = await axios.post("http://localhost:5000/api/auth/login", userInfo);
            if (response.data && response.data.token) {
                // Store the token in local storage
                const userData = {
                    token: response.data.token,
                    user_id: response.data._id,
                    username: response.data.name,
                };
                localStorage.setItem("user", JSON.stringify(userData));
                console.log("Token stored:", response.data.token);
                toast.success("Logged in Successfully");
                document.getElementById("my_modal_3").close();
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                toast.error("Error: " + error.response.data.message);
            } else {
                console.log(error);
                toast.error("An error occurred, please try again later");
            }
        }
        setLoading(false);
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })}
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
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                            <div className="flex justify-around mt-6">
                                <button
                                    type="submit"
                                    className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </button>
                                <p>
                                    Not registered?{" "}
                                    <Link
                                        to="/signup"
                                        className="underline text-blue-500 cursor-pointer"
                                    >
                                        Signup
                                    </Link>{" "}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Login;
