import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const AllDonateBlog = ({DonateData}) => {
    const {picture1,title,category,id,price,category_bg,btn_bg,card_bg,text_cl,title_bg}=DonateData;
    
    const navigate=useNavigate();
    const handleViewDetails=()=>{
        navigate(`/donationDetails/${id}`)
    }

    return (
        <div style={{backgroundColor:card_bg, display:"flex", alignItems:"center",borderRadius:"8px"}}>
            <div className='w-[50%] lg:w-[43%]'>
                <img className='h-[200px] lg:h-[230px] rounded-l-lg' src={picture1} alt="donate image" />
            </div>
            <div style={{padding:"16px", display:"flex" , flexDirection: "column", justifyContent: "space-between", height:"100%",  }}>
                <p style={{backgroundColor:title_bg,color:text_cl, padding:"2px", textAlign:"center", width:"79px",borderRadius:"4px"}}>{title}</p>
                <h2 className='text-2xl font-semibold'>{category}</h2>
                <p style={{color:category_bg,fontWeight:500}}>${price}</p>
                <button onClick={handleViewDetails} style={{background:category_bg,width:"112px", padding:"6px",borderRadius:"4px",color:btn_bg, fontWeight:500}}>View Details</button>
            </div>

        </div>
    );


};

AllDonateBlog.propTypes={
    DonateData:PropTypes.object
}

export default AllDonateBlog;