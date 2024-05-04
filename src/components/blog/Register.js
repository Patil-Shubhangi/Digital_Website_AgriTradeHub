import React, { useState } from "react";
import Back from "../common/Back";
import img from "../images/img.png";
import axios from "axios";
import styled from 'styled-components';


const Container = styled.div`
  background-color: #fff; /* Changed background color to green */
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 80%; /* Changed width to 80% */
  height: 600px; /* Changed height to 600px */
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${({ signIn }) => !signIn && `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `}
`;

const SignInContainer = styled.div`
  position: flex;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 500%;
  z-index: 4;
  ${({ signIn }) => signIn && `
    transform: translateX(2);
  `}
`;

const Form = styled.form`
  background-color: #fff;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  padding: 10 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 10px 35px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${({ signIn }) => signIn ? `
    transform: translateX(-100%);
  ` : null}
`;

const Overlay = styled.div`
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${({ signIn }) => signIn ? `
    transform: translateX(50%);
  ` : null}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${({ signIn }) => signIn ? `
    transform: translateX(0);
  ` : null}
`;

const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${({ signIn }) => signIn ? `
    transform: translateX(0);
  ` : null}
`;

const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${({ signIn }) => signIn ? `
    transform: translateX(20%);
  ` : null}
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const Blog = () => {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoginForm, setIsLoginForm] = useState(false);
  const [error, setError] = useState(null);

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/signUp",
        signupData
      );
      console.log(response.data);
      setSignupData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/login",
        loginData
      );
      console.log(response.data);
      setLoginData({
        email: "",
        password: "",
      });
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const toggleLoginForm = () => {
    setIsLoginForm(!isLoginForm);
    setError(null);
  };

  return (
    <>
    <section>
      <Back
          name="Create Your Account With AgriTradeHub"
          title="SignUp"
          cover={img}
        />
        </section>
      <Container>
        <SignUpContainer signIn={!isLoginForm}>
          <Form onSubmit={handleSignupSubmit}>
            <Title>Sign Up - for Our AgriTradeHub</Title>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={signupData.firstName}
              onChange={handleSignupChange}
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={signupData.lastName}
              onChange={handleSignupChange}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              required
            />
            <Button type="submit">Sign Up</Button>
          </Form>
          {error && <Paragraph className="error-message">{error}</Paragraph>}
          <Anchor onClick={toggleLoginForm}>Already have an account? Login</Anchor>
        </SignUpContainer>
        <SignInContainer signIn={isLoginForm}>
          <OverlayContainer signIn={isLoginForm}>
            <Overlay signIn={isLoginForm} />
            <LeftOverlayPanel signIn={isLoginForm}>
              <Title>Welcome To AgriTradeHub Platform</Title>
              <Paragraph>To keep connected with us please Creat Your Account with your personal info</Paragraph>
              <GhostButton onClick={toggleLoginForm}>SignUp</GhostButton>
            </LeftOverlayPanel>
          </OverlayContainer>
          <Form onSubmit={handleLoginSubmit}>
            <Title>Login - for Our AgriTradeHub</Title>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <Button type="submit">Login</Button>
          </Form>
          {error && <Paragraph className="error-message">{error}</Paragraph>}
          <Anchor onClick={toggleLoginForm}>Don't have an account? Sign Up</Anchor>
        </SignInContainer>
      </Container>
    </>
  );
};

export default Blog;
