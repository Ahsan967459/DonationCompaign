import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const DonationCard = ({DonationData}) => {
    const {picture1,title,category,btn_bg,category_bg,id
    }=DonationData;
    
    
    const navigate=useNavigate();
    const handleDonationCard=()=>{
        
        navigate(`/donationDetails/${id}`)
    }
    

    return (
        <>
            <div onClick={handleDonationCard} className="flex flex-col">
                <img className="h-[260px] md:h-[194px] w-full rounded-t-[8px]" src={picture1} alt={title} />
                <div style={{backgroundColor:category_bg,padding:"16px",flexGrow:"1",borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"}}>
                    <div><span  style={{backgroundColor:btn_bg,padding:"4px 10px",borderRadius: "4px"}}>{title}</span></div>
                    <h2 style={{color:btn_bg,fontSize:"24px",fontWeight:"600",marginTop:"5px"}}>{category}</h2>
                </div>
            </div>
        </>
    );
};

DonationCard.propTypes={
    DonationData: PropTypes.object.isRequired,
}

export default DonationCard;