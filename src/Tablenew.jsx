import React, { useState } from 'react';

function UserForm(props) {
const [userName, setUserName] = useState('');
const [email, setEmail] = useState('');
const [city, setCity] = useState('');

const changeUserName = (event) => {
	setUserName(event.target.value);
};

const changeEmail = (event) => {
	setEmail(event.target.value);
};

const changeCity = (event) => {
	setCity(event.target.value);
};

const transferValue = (event) => {
	event.preventDefault();
	const val = {
	userName,
    email,
	city,
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setUserName('');
    setEmail('');
	setCity('');
};

return (
	<div>
	<label>Name</label>
	<input type="text" value={userName} onChange={changeUserName} />
	<label>Email</label>
	<input type="text" value={email} onChange={changeEmail} />
    <label>City</label>
	<input type="text" value={city} onChange={changeCity} />
	<button onClick={transferValue}> Click Me</button>
	</div>
);
}

export default UserForm;

