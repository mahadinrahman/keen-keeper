import { MessageSquareMore, PhoneCall, Video } from 'lucide-react';
import React, { useContext } from 'react';
import { TimeContext } from '../../ContextProvider';

const TimelineVideo = ({video}) => {

   const {date}=useContext(TimeContext);

    return (
        <div>
            
           <div className='flex gap-2 p-5 bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.15)] my-5'>
               
                    <Video  className='my-auto'></Video>
                   <div>
                    <p className='font-medium'>Video With {video.name}</p>
                    <p className='font-medium'>{date}</p>
                    </div>

            </div>
        </div>
    );
};

export default TimelineVideo;