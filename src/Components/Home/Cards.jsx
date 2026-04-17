import React from 'react';
import { Link } from 'react-router';

const Cards = ({data}) => {
    
    const statusColor =
  data.status === "overdue"
    ? "bg-red-600 text-white"
    : data.status === "almost due"
    ? "bg-yellow-400 text-white"
    : "bg-green-900 text-white";

    return (
       <Link to={`/details/${data.id}`}>
            <div className='bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] py-7 p-4 rounded-xl'>
                <img src={data.picture} alt="" className='rounded-full w-23 mx-auto'/>
                <h3 className='text-center text-2xl font-semibold mt-2'>{data.name}</h3>
                <p className='text-center'>{data.days_since_contact}d ago</p>
                <div className='flex gap-3 justify-center my-3'>
                {
                    data.tags.map((tag,index)=>(<p key={index} className='bg-green-100 text-green-800 px-2 rounded-full text-center '>{tag}</p>))
                }
                </div>
                <p className={`px-2 rounded-full text-center ${statusColor} w-24 mx-auto`}>{data.status}</p>

            </div>

        </Link>
    );
};

export default Cards;