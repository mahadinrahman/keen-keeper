import React, { useContext } from 'react';
import { TimeContext } from '../../ContextProvider';
import TimelineCall from './TimelineCall';
import TimelineMessage from './TimelineMessage';
import TimelineVideo from './TimelineVideo';

const Timeline = () => {

    const {calling,messaging, videos,}=useContext(TimeContext);
    
    return (
        <div className='max-w-9/12 mx-auto mt-13'>
            <h3 className='text-4xl font-bold text-green-900'>Timeline</h3>

            <select defaultValue="Pick a color" className="select mt-5">
            <option disabled={true}>Filter Timeline</option>
            <option>All Timeline</option>
            <option>Text</option>
            <option>Call</option>
            <option>Video</option>
            </select>

            <div>
                {
                  calling.map((call,index)=><TimelineCall key={index} call={call}></TimelineCall>)
                }
                {
                  messaging.map((message,index)=><TimelineMessage key={index} message={message}></TimelineMessage>)
                }
                {
                  videos.map((video,index)=><TimelineVideo  key={index} video={video}></TimelineVideo>)
                }

            </div>
        </div>
    );
};

export default Timeline;