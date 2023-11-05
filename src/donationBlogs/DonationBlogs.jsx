import { useEffect, useState } from 'react';
import Banner from '../components/banner/Banner';
import DonationCard from './DonationCard';
import { useLoaderData } from 'react-router-dom';

const DonationBlogs = () => {
    //recieve DonationCard Data.........
    const DonationData=useLoaderData();
    const [showData,setShowData]=useState([]);

    useEffect(() => {
        if (Array.isArray(DonationData)) {
            setShowData(DonationData);
        }
    }, [DonationData.length]);
    

    //search data handling...........
    const FilterData=(Data)=>{
        if(Data.length){
            setShowData(Data)
        }else{
            setShowData(DonationData)
            
        }
    }


    
    return (
        <>
            <Banner FilterData={FilterData} DonationData={showData}/>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-20'>
            {
                showData.map(data=><DonationCard key={data.id} DonationData={data}/>)
            }
            </div>
        </>
    );
};

export default DonationBlogs;