import React from 'react';
import './register.css'

const Register = () => {
    return (
        <div className='register-div'>
            <h1>Please Register now</h1>
            <form>
                <input type='text' placeholder='Your Name'/>
                <br/>
                <input type='text' placeholder='Email'/>
                <br/>
                <input type='password' placeholder='Password' />
                <br/>
                <input type='submit' value='Register'  />
            </form>
        </div>
    );
};

export default Register;