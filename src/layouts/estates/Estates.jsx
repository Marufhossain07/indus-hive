import Properties from "./properties/Properties";

const Estates = () => {
    return (
        <div className="font-pop mt-14">
            <h3 data-aos="fade-right" data-aos-duration='1000'  className="text-4xl border-l-2 border-orange-400 pl-5 font-semibold mb-5">Estate</h3>
            <p data-aos="fade-right" data-aos-duration='1000' data-aos-delay='1000' className="font-inter font-medium">Dive into our array of industrial estates, meticulously crafted to meet varied business demands. <br /> From dynamic warehouses to eco-friendly power plants, discover the perfect space for your operations.</p>
            <div>
                <Properties></Properties>
            </div>
        </div>
    );
};

export default Estates;