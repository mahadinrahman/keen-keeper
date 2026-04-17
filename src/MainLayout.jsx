import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router';
import Home from './Components/Home/Home';
import Timeline from './Components/Timeline/Timeline';
import Stats from './Components/Stats/Stats';
import Footer from './Components/Footer';

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>

           <Outlet>
           <Home></Home>
           <Timeline></Timeline>
           <Stats></Stats>
           </Outlet>
           
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;