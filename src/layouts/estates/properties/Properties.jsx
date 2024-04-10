import { useEffect, useState } from "react";
import Property from "../property/Property";

const Properties = () => {
    const [property,setProperty] = useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data => setProperty(data))
    },[])
    return (
        <div  className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                property.map(p => <Property key={p.id} p={p}></Property>)
            }
        </div>
    );
};

export default Properties;