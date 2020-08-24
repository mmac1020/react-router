import React from 'react';
import { Link } from 'react-router-dom';

export const STATIC_PUPPIES = [
  {id: 1, name: 'Ace', imageSrc:'/puppy-1.jpg', favoriteFood: 'TREATS!!!!', favoriteToy: '/kong.jpg'},
  {id: 2, name: 'Baxter', imageSrc:'/puppy-2.jpg', favoriteFood: 'Turkey', favoriteToy: '/platypus.jpg'},
  {id: 3, name: 'Simba', imageSrc:'/puppy-3.jpg', favoriteFood: 'Pizza', favoriteToy: '/pizza.jpg'}
]

export default class Puppies extends React.Component {
  constructor() {
    super();
    this.state = {
      pups: STATIC_PUPPIES
    }
  }

  render() {
    return <div className='column'>
      <div className='center'>
        {this.state.pups.map(
          (pup) => {
            return <div key={pup.id}>
                <div>
                  {pup.name}
                </div>
                <Link to={'/display/pups/' + pup.id}>
                  <img src={pup.imageSrc}></img>                  
                </Link>
              </div>
          }
        )}
      </div>
    </div>
  }
}