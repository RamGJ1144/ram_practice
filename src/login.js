import React from "react";

function Login(){
    return(
        <div center="center">
         <form>
            <input type="text" id="name" placeholder="enter your name"></input>
            <br></br>
            <br>
            </br>
            <input type="email" id="email" placeholder="enteryouremail"required ></input>
            <br></br>
            <br>
            </br>
            <input type="password" id="password" placeholder="enteryourpassword" required></input>
            <br></br>
           <br></br>
           <button type="submit">submit</button>
         </form>

        </div>
    );
}
export default Login;