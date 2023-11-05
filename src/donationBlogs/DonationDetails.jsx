import { useLoaderData, useParams } from "react-router-dom";
import { StoreDonateData } from "./LocalStorage";
import toast, { Toaster } from 'react-hot-toast';

const DonationDetails = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const getDonate=data.find(getData=>getData.id==id);
    const {picture1,category_bg,btn_bg,price,description,title
    }=getDonate;

    const notify = () =>{
      StoreDonateData(id)
      toast.success(`$${price} money was succesfully donate ${title} sector`, {
        style: {
          fontSize:"16px",
          border: '3px solid red',
          backgroundColor:"green",
          padding: '18px',
          color: 'white',
          fontWeight:"500"
        },
        iconTheme: {
          primary: 'white',
          secondary: '	#008000',
        },
      });
      
    }

    return (
        <div className="mt-3">
           <div className="relative">
                <img className="w-full h-[270px] md:h-[420px] lg:h-[580px]" src={picture1} alt="Donation image" />
                <div style={{backgroundColor:"rgba(0, 0, 0, 0.5)",width:"100%",position:"absolute",bottom:'0px',padding:"22px"}}>
                    <button onClick={notify} style={{backgroundColor:category_bg,color:btn_bg,padding: "13px 24px",borderRadius:"5px"}}>Donate ${price}</button>
                    <Toaster/>
                </div>
           </div>
          <p className="mt-12">
            {description}
          </p>

        </div>
    );
};

export default DonationDetails;