import {Link, NavLink} from 'react-router-dom';

export const MainNavigation = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/home" className="navbar-item">
        <img src="./logo.png" />
      </Link>
      <NavLink activeClassName="is-active" to="/" exact className="navbar-item">Home</NavLink>
      <NavLink activeClassName="is-active" to="/todos" className="navbar-item">Todos</NavLink>
      <NavLink activeClassName="is-active" to="/about" className="navbar-item">About us</NavLink>
    </div>
  </nav>
)