import React, { useState } from "react";
import axios from "axios";
import './ContactForm.css'
import { ToastContainer } from "react-toastify";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
        if (!formData.message) newErrors.message = "Message is required";
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            axios({
                method: "POST",
                url: "http://localhost:3002/send", // Replace with your backend API URL
                data: formData,
            }).then((response) => {
                if (response.data.status === "success") {
                    alert("Message Sent.");
                    setFormData({
                        name: "",
                        email: "",
                        phoneNumber: "",
                        message: "",
                    });
                } else if (response.data.status === "fail") {
                    alert("Message failed to send.");
                }
            });
        }
    };

    return (
        <div class="contact-container">
            <div class="contact-image" />
            <form class="contact-form"> 
                <center><h2 style={{color:"black"}}>Contact Form</h2></center>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" required />
                            <div class="error-message">{errors.name}</div>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email"  />
                            <div class="error-message">{errors.email}</div>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="tel" name="phoneNumber" required />
                            <div class="error-message">{errors.phoneNumber}</div>
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea name="message" required></textarea>
                        <div class="error-message">{errors.message}</div>
                    </div>
                <button type="submit">Send</button>
                <ToastContainer/>
                </form>
        </div>
    );
}

export default ContactUs;