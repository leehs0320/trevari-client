import React, { Component } from "react";
import axios from "axios";
import { Router } from "../../routes/routes";

const URL = "http://3.16.58.104:5000";
// const URL = "http://localhost:5000";

class loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      userid: "",
      check: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkRegisteredEmail = this.checkRegisteredEmail.bind(this);
    this.requestLogin = this.requestLogin.bind(this);
    this.loginButtonClick = this.loginButtonClick.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginButtonClick = () => {
    for (var key in this.state) {
      if (this.state[key] === null) {
        this.setState({
          check: "빈칸을 모두 채워 주세요!"
        });
        return;
      }
    }
    this.checkRegisteredEmail();
  };

  checkRegisteredEmail = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post(`${URL}/users/checkEmailAvailability`, data)
      .then(res => {
        if (res.data) {
          this.setState({
            check: "가입되지 않은 이메일 입니다!"
          });
        } else {
          this.requestLogin(data);
        }
      })
      .catch(err => console.log(err));
  };

  requestLogin = data => {
    axios
      .post(`${URL}/users/login`, data)
      .then(res => {
        if (res.data) {
          this.setState({
            id: res.data.id
          });
          this.props.saveId(this.state.id);
          this.props.changeCondition();
          Router.pushRoute("/index");
        } else {
          this.setState({
            check: "비밀번호를 확인해 주세요!"
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h1>로그인</h1>
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <div id="textStyle">
          <a>{this.state.check}</a>
        </div>

        <button onClick={this.loginButtonClick}>Login</button>
        <div>
          <a href="/signup">회원가입</a>
        </div>
        <style jsx>{`
          #textStyle {
            color: red;
            font-size: 11px;
          }
        `}</style>
      </div>
    );
  }
}

export default loginpage;
