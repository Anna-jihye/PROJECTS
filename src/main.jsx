import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ClerkProvider} from '@clerk/clerk-react'

import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '@/pages/home.jsx';
import Survey from '@/pages/survey.jsx';
import ThreeOptions from '@/pages/threeOptions.jsx';
import About from '@/pages/about.jsx';
import Explore from '@/pages/explore.jsx';
// import Create_pet from '@/pages/create_pet.jsx';
// import UserProfile from '@/pages/UserProfile.jsx';
import PetsProfile from '@/pages/PetsProfile.jsx';
import Appointments from '@/pages/Appointments.jsx';
import HelpCenter from '@/pages/helpcenter.jsx';
import Admin_page from '@/pages/Admin_page.jsx';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/survey',
        element: <Survey/>
    },
    {
        path: '/survey_result',
        element: <ThreeOptions/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/explore',
        element: <Explore/>
    },
    {
        path: '/Admin_page',
        element: <Admin_page/>
    },
    // {
    //     path: '/profile',
    //     element: <UserProfile />
    // },
    {
        path: '/mypets', 
        element: <PetsProfile />
    },
    {
        path: '/Appointments',
        element: <Appointments />
    },
    {
        path: '/HelpCenter',
        element: <HelpCenter />
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <RouterProvider router={router}/>
        </ClerkProvider>
    </StrictMode>,
)
