import React from 'react';
import '../../Style/style.css';
import axios from "axios";


class Login extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: "",
      },
    };
  }

  fetchData = () => {
    axios({
      method: "POST",
      url: "http://localhost:8848/user/login",
      data: {
        email: this.state.formData.email,
        password: this.state.formData.password,
      },
    })
      .then((res) => {
        console.log(res);
        const token = res.data.data.token;
        localStorage.setItem("Token", token);
        this.props.history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ err: "Invalid Credentials" });
      });
  };

  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state.formData;

    console.log(email, password);
    if (!email || !password) {
      let fieldName;

      if (!email) {
        fieldName = "Email";
      } else {
        fieldName = "password";
      }
    }
  };

render() {
  return (
<form onSubmit={this.handleSubmit}>
  
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input onChange={this.handleChange} type="email" className="form-control" id="email"
     placeholder="name@example.com" 
    />
</div>
<div className="form-group">
    <label htmlFor="name">Password</label>
    <input onChange={this.handleChange} type="password" className="form-control" id="name"
     placeholder="password" 
    />
</div>
  <div className="form-group">
    <button onClick={this.fetchData} className="form-control btn btn-primary" type="submit">
      Submit
    </button>
</div>
</form>
);
};
}

export default Login;