import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dashboard from '../dashboard';
const Login = () => {
    const router = useRouter();

    function handleRegister(e) {
      e.preventDefault()
        router.push('/dashboard');

    }
    return (
        <div className="grid min-w-25 mt-[3em] justify-center">
            <form
                onSubmit={handleRegister}
                className="grid p-[3em] justify-center rounded shadow"
            >
                <label className="text-l text-gray-500 font-bold">
                    Register
                </label>
                <div className="grid mt-4 mb-1 gap-y-2">
                    <div className="grid gap-y-2">
                        <h3 className="text-gray-500 text-[0.95em] text-base">
                            Full Name
                        </h3>
                        <input
                            type="text"
                            className="rounded p-1 px-1 bg-pink-100 outline-0 mb-2"
                        ></input>
                    </div>
                    <div className="grid gap-y-2">
                        <h3 className="text-gray-500 text-[0.95em] text-base">
                            Username
                        </h3>
                        <input
                            type="text"
                            className="rounded p-1 px-2  bg-pink-100 outline-0 mb-2"
                        ></input>
                    </div>
                    <div className="grid gap-y-2">
                        <h3 className="text-gray-500 text-[0.95em] text-base">
                            Email Address
                        </h3>
                        <input
                            type="email"
                            className="rounded p-1 px-2  bg-pink-100 outline-0 mb-2"
                        ></input>
                    </div>
                    <div className="grid gap-y-2 mb-4">
                        <h3 className="text-gray-500 text-[0.95em] text-base">
                            Password
                        </h3>
                        <input
                            type="password"
                            className="rounded p-1 px-2 bg-pink-100 outline-0 "
                        ></input>
                    </div>
                </div>
                <button className="rounded-xl text-white text-[0.95em] bg-pink-500 p-2">
                    SIGNUP
                </button>
                <p className="text-center text-md text-gray-800 mt-6 mb-6 ">
                    OR
                </p>
                <div className="flex justify-center mb-3">
                    <Link href="">
                        <img width="23" height="20" src="/Images/google.png" className="mr-4" />
                    </Link>
                    <Link href="">
                        <img width="20" height="20" src="/Images/linkedin.svg" className="mr-4" />
                    </Link>
                    <Link href="">
                        <img width="20" height="20" src="/Images/facebook.svg" />
                    </Link>
                </div>
                <span className="text-center mt-3 text-[0.95em] text-gray-700">
                    Have an Account?{' '}
                    <span className="text-pink-500 text-[0.95em]">
                        <Link href="/login">SIGNIN</Link>
                    </span>
                </span>
            </form>
        </div>
    );
};

export default Login;
