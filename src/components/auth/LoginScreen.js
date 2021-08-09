import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

export const LoginScreen = () => {

    // dar acceso al dispatch para ejecutar las acciones
    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui);
    console.log(loading)
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const [formValues, handleInputChange] = useForm({
        email: "nando@gmail.com",
        password: "123456",

    });
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password))

    }
    return (
        <div>
            <h3 className='auth__title mb-5'>Login</h3>
            <form className='animate__animated animate__fadeIn' onSubmit={handleLogin} >

                <input
                    className='auth__input'
                    type='text'
                    placeholder='Ema il'
                    autoComplete='off'
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className='auth__input'
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                />
                <button disabled={loading} className='btn btn-primary btn-block' type='submit'>Login</button>

                <div className='auth__social-networks'>
                    <p>Login with social networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className='link' to='/auth/register'>Create new account</Link>
            </form>
        </div>
    )
}
