import { ChartLine, Clock3, House } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className=' shadow-sm'>
           <div className="navbar bg-base-100 max-w-11/12 mx-auto block md:flex">
  <div className="flex-1">
    <a className="btn btn-ghost text-4xl text-green-900 font-bold ">KeenKeeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-3">
      <li><NavLink to={"/"} className={({isActive})=>isActive?"btn bg-emerald-900 text-mist-100":"btn text-emerald-900"}><House></House>Home</NavLink></li>
      <li><NavLink to={"/timeline"} className={({isActive})=>isActive?"btn bg-emerald-900 text-mist-100":"btn text-emerald-900"}><Clock3></Clock3>Timeline</NavLink></li>
      <li><NavLink to={"/stats"} className={({isActive})=>isActive?"btn bg-emerald-900 text-mist-100":"btn text-emerald-900"}><ChartLine></ChartLine>Stats</NavLink></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;