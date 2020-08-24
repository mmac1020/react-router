import React from 'react'
import Cats from './Cats';
import DisplayAnimal from './DisplayAnimal';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Puppies from './Puppies';
import { HashRouter, Route } from 'react-router-dom';

export default class Main extends React.Component {
  render () {
    return (
      <HashRouter>
        <div id='main'>
          <div className='column container'>
            <div id='header'>SPA with Routing!</div>
            <Navbar />
          </div>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/cats' component={Cats}></Route>
          <Route path='/puppies' component={Puppies}></Route>
          <Route path='/display/:animalType/:animalId' component={DisplayAnimal}></Route>
        </div>
      </HashRouter>
    )
  }
}
