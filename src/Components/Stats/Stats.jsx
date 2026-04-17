import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimeContext } from '../../ContextProvider';
import { TriangleAlert } from 'lucide-react';

const Stats = () => {
  const {calling,messaging,videos,}=useContext(TimeContext);
    const data = [
  { name: 'Text', value: messaging.length, fill: '#0088FE' },
  { name: 'Call ', value:calling.length, fill: '#00C49F' },
  { name: 'Video', value: videos.length, fill: '#FFBB28' },

];

  const noData =
    calling.length === 0 &&
    messaging.length === 0 &&
    videos.length === 0;


    return (
                
               
  
     

        <div className='max-w-10/12 mx-auto  mt-7'>
            <h2 className='text-3xl font-bold my-7'>Friendship Analytics</h2>
            <div className=' bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] rounded-xl p-13'>
                <p className='font-medium'>By Interaction Type</p>
               
                {noData ? (
                <div className='bg-gray-100 rounded-xl p-8 mt-5'>
              <h3 className='text-3xl font-bold text-center'>No Stats Availavle</h3>
              <p className='text-lg font-semibold text-center text-gray-500 mt-3 mb-4'>Please Select a Friend</p>
              <TriangleAlert className='mx-auto mb-4 '> </TriangleAlert>
              </div>
                ):

                (<div className='flex justify-center'>
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
           </div>)}

    </div>
        </div>
    );
};

export default Stats;