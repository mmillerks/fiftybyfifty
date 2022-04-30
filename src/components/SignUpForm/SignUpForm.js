import { useState } from 'react';
import * as usersService from '../../utilities/users-services';
// import { signUp } from '../../utilities/users-services';


export default function SignUpForm({ setUser }) {
    const [credentials, setCredentials] = useState({
      });
      const [error, setError] = useState('');
      
      function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
      }
      
      async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
          // The promise returned by the signUp service method
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
          const user = await usersService.signUp(credentials);
          setUser(user);
        } catch (err){
          console.error(err);
          setError('Sign Up Failed: Try Again');
        }
      }



    return (
      <div>

          <div className="form-container">

              <form className="loginForm" autoComplete="off" onSubmit={handleSubmit}>
                  <img src="https://i.imgur.com/HL9kCvk.png?1"></img>

                  <label>First Name: </label>
                  <input type="text" name="firstname" onChange={handleChange}></input> <br/>

                  <label>Last Name: </label>
                  <input type="text" name="lastname" onChange={handleChange}></input> <br/>

                  <label>Create a User Name: </label>
                  <input type="text" name="username" onChange={handleChange}></input> <br/>

                  <label>Create a Password: </label>
                  <input type="text" name="password" onChange={handleChange}></input> <br/>

                  <input type="submit" value="SUBMIT"></input>
              </form>
          </div>

          <p className="error-message">&nbsp;{error}</p>

      </div>

    );
  }