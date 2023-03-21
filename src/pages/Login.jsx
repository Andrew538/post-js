import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
    const { setIsAuth} = useContext(AuthContext);
    const login = e => {
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div className='loginBox'>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Введдите логин'></MyInput>
                <MyInput type="password" placeholder='Введите пароль'></MyInput>
                <MyButton >Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;