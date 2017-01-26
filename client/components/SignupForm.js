import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  
  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Sign up</h3>
        <fieldset>
          <div className="form-group">
            <label className="control-label">Username</label>
            <input 
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Email</label>
            <input 
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Password</label>
            <input 
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Password confirmation</label>
            <input 
              value={this.state.passwordConfirmation}
              onChange={this.onChange}
              type="password"
              name="passwordConfirmation"
              className="form-control"
              placeholder="Password confirmation"
            />
          </div>
          
          <div className="form-group"> 
            <button className="btn btn-primary pull-right">Submit</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;