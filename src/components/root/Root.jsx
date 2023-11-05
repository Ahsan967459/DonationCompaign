import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../navbar/Navbar";


const Root = () => {

    const navigation=useNavigation();

    return (
        <>

            <section className="mx-2 md:container md:mx-auto">
                <Navbar />
               {
                navigation.state==="loading" ? 
                <div className="h-screen w-full flex justify-center items-center "> <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-error"></span> </div>
                :
                <Outlet/>
               }
            </section>
        </>

    );
};

export default Root;