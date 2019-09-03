import React from 'react';
import './App.css';

function App(props) {
  const {auth0} = props
  //console.log(auth0)

  // window.addEventListener('load', async () => {
  //   console.log('on load')
  //   const redirectResult = await auth0.handleRedirectCallback()
  //   //logged in. you can get the user profile like this:
  //   const user = await auth0.getUser()
  //   console.log(user)
  // })

  const  login = async () => {
    await auth0.loginWithRedirect()
  }

  const  logout = async () => {
    await auth0.logout()
  }

  return (
    <div className="App">
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
