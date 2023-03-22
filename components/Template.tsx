import React from 'react';
import CardDetails from './Designs';
import Image from 'next/image';
import Link from 'next/link';
import ToolTip from './ToolTip';
import FindWork from '../pages/findwork';

const Template = () => {
    return (
        <div className="sm:justify-around">
            <div className="grid">
                <div className="flex bg-white shadow justify-between p-4 mt-3">
                    <div>
                        <ul className="grid grid-flow-col gap-8">
                           <p className='text-md text-pink-500 font-mono overline decoration-wavy'>Dripple</p>
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
                            <img src ="/Images/search.svg" className='mt-1'/>
                            <button
                                type="button"
                                className="border w-[5em] border-pink-500 text-pink-500 text-sm font-medium rounded-md outline-0 p-1  h-[2.5em]"
                            >
                                {' '}
                                Signin
                            </button>
                            <button
                                type="button"
                                className="bg-pink-500 w-[5em] border text-white  text-sm font-medium rounded-md outline-0 p-1  h-[2.5em]"
                            >
                                {' '}
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
