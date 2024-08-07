import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./ApplicationForm.css";

const ApplicationForm = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [salary, setSalary] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Here you can add form validation and submit logic
        console.log("Form submitted:", { name, email, phoneNumber, salary });

        toast.success("Form submitted successfully!", {
            position: "top-right",
            autoClose: 5000, // close after 2 seconds
        });

        setTimeout(() => {
            navigate("/");
        }, 4000); // navigate to homepage after 2 seconds
    };

    return (
        <div className="application-form">
            <h1 style={{color:"black"}}>Application Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <div>
                    <label>Expected Salary</label>
                    <input
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Enter your expected salary"
                        required
                    />
                </div>
                <button type="submit">Apply</button>
                <ToastContainer closeButton={false} />
            </form>
        </div>
    );
};

export default ApplicationForm;