import React from "react"


const NavBar = () => {
    return (
        <div>

        </div>
    )}
    export default NavBar
    /* import React from 'react';
import Link from 'next/link';

import { useState } from 'react';

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="overscroll-y-none h-screen lg:bg-pink-500  shadow">
                <div className="justify-between  lg:p-1 mx-auto md:items-center md:flex">
                    <div>
                        <div className=" flex items-center justify-between py-3 md:py-5 md:block">
                            <div className="md:hidden">
                                <button
                                    className="p-1  text-gray-700 rounded-md outline-none focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-10 text-white"
                                            viewBox="0 0 20 20"
                                            fill="pink"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="pink"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={` justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? 'block' : 'hidden'
                            }`}
                        >
                            <div className="grid align-left content-start bg-pink-500  justify-self-start">
                                <div className="grid gap-y-5 pt-7">
                                    <span className="mt-4 mb-7">
                                        <h2 className="text-center text-white  text-2xl overline">
                                            SAVAAC
                                        </h2>
                                    </span>
                                    <Link href="/dashboard">
                                        <span className="grid w-40 lg:mb-4 rounded-3xl grid-flow-col justify-center items-center">
                                            <img
                                                width="20"
                                                height="20"
                                                src="/Images/home.svg"
                                                className="mr-4"
                                            />
                                            <span className="text-sm text-white">
                                                Dashboard
                                            </span>
                                        </span>
                                    </Link>
                                    <Link href="">
                                        <span className="grid lg:mr-2 lg:mb-4 rounded-3xl grid-flow-col justify-center items-center">
                                            <img
                                                width="20"
                                                height="20"
                                                src="/Images/user.svg"
                                                className="mr-4"
                                            />
                                            <span className="text-sm text-white ">
                                                Department
                                            </span>
                                        </span>
                                    </Link>
                                    <Link href="">
                                        <span className="grid rounded-3xl lg:mb-4 lg:mr-7 grid-flow-col justify-center items-center ">
                                            <img
                                                width="20"
                                                height="20"
                                                src="/Images/request.svg"
                                                className="mr-4"
                                            />
                                            <span className="text-sm text-white">
                                                Receipt
                                            </span>
                                        </span>
                                    </Link>

                                    <Link href="">
                                        <span className="grid w-40 lg:mb-4 rounded-3xl grid-flow-col lg:mr-6  justify-center items-center">
                                            <img
                                                width="20"
                                                height="20"
                                                src="/Images/settings.svg"
                                                className="mr-4"
                                            />

                                            <span className="text-sm text-white">
                                                Settings
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
 */