import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimeContext } from '../../ContextProvider';

const Stats = () => {
  const {calling,messaging,videos,}=useContext(TimeContext);
    const data = [
  { name: 'Text', value: messaging.length, fill: '#0088FE' },
  { name: 'Call ', value:calling.length, fill: '#00C49F' },
  { name: 'Video', value: videos.length, fill: '#FFBB28' },

];

    return (
        <div className='max-w-10/12 mx-auto  mt-7'>
            <h2 className='text-3xl font-bold my-7'>Friendship Analytics</h2>
            <div className=' bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] rounded-xl p-13'>
                <p className='font-medium'>By Interaction Type</p>
                <div className='flex justify-center'>
         <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '70vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      
     <Legend ></Legend>
     <Tooltip></Tooltip>
    </PieChart>
    </div>
    </div>
        </div>
    );
};

export default Stats;