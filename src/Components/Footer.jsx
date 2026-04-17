import React from 'react';
import insta from "../assets/instagram.png";
import fb from "../assets/facebook.png"
import twitter from "../assets/twitter.png"

const Footer = () => {
    return (
        <div className='bg-[#1A8862] p-9 mt-9'>
            <div className=' max-w-11/12 mx-auto '>
                <h1 className='text-4xl font-bold  text-white text-center'>KeenKeeper</h1>
                <p className='text-gray-200 text-center my-2'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-white font-semibold text-center'>Social Links</p>
                <div className='flex gap-2 justify-center mt-4 border-b-1 pb-5 border-gray-400'>
                    <img src={insta} alt="" />
                    <img src={fb} alt="" />
                    <img src={twitter} alt="" />
                </div>
                <div className='flex justify-between mt-4 mb-3'>
                    <p className='text-gray-200'><small>© 2026 KeenKeeper. All rights reserved.</small></p>
                    <div className='flex gap-5'>
                        <p className='text-gray-200'><small>Privacy Policy</small></p>
                        <p className='text-gray-200'><small>Terms of Service</small></p>
                        <p className='text-gray-200'><small>Cookies</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;