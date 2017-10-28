import React from 'react';
import {Component } from 'react';
import {Grid, Row, Col, Button, FormGroup, PageHeader, Form, FormControl,
  ControlLabel } from 'react-bootstrap'; 

import Header from './Header.jsx'
import '../Css/styles.css';



class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      validationState: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    // True if verified to be non-empty
    let vfn = this.state.firstName.trim() !== "";
    let vln = this.state.lastName.trim() !== "";
    let vs = this.state.subject.trim() !== "";
    let vm = this.state.message.trim() !== "";

    // True if empty email
    let ee = this.state.email.trim() === "";

    let ve = !ee && this.validateEmail(this.state.email);

    if (vfn && vln && ve && vs && vm) {
      alert("Form good to go!");
    } else {
      this.setState({
        validationState: {
          name: (vfn && vln) ? "success" : "error",
          subject: vs ? "success" : "error",
          message: vm ? "success" : "error",
          email: ee ? "error" : (ve ? "success" : "warning"),
          status: `          Please ${!vfn || !vln || !vm || !vs || ee ? 
            `fill out all fields${!ve && !ee ? 
              " and " : ""}` : ""}${!ee && !ve ? "enter a valid email address" : ""}`
        }
      })
    }
  }

  getValidationState(name) {
    console.log(this.state.validationState[name]);
    return this.state.validationState[name];
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  } 

  render() {

    return(
      // Pretty sure there exists React Contact form npm packages we can use
      <div>
        <Header />
        <br/><br/><br /><br/>
        <Grid>
          <Col xsOffset={1} xs={10}>
            <Row>
              <PageHeader>Contact Us</PageHeader>
            </Row>
            <Row>
              <Form horizontal>
                <FormGroup name="name" validationState={this.getValidationState("name")}>
                  <Col xs={6} sm={4}>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl type="text" onChange={this.handleInputChange} className="contact-form-input" name="firstName"/>
                    <FormControl.Feedback className="formcontrol-feedback"/>
                  </Col>
                  <Col xs={6} sm={4}>
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl type="text" onChange={this.handleInputChange} className="contact-form-input" name="lastName"/>
                    <FormControl.Feedback className="formcontrol-feedback"/>
                  </Col>
                </FormGroup>
                <FormGroup name="email" validationState={this.getValidationState("email")}>
                  <Col xs={12} sm={8}>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" onChange={this.handleInputChange} className="contact-form-input" name="email"/>
                    <FormControl.Feedback className="formcontrol-feedback"/>
                  </Col>
                </FormGroup>
                <br/>
                <FormGroup name="subject" validationState={this.getValidationState("subject")}>
                  <Col xs={12}>
                    <ControlLabel>Subject</ControlLabel>
                    <FormControl type="text" onChange={this.handleInputChange} className="contact-form-input" name="subject"/>
                    <FormControl.Feedback className="formcontrol-feedback"/>
                  </Col>
                </FormGroup>
                <FormGroup name="message" validationState={this.getValidationState("message")}>
                  <Col xs={12}>
                    <ControlLabel>Message</ControlLabel>
                    <FormControl componentClass="textarea" onChange={this.handleInputChange} className="contact-form-input" name="message"/>
                    <FormControl.Feedback className="formcontrol-feedback"/>
                  </Col>
                </FormGroup>
                <Button className="contact-form-button" onClick={this.handleSubmit}>
                  Send
                </Button>
                {this.state.validationState.status}
              </Form>
            </Row>
            <Row>
                <PageHeader>Our Office</PageHeader>
            </Row>
            <Row>
              <Col xs={12} sm={4} smPush={8} md={3} mdPush={9}>
                University of Waterloo
                <br/>
                Engineering 5
                <br/>
                200 University Ave W
                <br/>
                Waterloo, ON
                <br/>
                N2L 3E9
                <br/>
                <br/>
              </Col>
              <Col xs={12} sm={8} smPull={4} md={9} mdPull={3}
              style={{height: 300 + "px", border: "1px solid black"}}>
                Iframe goes here
              </Col>
            </Row>
          </Col>

        </Grid>
      </div>
    );

  };


}


export default Contact
