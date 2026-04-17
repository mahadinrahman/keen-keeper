import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const TimeContext=createContext();

const ContextProvider = ({children}) => {

    const [calling,setCalling]=useState([]);

    const handleCalling=(currentCall)=>{

        const isExistCalling=calling.find(call=>call.id===currentCall.id);
    if(!isExistCalling){
        setCalling([...calling,currentCall]);
        toast.success('Calling...')
    }
   }

    const [messaging,setMessaging]=useState([]);

    const handleMessaging=(currentMessage)=>{

        const isExistMessaging=messaging.find(message=>message.id===currentMessage.id);
    if(!isExistMessaging){
        setMessaging([...messaging,currentMessage]);
        toast.success('Messaging...')
    }
   }

    const [videos,setVideos]=useState([]);

    const handleVideo=(currentVideo)=>{

        const isExistVideo=videos.find(video=>video.id===currentVideo.id);
    if(!isExistVideo){
        setVideos([...videos,currentVideo]);
        toast.success('Video Calling...')
    }
   }

   const [date,setDate]=useState("");
   
      const handleDate=()=>{
        const currentDate=new Date();
       setDate(currentDate.toLocaleDateString());
      }

    const data={
        calling,
        setCalling,
        handleCalling,
        messaging,
        setMessaging,
        handleMessaging,
        videos,
        setVideos,
        handleVideo,
        date,
        setDate,
        handleDate,
        }

    return (
        <div>
            <TimeContext.Provider value={data}>
                {children}
            </TimeContext.Provider>
        </div>
    );
};

export default ContextProvider;