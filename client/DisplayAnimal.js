import React from 'react';
import {STATIC_CATS} from './Cats';
import {STATIC_PUPPIES} from './Puppies';

export default class  DisplayAnimal extends React.Component{
  render() {
    console.log(this.props);
    let params = this.props.match.params;
    let animal;
    if (params.animalType === 'cats') {
      animal = STATIC_CATS.find((cat) => cat.id == params.animalId)
    } else if (params.animalType === 'pups') {
      animal = STATIC_PUPPIES.find((pup) => pup.id == params.animalId)
    }
    return <div className='column'>
      <div className='center'>
        <h1>{animal.name}</h1>
      </div>
      <div className='center'>
        My favorite food is: {animal.favoriteFood}
      </div>
      <div className='center'>
        My favorite toy is: <img src={animal.favoriteToy}></img>
      </div>
    </div>
  }
}