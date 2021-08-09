import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { removeError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Hernando',
        email: 'nando@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    };

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Name is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password is not valid'));
            return false;
        }

        dispatch(removeError())
        return true;
    };

    return (
        <div>
            <h3 className='auth__title mb-5'>Register</h3>
            <form className='animate__animated animate__fadeIn animate__faster' onSubmit={handleRegister}>
                {
                    msgError &&
                    <div className='auth__alert-error'>
                        {msgError}
                    </div>
                }
                <input onChange={handleInputChange} value={name} className='auth__input' type='text' placeholder='Name' autoComplete='off' name='name' />
                <input onChange={handleInputChange} value={email} className='auth__input' type='text' placeholder='Email' autoComplete='off' name='email' />
                <input onChange={handleInputChange} value={password} className='auth__input' type='password' placeholder='Password' name='password' />
                <input onChange={handleInputChange} value={password2} className='auth__input' type='password' placeholder='Confirm password' name='password2' />

                <button className='btn btn-primary btn-block mb-5' type='submit'>Register</button>


                <Link className='link' to='auth/login'>Already registered</Link>
            </form>
        </div >
    )
}
