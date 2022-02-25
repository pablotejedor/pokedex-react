import React from 'react';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <nav className='navbar'>
      <Link to="/">Pokedex</Link>
      <Link to="/search">Search</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
