import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    axios({
      method: 'post',
      url: '/api/register',
      data: {
        first: this.state.first,
        last: this.state.last,
        sex: this.state.sex,

      }
    });
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Register a New User</h3>
        <form onSubmit={this.onSubmit}>
         <div className="form-group"> 
            <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                name="first"
                value={this.state.first}
                onChange={this.onChangeUsername}
                />
          </div>
          
          <div className="form-group"> 
            <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                name="last"
                value={this.state.last}
                onChange={this.onChangeUsername}
                />
          </div>

          <div className="form-group"> 
            <label>Sex:  </label>
            <select className="form-control">
              <option value={this.state.sex}>Female</option>
              <option value={this.state.sex}>Male</option>
              <option value={this.state.sex}>Prefer not to say</option>
            </select>
          </div>
          <div className="form-group"> 
            <label>Phone Number: </label>
            <input  type="number"
                required
                className="form-control"
                value={this.state.phoneNumber}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Password Confirm: </label>
            <input  type="password"
                required
                className="form-control"
                value={this.state.passwordconfirm}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}