import React from "react";
import { Component } from "react";


export default class UserLogin extends Component {

    state = {
        name: '',
        password: '',
        confirm: '',
        error: ''
      };

    render() {
        const disable = this.state.password !== this.state.confirm;

        const handleSubmit = async (evt) => {
            // Prevent form from being submitted to the server
            evt.preventDefault();
            try {
          
            } catch {
              // An error occurred
              this.setState({ error: 'Sign Up Failed - Try Again' });
            }
          };
        
      return (
        <div>
            <h3>SIGN IN</h3>
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>User Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <button type="submit" disabled={disable}>SIGN IN</button>
                </form>
            </div>

        <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      );
    }
  }

