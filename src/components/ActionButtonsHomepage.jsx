import { Link } from 'react-router-dom'
import { PawPrint, Calendar, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Search, User } from 'lucide-react';

export default function Component() {
    const { user, isSignedIn } = useUser();

    const handleConsultClick = (e) => {
        if (!isSignedIn) {
            // 阻止默认跳转行为，并显示登录按钮
            e.preventDefault();
            document.getElementById('signInModalButton').click();
        }
    };

    const buttonStyle = "flex items-center justify-center w-full h-16 rounded-full border border-gray-300";

    return (
        // <div className="flex flex-col sm:flex-row justify-between gap-4 max-w-4xl mx-auto px-4">
        //     <Link to={isSignedIn ? "/create_pet" : "#"} className="flex-1" onClick={handleConsultClick}>
        //         <Button variant="outline" className={buttonStyle}>
        //             <PawPrint className="mr-2 h-4 w-4" />
        //             Register your pet
        //         </Button>
        //     </Link>
        //     <Link to={isSignedIn ? "/survey" : "#"} className="flex-1" onClick={handleConsultClick}>
        //         <Button variant="outline" className={buttonStyle}>
        //             <Calendar className="mr-2 h-4 w-4" />
        //             Book a non-urgent consult
        //         </Button>
        //     </Link>
        //     <Link to="/survey" className="flex-1">
        //         <Button variant="outline" className={buttonStyle}>
        //             <AlertCircle className="mr-2 h-4 w-4" />
        //             I have an immediate concern
        //         </Button>

        <div className="flex flex-col sm:flex-row justify-between gap-10 max-w-4xl mx-auto px-5 py-5">

            <Link to={isSignedIn ? "/mypets" : "#"} onClick={handleConsultClick}>
                <button className="w-full flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
                    <img
                        src="/registerpets.svg"
                        alt="Register your pet"
                        className="w-8 h-auto mx-2"
                    />
                    <h3 className="text-[1.38rem] font-semibold whitespace-nowrap mr-2">Register your pet</h3>
                </button>
            </Link>

            <Link to={isSignedIn ? "/survey" : "#"} onClick={handleConsultClick}>
                <button className="w-full flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
                    <img
                        src="/non-urgent.svg"
                        alt="Book a non-urgent consult"
                        className="w-8 h-auto mx-2"
                    />
                    <h3 className="text-[1.38rem] font-semibold whitespace-nowrap mr-2">Non-urgent consult</h3>
                </button>
            </Link>

            <Link to="/survey">
                <button className="w-full flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100 hover-red transition-all">
                    <img
                        src="/urgent.svg"
                        alt="I have an immediate concern"
                        className="w-8 h-auto mx-2"
                    />
                    <h3 className="text-[1.38rem] text-red-500 font-semibold whitespace-nowrap mr-2">Urgent consult</h3>
                </button>
            </Link>

            {/* SignInButton 组件 */}
            <SignInButton mode="modal">
                <Button id="signInModalButton" className="hidden">
                    <User className="h-5 w-5 mr-2" />
                    Sign In
                </Button>
            </SignInButton>
        </div>
    );
}