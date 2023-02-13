import React from 'react';
import CardDetails from './Designs';
import Image from 'next/image';
import Link from 'next/link';
import ToolTip from './ToolTip';
import FindWork from '../pages/findwork';

const Template = () => {
    return (
        <div className="sm:justify-around">
            <div className="grid bg-white shadow">
                <div className="flex justify-between p-4 mt-3">
                    <div>
                        <ul className="grid grid-flow-col gap-8">
                            <img
                                width="80"
                                height="80"
                                src="/Images/logo.png"
                            />
                            <li className="text-[0.95em] text-gray-500 font-medium">
                                <a href="">Inspiration</a>
                            </li>
                            <li className="text-[0.95em] text-gray-500  font-medium">
                                <a href="/findwork">Find Work</a>
                            </li>
                            <li className="text-[0.95em] text-gray-500  font-medium">
                                <a href="/learndesign">Learn Design</a>
                            </li>
                            <li className="text-[0.95em] text-gray-500  font-medium">
                                <a href="">Go Pro</a>
                            </li>
                            <li className="text-[0.95em] text-gray-500  font-medium">
                                <a href="">Hire Designers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="grid grid-flow-col gap-6">
                            <input
                                type="text"
                                className="bg-gray-100 w-[7em] text-md border rounded outline-0 p-1"
                                placeholder="Search"
                            ></input>
                            <li className="">
                                <a className="" href="">
                                    <img
                                        width="25"
                                        height="15"
                                        src="/Images/mail.svg"
                                    />
                                </a>
                            </li>
                            <p className="bg-blue-700 rounded-3xl p-3 w-[2em] text-white font-medium">
                                C
                            </p>
                            <button
                                type="button"
                                className="bg-pink-500 w-[5em] border text-white  text-sm font-medium rounded-md outline-0 p-1 w-[7em] h-[3em]"
                            >
                                {' '}
                                Upload
                            </button>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Template;
