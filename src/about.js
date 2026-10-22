
import React,{useState } from "react";

function About (){
       const[count,setCount]=useState(0);
       
    
        const [data,setData]=useState({username:"",email:"",password:"",phone:""});
    
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

        
    

    return(
        <>
        <img src="https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gateway-to-India_0.jpg"></img>
        <h1>welcome about page</h1>
        <h1>count:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>+</button>
         <button onClick={()=>{setCount(count-1)}}>-</button>

         <button onClick={()=>{setCount(0)}}>restart</button>

        <input type="text" name="username" placeholder="enter your name" onChange={handleChange}/>
        <input type="email" name="email" placeholder="enter your email" onChange={handleChange}/>
        <input type="password" name="password" placeholder="enter your password" onChange={handleChange}/>
        <input type="number" name="phone" placeholder="enter your number" onChange={handleChange}/>

         


      
      <h1>Welcome: {data.username}</h1>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>
      <h1>number:{data.phone}</h1>
     
        
        </>
    )
}
export default About;