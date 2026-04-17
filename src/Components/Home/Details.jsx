import { Archive, BellMinus, MessageSquareMore, Phone, Trash2, Video } from 'lucide-react';
import React, { use, useContext } from 'react';
import { useParams } from 'react-router';
import { TimeContext } from '../../ContextProvider';


const detailsPromise=fetch('/Data.json').then(res=>res.json());

const Details = () => {
    const details=use(detailsPromise);

    const {id}=useParams();

    const expectDetails=details.find(detail=>detail.id==id);

    const {handleCalling, handleMessaging, handleVideo,handleDate}=useContext(TimeContext);

    const statusColor =
     expectDetails.status === "overdue"
    ? "bg-red-600 text-white"
    : expectDetails.status === "almost due"
    ? "bg-yellow-400 text-white"
    : "bg-green-900 text-white";
    
    return (
        <div className='max-w-11/12 mx-auto mt-7'>
            <div className='grid grid-cols-1 md:grid-cols-5  gap-3'>

                <div className='col-span-4 md:col-span-2 row-span-4 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] p-4 rounded-lg'>
                   <img src={expectDetails.picture} alt="" className='rounded-full w-13 mx-auto'/>
                   <h2 className='text-center text-2xl font-semibold mt-2'>{expectDetails.name}</h2>
                   <div className='flex gap-3 justify-center my-3'>
                    {
                    expectDetails.tags.map((tag,index)=>(<p key={index} className='bg-green-100 text-green-800 px-2 rounded-full text-center '>{tag}</p>))
                   }
                   </div>
                   <p className={`px-2 rounded-full text-center ${statusColor} w-24 mx-auto`}>{expectDetails.status}</p>
                   <p className='text-center text-gray-600'>{expectDetails.bio}</p>
                   <p className='text-center text-sm md:text-base text-gray-800 font-medium'>{expectDetails.email}</p>
                </div>

                <div className='col-span-4 md:col-span-1 row-span-2 rounded-lg  bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] '>
                    <div className='my-auto p-5'>
                   <h3 className='text-center mb-5 text-2xl font-semibold'>{expectDetails.days_since_contact}</h3>
                   <p className='text-center font-medium text-gray-800'>Days Since Contact</p>
                   </div>
                </div>

                <div className='col-span-4 md:col-span-1 row-span-2 rounded-lg  bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]'>
                     <div className='my-auto p-5'>
                    <h3 className='text-center mb-5 text-2xl font-semibold text-gray-800'>{expectDetails.goal}</h3>
                   <p className='text-center font-medium'>Goal (Days)</p>
                   </div>
                </div>
                <div className='col-span-4 md:col-span-1 row-span-2 rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]'>
                    <div className='my-auto p-5'>
                     <h3 className='text-center mb-5 text-2xl font-semibold text-gray-800'>{expectDetails.next_due_date}</h3>
                   <p className='text-center font-medium'>Next Due</p>
                   </div>
                </div>
                <div className='col-span-4 md:col-span-3 row-span-2 rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] p-4'>
                    <div className='flex justify-between'>
                      <p className=' font-semibold'>Relationship Goal</p>
                    <button className='btn'>Edit</button>
                    </div>
                    <p>Contact Everey <span className='text-xl font-semibold'>30days</span></p>
                </div>
                <div className='col-span-4 md:col-span-2 row-span-1 rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] p-3'>
                      <h3 className='flex gap-2 font-medium justify-center'><BellMinus></BellMinus>Snooze 2 weeks</h3>
                </div>
                <div className='col-span-4 md:col-span-3 row-span-3 rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] p-5'>
                     <p className='font-medium mb-2'>Quick Check-In</p>
                     <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                       <div onClick={()=>{
                        handleCalling(expectDetails);
                        handleDate();
                        }} className='bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.15)] px-22 py-7'>
                            <Phone></Phone>
                            <p>Call</p>
                        </div>
                       <div onClick={()=>{
                        handleMessaging(expectDetails);
                        handleDate();
                        }} className='bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.15)] px-22 py-7'>
                            <MessageSquareMore></MessageSquareMore>
                            <p>Text</p>
                        </div>
                       <div onClick={()=>{handleVideo(expectDetails);
                        handleDate();
                       }} className='bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.15)] px-22 py-7'>
                           <Video></Video>
                          <p>Video</p>
                            
                        </div>
                     </div>
                </div>

                <div className='col-span-4 md:col-span-2 row-span-1 rounded-lg  bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] p-3'>
                    <h3 className='flex gap-2 font-medium justify-center'><Archive></Archive>Archive</h3>
                     
                </div>
                <div className='col-span-4 md:col-span-2 row-span-1 rounded-lg  bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] p-3'>
                     <h3 className='flex gap-2 font-medium justify-center text-red-600'><Trash2></Trash2>Delete</h3>
                </div>
            </div>
        </div>
    );
};

export default Details;