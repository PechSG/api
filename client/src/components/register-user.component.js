import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      first: '',
      last: '',
      phoneNumber: 0,
      sex: '',
      password: '',
      passwordConf: '',
      address: '',
      fammem: 0
    }
  }

  onChangeUsername(e) {
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
    // if (e.target.name == "first") {
    //   this.setState({first: e.target.value})
    // } 
  }

  // onChangeSelect(e) {
  //   console.log(e.target.name)
  //   console.log(e.target.value)
  //   this.setState({
  //     sex: e.target.value
  //   })
  //   // if (e.target.name == "first") {
  //   //   this.setState({first: e.target.value})
  //   // } 
  // }

  onSubmit(e) {
    var data = {
      first: this.state.first,
      last: this.state.last,
      sex: this.state.sex,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,      
      passwordConf: this.state.passwordConf,
      address: this.state.address,
      dateofbirth: this.state.address,
      fammem: this.state.fammem,
    }
    console.log(data)
    axios({
      method: 'post',
      url: 'https://pichsaving.herokuapp.com/api/register',
      data: data
    }).then(function (response) {
      console.log(response.data)
        window.location = '/login';
    });

    e.preventDefault();

   
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
            <label>Date of Birth: </label>
            <input  type="date"
                required
                className="form-control"
                name="dateofbirth"
                value={this.state.dateofbirth}
                onChange={this.onChangeUsername}
                />
          </div>

          <div className="form-group"> 
            <label>Sex:  </label>
            <select className="form-control" name="sex" onChange={this.onChangeUsername}>
            <option value=""></option>
              <option value="f">Female</option>
              <option value="m">Male</option>
              <option value="na">Prefer not to say</option>
            </select>
          </div>
          <div className="form-group"> 
            <label>Phone Number: </label>
            <input  type="number"
                required
                className="form-control"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.onChangeUsername}
                />
          </div>

          <div className="form-group"> 
            <label>Address: </label>
            <input  type="text"
                required
                className="form-control"
                name="streetNum"
                value={this.state.streetNum}
                onChange={this.onChangeUsername}
                placeholder="Street Number"
                />   
            <input  type="text"
                required
                className="form-control"
                name="village"
                value={this.state.village}
                onChange={this.onChangeUsername}
                placeholder="Village"
                />
            <input  type="text"
                required
                className="form-control"
                name="commune"
                value={this.state.commune}
                onChange={this.onChangeUsername}
                placeholder="Commune"
                />
            <input  type="text"
                required
                className="form-control"
                name="district"
                value={this.state.district}
                onChange={this.onChangeUsername}
                placeholder="District"
                />
            <input  type="text"
                required
                className="form-control"
                name="province"
                value={this.state.province}
                onChange={this.onChangeUsername}
                placeholder="Province"
                />
          </div>

          <div className="form-group"> 
            <label>Family Members: </label>
            <input  type="number"
                required
                className="form-control"
                name="fammem"
                value={this.state.fammem}
                onChange={this.onChangeUsername}
                />
          </div>

          <div className="form-group"> 
            <label>Password: </label>
            <input  type="password"
                required
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Password Confirm: </label>
            <input  type="password"
                required
                className="form-control"
                name="passwordConf"
                value={this.state.passwordConf}
                onChange={this.onChangeUsername}
                /> 
          </div>
          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}