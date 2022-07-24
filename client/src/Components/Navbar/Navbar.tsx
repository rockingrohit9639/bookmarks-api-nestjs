import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="container flex align-items-center justify-content-between">
        <div className="navbar__left">
          <Link to="/">
            <h1 className="bold">Bookmarks</h1>
          </Link>
        </div>
        <div className="navbar__right flex align-items-center">
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>
            <Button type="primary" shape="round">
              SignUp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
