import React from 'react';

export default class Homepage extends React.Component{
  render() {
    return <div className='column'>
      <div className='center'>
        Welcome to my homepage!          
      </div>
      <div className='center'>
        <img src='/me.jpg'></img>        
      </div>
    </div>
  }
}