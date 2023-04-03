import React from 'react';
/* import CardDetails from './Designs'; */
import Image from 'next/image';
import Link from 'next/link';
import ToolTip from './ToolTip';
/* import FindWork from '../pages/findwork'; */

const Template = () => {
    return (
        <div className="sm:justify-around">
            <div className="grid">
                <div className="flex bg-white shadow justify-between p-4 mt-3">
                    <div>
                        <ul className="grid grid-flow-col gap-8">
                            <p className="text-md text-pink-500 font-mono overline decoration-wavy">
                                Dripple
                            </p>
                            <li className="text-[0.95em] text-gray-500 font-medium">
                                <Link href="">Inspiration</Link>
                            </li>
                            <li className="text-[0.95em] text-gray-500  font-medium">
                                <Link href="/findwork">Find Work</Link>
                            </li>
                            <li className="text-[0.95em] text-gray-500  font-medium">
                                <Link href="/learndesign">Learn Design</Link>
                            </li>
                            <li className="text-[0.95em] text-gray-500  font-medium">
                                <Link href="">Go Pro</Link>
                            </li>
                            <li className="text-[0.95em] text-gray-500  font-medium">
                                <Link href="">Hire Designers</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="grid grid-flow-col gap-6">
                            <div className="mt-[0.5em]">
                                <Image
                                    height="10"
                                    width="20"
                                    alt=""
                                    src="/Images/search.svg"
                                />
                            </div>

                            <button
                                type="button"
                                className="border w-[5em] border-pink-500 text-pink-500 text-sm font-medium rounded-md outline-0 p-1  h-[2.5em]"
                            >
                                Signin
                            </button>
                            <button
                                type="button"
                                className="bg-pink-500 w-[5em] border text-white  text-sm font-medium rounded-md outline-0 p-1  h-[2.5em]"
                            >
                                Signup
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template;
