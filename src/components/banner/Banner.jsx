import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Banner = ({FilterData,DonationData}) => {
    //take searche input....
    const [searcheText,setSearcheText]=useState("");
    const [searcheData,setSearcheData]=useState([]);
    
    //take searche input..............
    const handleInputChange=(e)=>{
        e.preventDefault();
        const inputFieldTxt=e.target.value;

             setSearcheText(inputFieldTxt.toLowerCase());
    };

    useEffect(() => {
        if (Array.isArray(DonationData)) {
          const filteredData = DonationData.filter(
            (data) => data.title.toLowerCase().includes(searcheText.toLowerCase())
          );
          setSearcheData(filteredData);
        }
      }, [searcheText]);
      




 
    return (
        <div>
         
         <div className="h-[200px] md:h-[370px] lg:h-[600px]  bg-donation bg-center bg-no-repeat bg-cover bg-red-600 flex items-center justify-center relative mt-2">
         <div className="absolute inset-0 bg-opacity-75 bg-white"></div>
            <div className="absolute">
                <h2 className="sm:text-2xl md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h2>    
                <div className="text-center mt-5">
                    <input className="w-[180px] md:w-[260px] lg:w-[360px]  p-1 md:p-2 rounded-l-md"
                        type="text"
                        placeholder="Search....."
                        onChange={handleInputChange} />
                    <button className="bg-[#FF444A] p-1 md:p-2 md:w-20 rounded-r-md"
                        onClick={ ()=>FilterData(searcheData)}>Search</button>

                </div>
             </div>
          </div>


        </div>
    );
};

Banner.propTypes={
    FilterData: PropTypes.func,
    DonationData:PropTypes.array
}

export default Banner;