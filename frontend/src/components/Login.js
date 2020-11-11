import React, { useState } from 'react';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label>Email <span className="required">*</span></label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="field1" className="field-long" />
                </li>
                <li>
                    <label>Password <span>*</span></label>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} name="field2" placeholder="Password" />
                </li>
                <li>
                    <input type="submit" value="Submit" />
                </li>
            </ul>
        </form>
    )
    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        window.location = "http://localhost:3000/library";
    }

}

export default Login
