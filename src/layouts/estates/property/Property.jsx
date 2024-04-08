import { Link } from "react-router-dom";

const Property = ({p}) => {
    const {id,title, segment,price,status, image, area,} = p;
    return (
        <div>
            <div className="card h-full bg-base-100 border border-orange-300 shadow-orange-200 shadow-xl">
                <figure className="px-5 pt-5">
                    <div className="relative">
                    <img src={image} alt="" className="rounded-xl h-60" />
                    <h3 className="absolute z-30 text-white font-inter font-bold  text-lg bg-orange-400  top-0 px-3 right-0 uppercase">For {status}</h3>
                    </div>
                </figure>
                <div className="card-body font-inter">
                    <h2 className="card-title font-pop">{title}</h2>
                    <p>{segment}</p>
                    
                    <p>Area : {area}</p>
                    <div className="card-actions items-center">
                        <p className="font-medium">Price : {price}</p>
                        <Link to={`/property/${id}`}><button className='btn font-inter py-2 px-8 bg-orange-500 border-none text-white'>View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Property;