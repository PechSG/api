// import React, { Component } from 'react';
// import axios from 'axios';
// import InputGroup from 'react-bootstrap/InputGroup'

// export default class RegisterUser extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       first: '',
//       last: '',
//       phoneNumber: 0,
//       sex: '',
//       password: '',
//       passwordConf: '',
//       address: '',
//       fammem: 0
//     }
//   }

//   onChangeUsername(e) {
//     console.log(e.target.name)
//     console.log(e.target.value)
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//     // if (e.target.name == "first") {
//     //   this.setState({first: e.target.value})
//     // } 
//   }

//   // onChangeSelect(e) {
//   //   console.log(e.target.name)
//   //   console.log(e.target.value)
//   //   this.setState({
//   //     sex: e.target.value
//   //   })
//   //   // if (e.target.name == "first") {
//   //   //   this.setState({first: e.target.value})
//   //   // } 
//   // }

//   onSubmit(e) {
//     var data = {
//       first: this.state.first,
//       last: this.state.last,
//       sex: this.state.sex,
//       phoneNumber: this.state.phoneNumber,
//       password: this.state.password,      
//       passwordConf: this.state.passwordConf,
//       village: this.state.village,
//       commune: this.state.commune,
//       district: this.state.district,
//       province: this.state.province,
//       dateofbirth: this.state.dateofbirth
//     }
//     console.log(data)
//     axios({
//       method: 'post',
//       url: 'https://pichsaving.herokuapp.com/api/register',
//       data: data
//     }).then(function (response) {
//       console.log(response.data)
//     });

//     e.preventDefault();

   
//   }

//   render() {
//     return (
//       <div>
//         <h3>Register a New User</h3>
//         <form onSubmit={this.onSubmit}>
//          <div className="form-group"> 
//             <label>First Name: </label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 name="first"
//                 value={this.state.first}  
//                 onChange={this.onChangeUsername}
//                 />
//           </div>
          
//           <div className="form-group"> 
//             <label>Last Name: </label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 name="last"
//                 value={this.state.last}
//                 onChange={this.onChangeUsername}
//                 />
//           </div>

//           <div className="form-group"> 
//             <label>Date of Birth: </label>
//             <input  type="date"
//                 required
//                 className="form-control"
//                 name="dateofbirth"
//                 value={this.state.dateofbirth}
//                 onChange={this.onChangeUsername}
//                 />
//           </div>

//           <div className="form-group"> 
//             <label>Sex:  </label>
//             <select className="form-control" name="sex" onChange={this.onChangeUsername}>
//             <option value=""></option>
//               <option value="f">Female</option>
//               <option value="m">Male</option>
//               <option value="na">Prefer not to say</option>
//             </select>
//           </div>
//           <div className="form-group"> 
//             <label>Phone Number: </label>
//             <input  type="number"
//                 required
//                 className="form-control"
//                 name="phoneNumber"
//                 value={this.state.phoneNumber}
//                 onChange={this.onChangeUsername}
//                 />
//           </div>

//           <div className="form-group"> 
//             <label>Address: </label>
//             <input  type="text"
//                 required
//                 className="form-control"
//                 name="streetNum"
//                 value={this.state.streetNum}
//                 onChange={this.onChangeUsername}
//                 placeholder="Street Number"
//                 />   
//             <input  type="text"
//                 required
//                 className="form-control"
//                 name="village"
//                 value={this.state.village}
//                 onChange={this.onChangeUsername}
//                 placeholder="Village"
//                 />
//             <input  type="text"
//                 required
//                 className="form-control"
//                 name="commune"
//                 value={this.state.commune}
//                 onChange={this.onChangeUsername}
//                 placeholder="Commune"
//                 />
//             <input  type="text"
//                 required
//                 className="form-control"
//                 name="district"
//                   value={this.state.district}
//                   onChange={this.onChangeUsername}
//                 placeholder="District"
//                 />
//             <input  type="text"
//                 required
//                 className="form-control"
//                 name="province"
//                 value={this.state.province}
//                 onChange={this.onChangeUsername}
//                 placeholder="Province"
//                 />
//           </div>

//           <div className="form-group"> 
//             <label>Password: </label>
//              <input  type="password"
//                 required
//                 className="form-control"
//                 name="password"
//                 type="password"
//                 value={this.state.password}
//                 onChange={this.onChangeUsername}
//                 />
//           </div>
//           <div className="form-group"> 
//             <label>Password Confirm: </label>
//             <input  type="password"
//                 required
//                 className="form-control"
//                 name="passwordConf"
//                 value={this.state.passwordConf}
//                 onChange={this.onChangeUsername}
//                 /> 
//           </div>
//           <div className="form-group">
//             <input type="submit" value="Register" className="btn btn-primary" />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Register extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">  
                  <Form>
                    <h1>Register</h1><h2>to get an account</h2>
                    <p className="text-muted">Register your account here! </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="First Name" autoComplete="firstname" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Last Name" autoComplete="lastname" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" placeholder="Date of Birth" autoComplete="dateofbirth" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      {/* <Input type="text" placeholder="Sex" autoComplete="sex" /> <Input type="text" placeholder="Sex" autoComplete="sex" /> */}
                      <select  placeholder="Sex" className="form-control" name="sex" onChange={this.onChangeUsername}>
                      <option value=""></option>
                        <option value= "f">Female</option>
                        <option value= "m">Male</option>
                        <option value= "na">Prefer not to say</option>
                      </select>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" placeholder="Phone Number" autoComplete="phoneNumber" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user "></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Address" autoComplete="address" />
                    </InputGroup>
                     <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Confrim Password" autoComplete="new-password" />
                    </InputGroup>
                    <Button color="primary" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">  
                </CardFooter>
              </Card>
            </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
