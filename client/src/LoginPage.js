// LoginPage.js
import React from 'react';
import { Form, Button, Container, Row, Col, Alert,Image,Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showError: false,
      showPassword: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleTogglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    const { username, password } = this.state;

    if (username === 'your_username' && password === 'your_password') {
      // Successful login
      alert('Login successful');
    } else {
      // Failed login
      this.setState({ showError: true });
    }
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
          <Card style={{ backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Card.Header className="d-flex justify-content-between align-items-center">
                <div>
                <Link to="/"> <FontAwesomeIcon icon={faAngleLeft} /></Link> Back
                </div>
                <div className="text-center">
                  <Image
                    src="./MML.png"
                    alt="Logo"
                    fluid
                    style={{ width: '100px', height: 'auto' }}
                    className="mx-auto"
                  />
                </div>
              </Card.Header>
            <br></br>
            <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>
<br></br>
<Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type={this.state.showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                      />
                      <div className="input-group-append">
                        <Button
                          variant="outline-secondary"
                          type="button"
                          onClick={this.handleTogglePasswordVisibility}
                        >
                          <FontAwesomeIcon
                            icon={this.state.showPassword ? faEye : faEyeSlash}
                          />
                        </Button>
                      </div>
                    </div>
                  </Form.Group>

              {this.state.showError && (
                <Alert variant="danger">Invalid username or password</Alert>
              )}
<br></br>
<div className="d-flex justify-content-end"> 
 <Button variant="primary" type="submit">
                Login
              </Button>
              </div>
            </Form>

            <div className="mt-3">
              <p>
              <Link to ="/forgetpassword">Forgot Password?</Link>
              </p>
              <p>
                Don't have an account? <Link to ="/signup">Sign Up</Link> now!
              </p>
            </div>
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;
