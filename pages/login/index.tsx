/* import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();

    function handleLogin() {
      console.log('happy,vcvgbn,l.jvccvbnnbvxcvbnmnbvcxcvbnmmnbvcxcvbnmmnbvc')
        router.push('/dashboard');

    }
    return (
        <div className="grid min-w-25 mt-[3em] justify-center">
            <form
                onSubmit={handleLogin}
                className="grid p-[3em] rounded shadow"
            >
                <label className="text-l text-gray-500 font-bold">Login</label>
                <div className="grid mt-4 mb-1 gap-y-2">
                    <div className="grid gap-y-2">
                        <h3 className="text-gray-500 text-sm text-base">
                            Username
                        </h3>
                        <input
                            type="email"
                            className="rounded bg-pink-100 p-2 px-2  border-1 border-gray-300 outline-0 mb-4"
                        ></input>
                    </div>
                    <div className="grid gap-y-2">
                        <h3 className="text-gray-500 text-sm text-base">
                            Password
                        </h3>
                        <input
                            type="password"
                            className="rounded bg-pink-100 p-2 px-2  border-1 border-gray-300 outline-0"
                        ></input>
                    </div>
                    <div className="grid grid-flow-col justify-start items-center mb-4 ">
                        <input
                            type="checkbox"
                            className="p-2 px-3 bg-gray-200 outline-0 mb-4"
                        ></input>
                        <span className="text-gray-700 text-sm ml-4 mb-4">
                            Remember Password?
                        </span>
                    </div>
                </div>
                <button className="rounded-xl text-white text-sm bg-pink-500 p-2">
                    LOGIN
                </button>
                <span className="text-right text-sm mt-4 font-light text-gray-600">
                    <Link href="/forgot-password">Forgot password?</Link>
                </span>
                <span className="text-center mt-3 text-sm font-light text-gray-700">
                    Need an Account?
                    <span className="text-pink-500 text-sm ml-2">
                        <Link href="/register">Register</Link>
                    </span>
                </span>
            </form>
        </div>
    );
};

export default Login;
 */