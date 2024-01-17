import React, { useState } from 'react'
import EyeIcon from '../../assets/icons/EyeIcon'
import EyeCrossIcon from '../../assets/icons/EyeCrossIcon';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleLogin = async () => {
        try {
            // const token = localStorage.getItem(form?.username)
            
        } catch (err) {
            console.error('Login error', err);
        }
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-20">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-black sm:text-3xl">
                    Get started today
                </h1>
                <div
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-lg font-medium">Sign in to your account</p>

                    <div>
                        <label for="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Username"
                                name='username'
                                value={form.username}
                                onChange={(e) => setForm({ ...form, username: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                type={passwordVisibility ? 'text' : 'password'}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                name='password'
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                {passwordVisibility ? (
                                    <EyeCrossIcon onClick={() => setPasswordVisibility(false)} />
                                ) : (
                                    <EyeIcon onClick={() => setPasswordVisibility(true)} />
                                )}
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login