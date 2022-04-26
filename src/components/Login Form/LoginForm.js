export default function LoginForm(props) {
    return (
      <div>Login form

          <div className="container">
              <form className="loginForm">
                  <label for="fname">First Name: </label>
                  <input type="text"></input> <br/>

                  <label for="lname">Last Name: </label>
                  <input type="text"></input> <br/>

                  <label for="userName">Create a User Name: </label>
                  <input type="text"></input> <br/>

                  <label for="password">Create a Password: </label>
                  <input type="text"></input> <br/>

                  <input type="submit" Value="SUBMIT"></input>

              </form>
          </div>






      </div>

    );
  }