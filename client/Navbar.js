import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div id='navbar' className='row'>
      <Link to='/'>Homepage</Link>
      <Link to='/puppies'>Puppies!</Link>
      <Link to='/cats'>Cats!</Link>
    </div>
  )
}

export default Navbar
