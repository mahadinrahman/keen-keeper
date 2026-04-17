import React, { useContext, useState } from 'react';
import { TimeContext } from '../../ContextProvider';
import TimelineCall from './TimelineCall';
import TimelineMessage from './TimelineMessage';
import TimelineVideo from './TimelineVideo';

const Timeline = () => {
    const [filtering,setFiltering]=useState("");
    const {calling,messaging, videos}=useContext(TimeContext);
    
    let filteeredCalling=[];
    let filteredMessage=[];
    let filteredVideos=[];
    

   if(filtering==="call"){
      
    filteeredCalling=calling;
   }
   else if(filtering==="text"){
     
     filteredMessage=messaging;
   }
   else if(filtering==="video"){
     
     filteredVideos=videos;
   }
   else{
    filteeredCalling=calling;
    filteredMessage=messaging;
     filteredVideos=videos;
   }

    return (
        <div className='max-w-9/12 mx-auto mt-13'>
            <h3 className='text-4xl font-bold text-green-900'>Timeline</h3>

            <select onChange={(event)=>setFiltering(event.target.value)} defaultValue="Pick a color" className="select mt-5">
              
            <option disabled={true}>Filter Timeline</option>
            <option  value="">All Timeline</option>
            <option  value="text">Text</option>
            <option  value="call">Call</option>
            <option  value="video">Video</option>
            </select>

            <div>
                {
                   filteeredCalling.map((call,index)=><TimelineCall key={index} call={call}></TimelineCall>)
                }
                {
                 filteredMessage.map((message,index)=><TimelineMessage key={index} message={message}></TimelineMessage>)
                }
                {
                   filteredVideos.map((video,index)=><TimelineVideo  key={index} video={video}></TimelineVideo>)
                }

            </div>
        </div>
    );
};

export default Timeline;