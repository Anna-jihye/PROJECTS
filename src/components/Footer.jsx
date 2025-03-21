import React from "react";
import {ChevronsUp} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="relative mx-auto max-w-screen-xl px-4 py-15 sm:px-6 lg:px-8 lg:pt-24 mb-10">
                <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        style={{ backgroundColor: 'rgb(159, 209, 119)' }}
                        className="inline-block rounded-full bg-600 p-2 text-white shadow transition hover:bg-500 sm:p-3 lg:p-4"
                        href="#global-header"
                    >
                        <span className="sr-only">Back to top</span>

                        <ChevronsUp/>
                    </a>
                </div>

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-teal-600 lg:justify-start">
                            <img className="h-20 w-auto rounded-lg" src='/logo.png' alt='logo'/>
                        </div>

                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            This website is a graduation design project for COMP9900, Term 3, 2024, UNSW Sydney.
                        </p>
                        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                            It is not a real website.
                        </p>
                    </div>

                    <ul
                        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                    >
                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> GitHub Repo </a>
                        </li>

                        <li>
                            <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Contact Team
                                Members </a>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                    Copyright &copy; 2024. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;