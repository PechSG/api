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
      phoneNumber: '',
      isLogined: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/islogined')
      .then(response => {
        if (response.data.length > 0) {
          console.log(response)
          // this.setState({
          //   isLogined: response.data.map(user => user.username),
          //   username: response.data[0].username
          // })
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

 

  axios.post('http://localhost:8080/api/login', loginDetail)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
    // 
    axios.get('http://localhost:8080/api/islogined')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
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