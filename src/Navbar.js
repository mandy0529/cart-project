import React from 'react';
import {useGlobalContext} from './context';
import {SiDatadog} from 'react-icons/si';
import {FiShoppingCart} from 'react-icons/fi';

const Navbar = () => {
  const {amount} = useGlobalContext();
  return (
    <section className="navbar">
      <h1 className="navbar-icon">
        <SiDatadog />
        <p className="navbar-title">mindidog</p>
      </h1>
      <nav>
        <button className="navbar-btn">
          <FiShoppingCart />
          <span className="navbar-number">{amount}</span>
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
