// import { useState } from 'react';
// //import * as usersService from '../../utilities/users-service';



// export default function Form({ setUser }) {
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: ''
//       });
//       const [error, setError] = useState('');
      
//       function handleChange(evt) {
//         setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
//         setError('');
//       }
      
//       async function handleSubmit(evt) {
//         // Prevent form from being submitted to the server
//         evt.preventDefault();
//         try {
//           // The promise returned by the signUp service method
//           // will resolve to the user object included in the
//           // payload of the JSON Web Token (JWT)
//           const user = await usersService.login(credentials);
//           setUser(user);
//         } catch {
//           setError('Log In Failed - Try Again');
//         }
//       }



//     return (
//       <div>Login form

//           <div className="form-container">
//               <form className="loginForm" autoComplete="off" onSubmit={handleSubmit}>
//                   <label for="fname">First Name: </label>
//                   <input type="text"></input> <br/>

//                   <label for="lname">Last Name: </label>
//                   <input type="text"></input> <br/>

//                   <label for="userName">Create a User Name: </label>
//                   <input type="text"></input> <br/>

//                   <label for="password">Create a Password: </label>
//                   <input type="text"></input> <br/>

//                   <input type="submit" Value="SUBMIT"></input>
//               </form>
//           </div>

//           <p className="error-message">&nbsp;{error}</p>

//       </div>

//     );
//   }