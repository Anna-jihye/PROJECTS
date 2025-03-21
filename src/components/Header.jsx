import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button.jsx";
import { NavLink } from 'react-router-dom';
import { User } from 'lucide-react';
import { supabase } from "@/lib/supabaseClient.js";
import React, { useState, useEffect } from "react";

const text_style = "text-[24px] whitespace-nowrap px-16 text-[#5C8D49] hover:text-[B8E892]";
const text_active = "font-bold text-[32px] text-[#5C8D49]";


const Header = () => {
    const { user, isSignedIn } = useUser();

    const [admin_right, setAdminRight] = useState(null);

    useEffect(() => {
        const saveUserToSupabase = async () => {
            if (isSignedIn && user) {
                const { id, fullName, primaryEmailAddress, phoneNumbers, publicMetadata } = user;

                try {
                    const { error } = await supabase.from('owners').upsert({
                        owner_id: id,
                        name: fullName ? fullName.slice(0, 255) : null,
                        email: primaryEmailAddress?.emailAddress ? primaryEmailAddress.emailAddress.slice(0, 255) : null,
                        phone_number: phoneNumbers[0]?.phoneNumber ? phoneNumbers[0].phoneNumber.slice(0, 255) : null,
                        contact_info: publicMetadata?.contact_info || null
                    }, { onConflict: 'owner_id' });

                    if (error) {
                        console.error("Error saving user to Supabase:", error);
                    } else {
                        console.log("User data saved to Supabase successfully");
                    }

                    const { data: ownerData, error: ownerError } = await supabase
                        .from('owners')
                        .select('is_admin')
                        .eq('owner_id', id)
                        .single();

                    setAdminRight(ownerData.is_admin);

                    console.log("ading right:", admin_right);

                } catch (err) {
                    console.error("Error in saving user:", err);
                }
            }
        };

        saveUserToSupabase();
    }, [isSignedIn, user]);

    return (
        <header id="global-header"
            className="bg-white shadow-md h-[100px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">

            <NavLink to='/' className="flex-shrink-0">
                <img className="h-20 w-auto rounded-lg ml-10" src='/logo.png' alt='logo' />
            </NavLink>

            <nav className="hidden md:flex  items-center justify-center">
                {/* 使用 NavLink 并添加 activeClassName */}
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `flex-1 h-full uppercase ${text_style} items-center ${isActive ? text_active : ''}`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to='/about'
                    className={({ isActive }) =>
                        `flex-1 h-full uppercase ${text_style} items-center ${isActive ? text_active : ''}`
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to='/explore'
                    className={({ isActive }) =>
                        `flex-1 h-full uppercase ${text_style} items-center ${isActive ? text_active : ''}`
                    }
                >
                    <span>Explore</span>
                </NavLink>
                {isSignedIn && admin_right === 0 && (
                    <NavLink
                        to='/mypets'
                        className={({ isActive }) =>
                            `flex-1 h-full uppercase ${text_style} items-center ${isActive ? text_active : ''}`
                        }
                    >
                        My Pets
                    </NavLink>
                )}

                {isSignedIn && admin_right === 1 && (  
                    <NavLink
                    // TODO
                        to='/Admin_page'
                        className={({ isActive }) =>
                            `flex-1 h-full uppercase ${text_style} items-center ${isActive ? text_active : ''}`
                        }
                    >
                        Admin
                    </NavLink>
                )}
            </nav>

            <div className="flex items-center space-x-4 gap-4">
                {isSignedIn ? (
                    <UserButton />
                ) : (
                    <SignInButton mode='modal'>
                        <Button
                            style={{ backgroundColor: 'rgb(41,41,41)' }}
                            className="text-lg px-6 py-3 h-16 mr-10">
                            <User className="h-6 w-6 mr-2 text-xl" />
                            Sign In
                        </Button>
                    </SignInButton>
                )}
            </div>

        </header>
    );
}

export default Header;