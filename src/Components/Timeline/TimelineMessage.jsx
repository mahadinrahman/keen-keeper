import { MessageSquareMore, PhoneCall, Video } from 'lucide-react';
import React, { useContext } from 'react';
import { TimeContext } from '../../ContextProvider';

const TimelineMessage = ({message}) => {

   const {date}=useContext(TimeContext);

    return (
        <div>
           
            <div className='flex gap-2 p-5 bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.15)] my-5'>
               
                   <MessageSquareMore  className='my-auto'></MessageSquareMore>
                   <div>
                    <p className='font-medium'>Text With {message.name}</p>
                    <p className='font-medium'>{date}</p>
                    </div>

            </div>
           
        </div>
    );
};

export default  TimelineMessage ;