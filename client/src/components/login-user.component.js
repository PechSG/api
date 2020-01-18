import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
axios.defaults.withCredentials = true

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
    // axios.get('http://localhost:8080/api/islogined')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       console.log(response)
    //       // this.setState({
    //       //   isLogined: response.data.map(user => user.username),
    //       //   username: response.data[0].username
    //       // })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

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

    axios.post('http://pichsaving.herokuapp.com/api/user/login', {phoneNumber: 965587758, password: "liger72724"})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


    // 
    axios.get('http://pichsaving.herokuapp.com/api/user/islogined')
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

//   render() {    
//     return (
//     <div>
//       <h3>Login</h3>
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group"> 
//           <label>Phone Number: </label>
//           <p className="text-muted">Sign In to your account</p>
//           <input  type="number"
//                 required
//                 className="form-control"
//                 name="phoneNumber"
//                 value={this.state.phoneNumber}
//                 onChange={this.onChangePhoneNumber}
//                 />
//         </div>
//         <div className="form-group"> 
//             <label>Password: </label>
//             <input type="password"
//                 required
//                 className="form-control"
//                 value={this.state.password}
//                 onChange={this.onChangePassword}
//                 />
//           </div> 
//         {/* <div className="form-group">
//           <label>Date: </label>
//           <div>
//             <DatePicker
//               selected={this.state.date}
//               onChange={this.onChangeDate}
//             />
//           </div>
//         </div> */}

//         <div className="form-group">
//           <input type="submit" value="Login" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//     )
//   }
// }

render() {
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={this.onSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>

                    {/* Phone Number Element */}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">

                        {/* Icon */}
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>

                      {/* Input */}
                      </InputGroupAddon>
                      <Input type="number" placeholder="Phone Number" autoComplete="phoneNumber" />
                    </InputGroup>

                    {/* Password Element */}
                    <InputGroup className="mb-4">
                     <InputGroupAddon addonType="prepend">

                        {/* Icon */}
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                     
                      {/* Input */}
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="current-password" />
                    </InputGroup>
                    
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>

                  </Form>
                </CardBody>
              </Card>

              <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Hit Bunleap!</p>
                    <Link to="/register">
                      <Button color="primary" className="mt-3" active tabIndex={-1}>Hit Bunleap!</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
}
