


function UserGreeting(props) {
    return <h1>Welcome, {props.name} </h1>;
  }
  
function GuestGreeting(props) {
    return <h1>Please sign up to access your My 50 page.</h1>;
  }


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );