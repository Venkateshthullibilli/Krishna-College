import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showSubmitError, setShowSubmitError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    const onSubmitForm = event => {
        event.preventDefault()
        if (username === "venky" && password === "venkysri") {
            navigate('/home')
        } else {
            setShowSubmitError(true)
            setErrorMsg("Username or Password Invalid")
        }
    }

    const handleUsername = event => {
        setUsername(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    return (
        <div className='login'>
            <div className='login-page-container'>
                <div className='college-name-container'>
                    <h1 className='college-name'>Dr. Krishna Degree College</h1>
                </div>
                <form className='form-container' onSubmit={onSubmitForm}>
                    <div className='input-congtainer'>
                        <label htmlFor='username'>USERNAME</label>
                        <input type='text' id='username' placeholder='Username' required onChange={handleUsername} />
                    </div>
                    <div className='input-congtainer'>
                        <label htmlFor='password'>PASSWORD</label>
                        <input type='password' id='password' placeholder='Password' required onChange={handlePassword} />
                    </div>
                    {showSubmitError && <p style={{ color: "red", textAlign: "center" }}>{errorMsg}</p>}
                    <button type='submit' className='login-tbn'>Login</button>

                </form>
            </div>
        </div>
    );
};

export default LoginPage;