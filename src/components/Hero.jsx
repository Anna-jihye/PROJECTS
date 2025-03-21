import React from "react";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Link} from 'react-router-dom';
import {Search, User, ShoppingCart,} from 'lucide-react';

const Hero = ({backgroundImageUrl, children}) => {
    return (
        <div
            //className="hero bg-cover bg-center relative w-full"
            className = "hero bg-cover bg-center relative w-full min-h-[75vh] flex items-center justify-start"
            style={{backgroundImage: `url(${backgroundImageUrl})`}}
        >
            <div className="hero-content w-full relative z-10 text-center bg-black bg-opacity-30 py-20 px-6 rounded-md max-w-[48%] border border-black/30 backdrop-blur-md"> 
                {children}
            </div>
        </div>
    );
};
//div className="hero-children" top of hero-content
export default Hero;