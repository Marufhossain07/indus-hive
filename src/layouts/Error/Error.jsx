import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex mt-[15%] text-center justify-center">
          <div>
          <h1 className="text-red-600 text-3xl">Oops!</h1>
          <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
          <p className="text-[150px]">404</p>
          <Link to="/"><button className="btn">Go Home</button></Link>
          </div>
        </div>
      );
    }

export default Error;