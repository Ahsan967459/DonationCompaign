import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllDonateBlog from "./AllDonateBlog";


const Donation = () => {
    const[selectedBlogs,setSelectedBlogs]=useState([]);
    const [dataLength,setdataLength]=useState(4);

    const BlogsData=useLoaderData();
    useEffect(() => {
        const getLocalStorageData = JSON.parse(localStorage.getItem("selectdata"));
        if (getLocalStorageData) {
            const selectedData = BlogsData.filter(data => getLocalStorageData.includes(data.id));
            setSelectedBlogs(selectedData);
        }
    }, []);
    
    
    return (
       <div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
                {
                selectedBlogs!=0 ?  selectedBlogs.slice(0,dataLength).map((blog,idx)=><AllDonateBlog key={idx} DonateData={blog}/>) : <div className="h-screen w-full md:col-span-2 flex justify-center items-center text-3xl fondt-semibold md:font-bold">
                    <p className="mb-[300px]">You did not donate!!</p>
                
               </div>
                   
                }
            
            </div>
            <div className="text-center mt-4">
                <button className={`${dataLength===selectedBlogs.length || selectedBlogs.length<=4 ? 'hidden':""} p-3 px-6 bg-blue-600 rounded text-white font-semibold`} onClick={()=>setdataLength(selectedBlogs.length)}>See All</button>
            </div>

        </div>
    );
};

export default Donation;