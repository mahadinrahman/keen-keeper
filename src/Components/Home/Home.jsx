import React, { use } from 'react';
import Cards from './Cards';

const dataPromise=fetch("/Data.json").then(res=>res.json());

const Home = () => {
    const datas=use( dataPromise);

    return (
        <div className='max-w-11/12 mx-auto'>
            <h2 className='text-4xl font-bold text-green-900 text-center mt-10 mb-4'>Friends to keep close in your life</h2>
            <p className='text-center '>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
         relationships that matter most.</p>
          <button className='btn bg-emerald-900 text-mist-100 block mx-auto my-9'>+ Add a Friend</button>
        
        <div className='grid grid-cols-2 md:grid-cols-4 justify-center gap-2 md:gap-5 '>
            <div className='bg-white text-center rounded-xl p-9 shadow-[0_10px_25px_rgba(0,0,0,0.15)] w-45 md:w-70'>
                <p className='text-2xl font-semibold'>8</p>
                <p className='text-center'>Total Friends</p>
            </div>
            <div className='bg-white text-center rounded-xl p-9 shadow-[0_10px_25px_rgba(0,0,0,0.15)] w-45 md:w-70'>
                <p className='text-2xl font-semibold'>3</p>
                <p className='text-center'>On Track</p>
            </div>
            <div className='bg-white text-center rounded-xl p-9 shadow-[0_10px_25px_rgba(0,0,0,0.15)] w-45 md:w-70'>
                <p className='text-2xl font-semibold'>5</p>
                <p className='text-center'>Need Attention</p>
            </div>
            <div className='bg-white text-center rounded-xl p-9 shadow-[0_10px_25px_rgba(0,0,0,0.15)] w-45 md:w-70'>
                <p className='text-2xl font-semibold'>7</p>
                <p className='text-center'>Interactions This Month</p>
            </div>
            
        </div>

        <h3 className='text-2xl font-bold mt-9 py-6 border-t-2 border-gray-300'>Your Friends</h3>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 m'>
           {
             datas.map((data,index)=>(<Cards data={data} key={index}></Cards>))
           }
           </div>
        
        
        </div>
 );
};

export default Home;