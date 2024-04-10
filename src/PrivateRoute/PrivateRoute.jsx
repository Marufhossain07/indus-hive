import { useContext } from 'react';
import { Providers } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Providers)
    const location = useLocation()
    if(loading){
        return <div className='w-full mt-10 flex justify-center '>
            <span className="loading loading-spinner loading-lg text-warning"></span>
        </div>
        
    }
    if (user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;