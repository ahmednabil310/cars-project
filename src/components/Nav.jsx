import logo from '../images/logo.png';
import '../styles/Nav.css';
const Nav = () => {
  return (
    <div className="nav-container d-flex">
      <nav className="navbar navbar-expand-xl w-100 navbar-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
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

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Prices & spec
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Cars
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dealers
              </a>
            </li>
          </ul>
          <div className="user-container">
            <i className="fas fa-user-alt pr-2 user-icon"></i>
            <span className="username">Andrew Peki</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
