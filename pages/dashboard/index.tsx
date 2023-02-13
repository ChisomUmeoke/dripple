import React from 'react';
import Link from 'next/link';
import Template from '../../components/Template';
import Designs from '../../components/Designs';

const Dashboard = () => {
    const CardDetails = [
        {
            id: '1',
            option: 'No',
            imgUrl: 'https://res.cloudinary.com/https-www-farmz2u-com/image/upload/v1660645254/no-farming-experience_xbhtco_fy241h.svg'
        },
        {
            id: '2',
            option: 'Yes, for less than 3years',
            imgUrl: 'https://res.cloudinary.com/https-www-farmz2u-com/image/upload/v1660645251/less-than-3-years_kej4uw_kefbe8.svg'
        },
        {
            id: '3',
            option: 'Yes, for more than 3years',
            imgUrl: 'https://res.cloudinary.com/https-www-farmz2u-com/image/upload/v1660645262/Yes-more-than-3-years_grwlrz_wzngwz.svg'
        }
    ];

    return (
        <>
            <Template />
            <div className="grid">
                <div className="flex justify-between p-4 mt-9 mx-8 px-10">
                    <div>
                        <ul className="grid grid-flow-col gap-8 overscroll-contain">
                            <select className="w-[7em] py-2 h-[2.5em] bg-white text-gray-500 rounded-md border border-1 border-gray-200 outline-0">
                                <option className="mb-4">Following</option>
                                <option className="mb-4">Popular</option>
                                <option className="mb-4">
                                    New & NoteWorthy
                                </option>
                                <option>Marketplace</option>
                            </select>
                            <li className="text-[0.90em] text-gray-500 ">
                                <a href="">Discover</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500">
                                <a href="">Animation</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500 ">
                                <a href="">Branding</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500">
                                <a href="">Illustration</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500">
                                <a href="">Mobile</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500">
                                <a href="">Print</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500">
                                <a href="">Typography</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500  ">
                                <a href="">Product Design</a>
                            </li>
                            <li className="text-[0.90em] text-gray-500 ">
                                <a href="">Web design</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="grid grid-flow-col gap-6">
                            <button
                                type="button"
                                className="bg-pink-500 w-[5em] border text-white  text-sm font-medium rounded outline-0 p-2"
                            >
                                {' '}
                                Upload
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid gap-2">
                <h2 className="text-center font-bold text-[2.15em]">
                    You aren’t following anyone yet
                </h2>
                <p className="text-center text-sm mb-5">
                    <span className="text-pink-500">Find friends </span>you
                    already know from Twitter.
                </p>
            </div>
            <div>
                <p className="text-center font-bold mt-9">
                    Check out some of today’s popular shots
                </p>
            </div>

            <Designs />
        </>
    );
};

export default Dashboard;
