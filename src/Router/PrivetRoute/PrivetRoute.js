import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
const PrivetRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return (
            <div className='h-[60vh] flex items-center justify-center'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black dark:border-violet-400"></div>
            </div>
        )
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};
export default PrivetRoute;