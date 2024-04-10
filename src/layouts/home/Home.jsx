import { Helmet } from "react-helmet-async";
import Estates from "../estates/Estates";
import Header from "../header/Header";

const HOme = () => {
    return (
        <div className="max-w-[1140px] mx-auto">
            <Helmet>
                <title>IndusHive | Home</title>
            </Helmet>
            <Header></Header>
            <Estates></Estates>
        </div>
    );
};

export default HOme;