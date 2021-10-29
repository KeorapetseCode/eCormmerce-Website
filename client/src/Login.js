import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Login.css'

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const sign_in = e => {
		console.log();
		e.preventDefault();
	}

	return (
		<div className='login'>
			<Link to="/">
				<img className="login__logo"
					src={"./logo512.png"}  alt={"The Main Logo Goes Here"} 
				/>
			</Link>
			<div className='login__container'>
				<h1>Sign-in</h1>
				<form>
					<h5 className='login__tag'>E-mail</h5>
					<input className='login__email' value={email} type='text' 
					onChange={e => setEmail(e.target.value)}
					/>

					<h5 className='login__tag'>Password</h5>
					<input className='login__pass' value={password} type='password' 
						onChange={e => setPassword(e.target.setPassword)}
					/>

					<button onClick={sign_in} type='submit' className='signin__btn'>Sign In</button>
				</form>
				<p>
					By signing-in you agree to Stasha's Conditions
					of Use & Sale. Please see our Privacy Notice,
					our Cookies Notice and our interest-based Ads
				</p>
			</div>
		</div>
	)
}

export default Login;
