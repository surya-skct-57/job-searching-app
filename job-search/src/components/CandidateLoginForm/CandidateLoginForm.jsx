import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./CandidateLoginForm.css";

const CandidateLoginForm = () => {
    const [isLoggedIn, setLogIn] = useState(true);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && window.location.pathname === '/login' || window.location.pathname === '/register') {
          navigate("/about");
        }
    }, []);
    
    const handleToggle = () => {
        setLogIn(!isLoggedIn);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {};

        if (isLoggedIn) {
            // Login validation
            if (!email) {
                errors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                errors.email = "Invalid email address";
            }
            if (!password) {
                errors.password = "Password is required";
            } else if (password.length < 8) {
                errors.password = "Password must be at least 8 characters";
            } else if (
                !/[a-z]/.test(password) ||
                !/[A-Z]/.test(password) ||
                !/[0-9]/.test(password) ||
                !/[!@#$%^&*]/.test(password)
            ) {
                errors.password =
                    "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character";
            }
        } else {
            // Signup validation
            if (!userName) {
                errors.userName = "Full name is required";
            }
            if (!email) {
                errors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                errors.email = "Invalid email address";
            }
            if (!password) {
                errors.password = "Password is required";
            } else if (password.length < 8) {
                errors.password = "Password must be at least 8 characters";
            } else if (
                !/[a-z]/.test(password) ||
                !/[A-Z]/.test(password) ||
                !/[0-9]/.test(password) ||
                !/[!@#$%^&*]/.test(password)
            ) {
                errors.password =
                    "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character";
            }
            if (!confirmPassword) {
                errors.confirmPassword = "Confirm password is required";
            } else if (password !== confirmPassword) {
                errors.confirmPassword = "Passwords do not match";
            }
        }
        
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            
            console.log("Form is valid!");
            console.log(`Username: ${userName}`);
            console.log(`Email: ${email}`);
            console.log(`Password: ${password}`);
            localStorage.setItem("token", true);
            
            
            toast.success("Login successful!", {
                position: "top-right",
                autoClose: 5000,
            });

            setTimeout(() => {
                navigate("/");
                navigate(0);
            }, 4000);
        }
    };
    const handleClick = () => {
        setOpen(true);
    };


    return (
        <div className="login-signup-form">
            <h2 style={{color:"black"}}>{isLoggedIn ? "Candidate Login" : "Candidate Signup"}</h2>
            <form onSubmit={handleSubmit}>
                {isLoggedIn ? (
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your candidate email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                        <br />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {errors.password && (
                            <div style={{ color: "red" }}>{errors.password}</div>
                        )}
                    </div>
                ) : (
                    <div>
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={userName}
                            placeholder="Enter your fullname"
                            onChange={(event) => setUserName(event.target.value)}
                        />
                        {errors.userName && (
                            <div style={{ color: "red" }}>{errors.userName}</div>
                        )}
                        <br />
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                        <br />
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {errors.password && (
                            <div style={{ color: "red" }}>{errors.password}</div>
                        )}
                        <br />
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            placeholder="Enter your password"
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                        {errors.confirmPassword && (
                            <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                        )}
                        <br />
                    </div>
                )}
                <button onClick={handleClick} type="submit">{isLoggedIn ? "Login" : "SignUp"}</button>
                <p style={{color:"black"}}>
                    {isLoggedIn ? "Dont have an account? " : "Already have an account? "}
                    <span onClick={handleToggle}>{isLoggedIn ? "SignUp" : "Login"}</span>
                </p>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default CandidateLoginForm;


