import React from "react";
import {useAuth0} from "@auth0/auth0-react";

function Login() {

    const {loginWithRedirect} = useAuth0();
    // const test = () => {
    //   console.log("buttonclick")
    // }

  return (
    <div>
      <br/><br/>
      <button onClick={()=>loginWithRedirect()}>login</button>
    </div>

  );
}


export default Login;
