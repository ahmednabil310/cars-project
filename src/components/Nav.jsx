import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/Nav.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import fbLogo from '../images/facebook-logo-png-white.png'
// import googleLogo from '../images/google-logo-png-white.png'

// the hook
import { useTranslation } from 'react-i18next';

import i18n from '../i18n';
//const { t, i18n } = useTranslation();

// const changelanguage = (lan) => {
//   return () => {
//     i18n.changeLanguage(lan);
//   };
// };

const CLIENT_ID =
  '132576193524-o0v1lg1hhnfuurctq2fdk28t3btpi9k3.apps.googleusercontent.com';
const Client_Secret = 'dCkN2EUohUrctqyXFTrjB7rq';

class Nav extends Component {
  constructor(props) {
    super(props);

    const isLoginGmail = localStorage.getItem('accessTokenGmail');
    const isLoginFB = localStorage.getItem('accessTokenFB');

    this.state = {
      isLoginedGmail: isLoginGmail !== null ? true : false,
      isLoginedFB: isLoginFB !== null ? true : false,
      accessToken: '',
      showPopUp:false,
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response) {
    if (response.accessToken) {
      localStorage.setItem('accessTokenGmail', response.accessToken);
      this.setState((state) => ({
        isLoginedGmail: true,
        accessToken: response.accessToken,
      }));
    }
  }

  logout() {
    localStorage.removeItem('accessTokenGmail');
    this.setState((state) => ({
      isLoginedGmail: false,
      accessToken: '',
    }));
  }

  handleLoginFailure(response) {
    alert('Failed to log in');
  }

  handleLogoutFailure(response) {
    alert('Failed to log out');
  }

  responseFacebook = (response) => {
    localStorage.setItem('accessTokenFB', response.accessToken);
    this.setState({
      isLoginedFB: true,
    });
  };

  logOUtFB = () => {
    localStorage.removeItem('accessTokenFB');
    this.setState({
      isLoginedFB: false,
    });
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
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink
                  className="less-padding nav-link "
                  to="/"
                  exact
                  activeClassName="active-link">
                  {'Prices & spec'}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/newcarpricing"
                  activeClassName="active-link">
                  {'New Cars'}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to="/car-reviews">
                  {'Reviews'}
                </NavLink>
              </li>
              
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://smartarz.com/vehicle/1109/cars-for-sale/1118?fbclid=IwAR0K07Nj2wB9OoUrPcBT40mBIYmkddOeH_meSE-I_Qvrak-KuWKpuGs9QRE">
                  {'Used Car'}
                </a>
              </li>
              <li className="nav-item"  data-toggle="modal" data-target="#exampleModal" >
                <div
                  className="nav-link"
                  activeClassName="active-link"
                  style={{cursor:'pointer'}}
                  >
                  {'Login'}
                </div>
              </li>
            </ul>
            <div className="user-container">
              <i className="fas fa-user-alt pr-2 user-icon"></i>
              <span className="username">{'Andrew Peki'}</span>
            </div>
            {/* <button
            //onClick={changelanguage("ar")}
            >
              Ar
            </button>
            <button
            //onClick={changelanguage("en")}
            >
              en
            </button> */}
          </div>
        </nav>
        {/* {this.state.isLoginedGmail ? (
          <div style={{ paddingTop: '40px' }}>
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.logout}
              onFailure={this.handleLogoutFailure}></GoogleLogout>
          </div>
        ) : (
          <div style={{ paddingTop: '40px' }}>
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Login"
              onSuccess={this.login}
              onFailure={this.handleLoginFailure}
              cookiePolicy={'single_host_origin'}
              responseType="code,token"
            />
          </div>
        )}
        {this.state.isLoginedFB ? (
          <div style={{ paddingTop: '40px' }}>
            <button onClick={this.logOUtFB}> LogOut</button>
          </div>
        ) : (
          <div style={{ paddingTop: '40px' }}>
            <FacebookLogin
              buttonStyle={{ padding: '6px' }}
              appId="1063436714175495"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook}
            />
          </div>
        )}  */}


<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content" style={{backgroundColor:'black'}}>
      <div class="modal-header">
        <div class="modal-title" id="exampleModalLabel" style={{marginTop:'5px'}}><img src={logo}/></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style={{color:'white', opacity:'1'}}>
          <span aria-hidden="true" >&times;</span>
        </button>
      </div>
      <div class="modal-body" >
      <div className='login-popupBTNS'>
          {this.state.isLoginedGmail ? (
            <GoogleLogout
              icon={<img width='30px' height='30px' src={fbLogo}/>}

              className='google-login-btn'
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
              className='google-login-btn'
              
            />
        )}
        {this.state.isLoginedFB ? (
            <button onClick={this.logOUtFB} className='fb-login-btn'> Log Out</button>
          
        ) : (
            <FacebookLogin
              appId="1063436714175495"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook}
              textButton='Continue with Facebook'
              cssClass='fb-login-btn'
              icon={<img width='30px' height='30px' src={fbLogo}/>}
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

export default Nav;
