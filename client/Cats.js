import React from 'react';
import {Link} from 'react-router-dom';
export const STATIC_CATS = [
  {id: 1, name: 'Cody', imageSrc:'/cat-1.jpg', favoriteFood: 'Tuna fish', favoriteToy: '/peek-a-prize.jpg'},
  {id: 2, name: 'Fira', imageSrc:'/cat-2.jpg', favoriteFood: 'Meow Mix', favoriteToy: '/cat-teaser.jpg'},
  {id: 3, name: 'Earl', imageSrc:'/cat-3.jpg', favoriteFood: 'Chicken', favoriteToy: '/mouse.jpg'}
]

export default class Cats extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: STATIC_CATS
    }
  }
  render() {
    return <div className='column'>
      <div className='center'>
        {this.state.cats.map(
          (cat) => {
            return <div key={cat.id}>
                <div>
                  {cat.name}
                </div>
                <Link to={'/display/cats/' + cat.id}>
                  <img src={cat.imageSrc}></img>                  
                </Link>
              </div>
          }
        )}
      </div>
    </div>
  }
}