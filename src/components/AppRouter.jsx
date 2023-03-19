import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
// import About from '../pages/About';
// import Error from '../pages/Error';
// import PostIdPage from '../pages/PostIdPage';
// import Posts from '../pages/Posts';
import { publicRoutes , privateRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)
    if(isLoading) {
        return <Loader/>
    }

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
         <Route path="*" element={<Posts/>}/>  
        
        
        



            {/* <Route path="/about" element={<About/>}/>
            <Route path="/post" element={<Posts/>}/> 
            <Route path="/post/:id" element={<PostIdPage/>}/>  */}

            {/* <Route path="*" element={<Error/>}/> */}
        </Routes>




        : <Routes>
   

        {publicRoutes.map(route => 
            <Route
                key={route.path}
                path={route.path}
                element={<route.component/>}
                exact={route.exact}
            /> 
        )}    



            {/* <Route path="/about" element={<About/>}/>
            <Route path="/post" element={<Posts/>}/> 
            <Route path="/post/:id" element={<PostIdPage/>}/>  */}

             <Route path="*" element={<Login/>}/> 
      </Routes>
    
        
        
    );
};

export default AppRouter;