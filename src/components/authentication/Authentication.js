import React, { useState } from "react";

const Authentication = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value,
        });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Implement login logic here
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Implement signup logic here
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
                <button type="submit">Login</button>
            </form>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={signupData.firstName} onChange={handleSignupChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={signupData.lastName} onChange={handleSignupChange} required />
                <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required />
                <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={signupData.confirmPassword} onChange={handleSignupChange} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Authentication;
