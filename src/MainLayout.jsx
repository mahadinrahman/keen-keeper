import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router';
import Home from './Components/Home/Home';
import Timeline from './Components/Timeline/Timeline';
import Stats from './Components/Stats/Stats';
import Footer from './Components/Footer';
import { Suspense } from 'react';

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>

           <Suspense fallback={<span className="loading loading-spinner text-primary mt-5 ml-50 md:ml-150"></span>}>
           <Outlet>
           <Home></Home>
           <Timeline></Timeline>
           <Stats></Stats>
           </Outlet>
           </Suspense>
           
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;
