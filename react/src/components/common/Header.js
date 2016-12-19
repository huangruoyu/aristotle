import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component{
  render(){
    return (
      <nav>
        <Link to="home">Home</Link>
        {"|"}
        <Link to="about">Learn more</Link>
        {"|"}
        <Link to="group">Group</Link>
      </nav>
    );
  }
}

export default Header;
