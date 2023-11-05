

const StoreDonateData=(id)=>{
    const localData = localStorage.getItem("selectdata");
    
    // Parse the existing data as an array (or initialize an empty array)
    const data = localData ? JSON.parse(localData) : [];
    
    // Add the new data to the array
    const UpdateData=[...data,parseInt(id)];

    // Store the updated data in local storage
    localStorage.setItem("selectdata", JSON.stringify(UpdateData));

}

export {StoreDonateData};