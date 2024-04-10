import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import { useLoaderData, useParams } from "react-router-dom";
import '../../index.css'
import 'leaflet/dist/leaflet.css';
const Details = () => {
    const data = useLoaderData()
    const { id } = useParams();
    const parseId = JSON.parse(id)
    const property = data.find(property => property.id == parseId)
    const { title, segment, description, price, status, area, location, facilities, image, latitude, longitude } = property

    return (
        <div className="max-w-[1140px] mx-auto mt-10">
            <div className="bg-orange-200 rounded-t-lg">
                <p className="absolute uppercase font-bold bg-orange-400 py-2 px-5 text-white rounded-tl-lg">For {status}</p>
                <img className="mx-auto" src={image} alt="" />
            </div>
            <div className="bg-orange-400 text-white flex flex-col md:flex-row lg:flex-row gap-5 py-5 items-center px-10 justify-between rounded-b-lg">
                <div className="space-y-2">
                    <p className="font-inter font-medium text-lg">{location}</p>
                    <h3 className="capitalize font-pop text-4xl font-bold">{title}</h3>
                    <p className="font-inter font-medium text-lg">{segment}</p>
                    <p className="text-lg font-inter font-medium">{price}</p>
                </div>
                <div>
                    <button className='btn text-lg font-inter py-2 px-8 bg-white rounded-full border-none text-orange-400'>REQUEST TOUR</button>
                </div>
            </div>
            <h3 className="text-2xl font-semibold my-5">Description </h3>
            <p className=" font-inter">{description}</p>
            <p className="capitalize font-pop text-lg font-medium">Area : {area}</p>
            <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-3'>
                <div>
                <h3 className="text-2xl font-semibold mt-5">Facilites </h3>
                <ul className="list-disc pl-5 pt-2">
                    {facilities.map((facility, idx) => <li className="text-lg font-inter" key={idx}>{facility}</li>)}
                </ul>

                <h3 className="text-2xl font-semibold mt-5">Property Details </h3>
                <div className="flex justify-between gap-5 mt-3">
                    <div>
                        <h3 className="font-pop text-lg font-medium">Property Types</h3>
                        <p className="font-inter">Industrial</p>
                    </div>
                    <div>
                        <h3 className="font-pop text-lg font-medium">Use Types</h3>
                        <p className="font-inter">{segment}</p>
                    </div>
                </div>
                </div>
                <div className=' border-2 border-orange-500 grow'>
                    
                    <MapContainer center={[latitude, longitude]} zoom={9} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[latitude, longitude]}>
                            <Popup>
                                {title}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Details;