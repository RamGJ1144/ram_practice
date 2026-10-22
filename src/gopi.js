
import React, { useState, useEffect } from "react";

function Gopi() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    });

    const [members, setMembers] = useState([]);

    // Load members from name keys
    useEffect(() => {
        const savedMembers = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            try {
                const details = JSON.parse(localStorage.getItem(key) );
                  
               

                if (
                    details &&  details.email !== undefined &&  details.phone !== undefined ) {
                   
                    savedMembers.push({
                        name: key,
                        email: details.email,
                        password: details.password,
                        phone: details.phone
                    });
                }
            }
             catch {
                // Ignore other Local Storage values
            }
        }

        setMembers(savedMembers);
    }, []);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = data.username.trim();

        if (localStorage.getItem(name) !== null) {
            alert("This name already exists. Please enter another name.");
            return;
        }

        const details = {
            email: data.email,
            password: data.password,
            phone: data.phone
        };

        // Name is the only key for this member
        localStorage.setItem(name, JSON.stringify(details));

        const updatedMembers = [  ...members,  { name, ...details } ];
           
    
        setMembers(updatedMembers);

        setData({
            username: "",
            email: "",
            password: "",
            phone: ""
        });

        alert("Member saved successfully!");
    };

    const handleReset = () => {
        if (window.confirm("Delete all saved members?")) {
            members.forEach((member) => {
                localStorage.removeItem(member.name);
            });

            setMembers([]);

            setData({
                username: "",
                email: "",
                password: "",
                phone: ""
            });

            alert("All members deleted!");
        }
    };

    return (
        <>
            <h1>Enter Member Details</h1>

            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Enter name"
                    value={data.username}
                    onChange={handleChange}
                    required
                />
                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />
                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={handleChange}
                    required
                />
                <br /><br />

                <input
                    name="phone"
                    placeholder="Enter phone"
                    value={data.phone}
                    onChange={handleChange}
                    required
                />
                <br /><br />

                <button type="submit">Save Member</button>

                <button type="button" onClick={handleReset}>
                    Reset All Members
                </button>
            </form>

            <hr />

            <h2>All Members: {members.length}</h2>

            {members.map((member) => (
                <div
                    key={member.name}
                    style={{
                        border: "1px solid gray",
                        padding: "10px",
                        margin: "10px",
                        width: "300px"
                    }}
                >
                    <h3>Name: {member.name}</h3>
                    <p>Email: {member.email}</p>
                    <p>Password: {member.password}</p>
                    <p>Phone: {member.phone}</p>
                </div>
            ))}
        </>
    );
}

export default Gopi;