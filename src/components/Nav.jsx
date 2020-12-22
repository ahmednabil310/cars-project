import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Nav.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import fbLogo from '../images/facebook-logo-png-white.png';

const CLIENT_ID =
  '132576193524-o0v1lg1hhnfuurctq2fdk28t3btpi9k3.apps.googleusercontent.com';
const Client_Secret = 'dCkN2EUohUrctqyXFTrjB7rq';

class Nav extends Component {
  constructor(props) {
    super(props);

    const isLoginGmail = localStorage.getItem('accessTokenGmail');
    const isLoginFB = localStorage.getItem('accessTokenFB');
    const nameFB = localStorage.getItem('nameFB');
    const nameGmail = localStorage.getItem('nameGmail');

    this.state = {
      isLoginedGmail: isLoginGmail !== null ? true : false,
      isLoginedFB: isLoginFB !== null ? true : false,
      accessToken: '',
      showPopUp: false,
      name: nameFB || nameGmail,
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  login(response) {
    if (response.accessToken) {
      localStorage.setItem('accessTokenGmail', response.accessToken);
      localStorage.setItem('nameGmail', response.profileObj.name);
      localStorage.setItem('GmailId', response.googleId);
      this.setState((state) => ({
        isLoginedGmail: true,
        accessToken: response.accessToken,
        name: response.profileObj.name,
        showPopUp: false,
      }));

      const objNewUser = {
        fullName: response.profileObj.name,
        authenticationTypeId: 1,
        token: response.googleId,
        email: response.profileObj.email,
        profilePic: response.profileObj.profileObj,
      };
      this.props.actions.addUsers(objNewUser);
      document.getElementById('hideLoginPopup').click();
    }
  }

  logout() {
    localStorage.removeItem('accessTokenGmail');
    localStorage.removeItem('nameGmail');

    this.setState((state) => ({
      isLoginedGmail: false,
      accessToken: '',
      loggedIn: false,
    }));

    localStorage.clear();
  }

  handleLoginFailure(response) {}

  handleLogoutFailure(response) {}

  responseFacebook = (response) => {
    if (response.status !== 'unknown') {
      localStorage.setItem('accessTokenFB', response.accessToken);
      localStorage.setItem('nameFB', response.name);
      localStorage.setItem('UserIDFB', response.userID);
      this.setState({
        isLoginedFB: true,
        name: response.name,
        showPopUp: false,
      });

      const objNewUser = {
        fullName: response.name,
        authenticationTypeId: 1,
        token: response.userID,
        email: response.email,
        profilePic: response.picture.data.url,
      };
      this.props.actions.addUsers(objNewUser);
      document.getElementById('hideLoginPopup').click();
    }
  };

  logOUtFB = () => {
    localStorage.removeItem('accessTokenFB');
    this.setState({
      isLoginedFB: false,
    });
    localStorage.clear();
  };
  logOutBoth = () => {
    this.logOUtFB();
    this.logout();
  };
  render() {
    return (
      <div className="nav-container d-flex">
        <nav className="navbar navbar-expand-xl w-100 navbar-dark">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent">
            <ul
              className="navbar-nav"
              style={{
                width:
                  this.state.isLoginedGmail || this.state.isLoginedFB
                    ? '64%'
                    : '71%',
              }}>
              <li className="nav-item active">
                <NavLink
                  className="less-padding nav-link "
                  to="/"
                  exact
                  activeClassName="active-link"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  {'Prices & spec'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/newcarpricing"
                  activeClassName="active-link"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  {'New Cars'}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to="/car-reviews"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  {'Reviews'}
                </NavLink>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://smartarz.com/vehicle/1109/cars-for-sale/1118?fbclid=IwAR0K07Nj2wB9OoUrPcBT40mBIYmkddOeH_meSE-I_Qvrak-KuWKpuGs9QRE">
                  {'Used Car'}
                </a>
              </li>
            </ul>
            {this.state.isLoginedGmail || this.state.isLoginedFB ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle d-flex align-items-center dropdown-nav"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <i className="fas fa-user-alt pr-2 user-icon"></i>
                  <span className="username">{this.state.name}</span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <li onClick={this.logOutBoth}>
                    <div
                      style={{
                        cursor: 'pointer',
                        color: 'black',
                        paddingLeft: '10px',
                      }}>
                      Log Out
                    </div>
                  </li>
                </div>
              </div>
            ) : (
              <li
                className="nav-item d-flex"
                data-toggle="modal"
                data-target="#loginPopupForm"
                id="loginPopUpShow">
                <div
                  className="nav-link special-login"
                  activeClassName="active-link"
                  style={{ cursor: 'pointer' }}>
                  {'Login'}
                </div>
              </li>
            )}
          </div>
        </nav>

        <div
          className="modal fade"
          id="loginPopupForm"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <span className="title">Sign In or Sign Up</span>
                <button
                  id="hideLoginPopup"
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ color: 'gray', opacity: '1', fontSize: '26px' }}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="login-popupBTNS">
                  {this.state.isLoginedGmail ? (
                    <GoogleLogout
                      icon={<img width="30px" height="30px" src={fbLogo} />}
                      className="google-login-btn"
                      clientId={CLIENT_ID}
                      buttonText="Logout"
                      onLogoutSuccess={this.logout}
                      onFailure={this.handleLogoutFailure}></GoogleLogout>
                  ) : (
                    <GoogleLogin
                      clientId={CLIENT_ID}
                      buttonText="Continue with Google"
                      icon={fbLogo}
                      onSuccess={this.login}
                      onFailure={this.handleLoginFailure}
                      cookiePolicy={'single_host_origin'}
                      responseType="code,token"
                      className="google-login-btn"
                    />
                  )}
                  {this.state.isLoginedFB ? (
                    <button onClick={this.logOUtFB} className="fb-login-btn">
                      {' '}
                      Log Out
                    </button>
                  ) : (
                    <FacebookLogin
                      // appId="1063436714175495"
                      appId="781310785786387"
                      autoLoad={false}
                      fields="name,email,picture"
                      callback={this.responseFacebook}
                      textButton="Continue with Facebook"
                      cssclassName="fb-login-btn"
                      icon={<i className="fab fa-facebook-f px-2"></i>}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  listComment: state.reduces.listComment,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
