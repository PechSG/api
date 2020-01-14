import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: '',
      phoneNumber: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

 

  onSubmit(e) {
    e.preventDefault();

    const loginDetail = {
      phoneNumber: this.state.phoneNumber,
      password: this.state.password
    }

    console.log(loginDetail);

    axios.post('https://pichsaving.herokuapp.com/api/login', loginDetail)
      .then(function (res) {
        console.log(res.data)
        window.location = '/';
      })
      .catch(e => console.log(e)) 

    // 
  }

  render() {    
    return (
    <div>
      <h3>Login</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Phone Number: </label>
          <input  type="number"
                required
                className="form-control"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.onChangePhoneNumber}
                />
        </div>
        <div className="form-group"> 
            <label>Password: </label>
            <input type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div> 
        {/* <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div> */}

        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}