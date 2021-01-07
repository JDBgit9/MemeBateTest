import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Nav from '../Nav'


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>user</button>;
};


class UserPage extends React.Component {
  render() {
    return (
      <div>
       
      </div>
    );
  }

}

UserPage.propTypes = {
};

export default LoginButton;