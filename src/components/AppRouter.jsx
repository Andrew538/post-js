import React, { useContext } from 'react';
import { Route, Routes} from 'react-router-dom';
import { AuthContext } from '../context';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import { publicRoutes , privateRoutes } from '../router/routes';
// import Loader from './UI/Loader/Loader';

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    // if(isLoading) {
    //     return <Loader/>
    // }

    return (
        isAuth 
        ? 
        <Routes>
            {privateRoutes.map(route =>                    
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component/>}
                    exact={route.exact}

                /> 

            )}
        <Route path='*' element={<Posts/>}/>  
        </Routes>
        
        : 
   
                <Routes>
        {publicRoutes.map(route => 
            <Route
                key={route.path}
                path={route.path}
                element={<route.component/>}
                exact={route.exact}
            /> 
        )}    

        <Route path='*' element={<Login/>}/> 
    
    
        </Routes>
        
    );
};

export default AppRouter;