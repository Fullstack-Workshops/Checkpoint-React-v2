import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'all'
    }
    this.handleSelected = this.handleSelected.bind(this);
  };

  handleSelected(evt) {
    this.setState({filter: evt.target.value});
  }

  render() {
    const { filter } = this.state;
    const pets = this.props.pets.filter((pet) => {
      if (filter === 'all') return pet;
      if (filter === 'cats') return pet.species === 'cat';
      if (filter === 'dogs') return pet.species === 'dog';
    })
    const { handleDelete } = this.props;
    return (
      <>
        <select name="species-filter" value={filter} onChange={this.handleSelected}>
          <option>all</option>
          <option>cats</option>
          <option>dogs</option>
        </select>
        <div className="pet-list">
          {pets.map((pet) => (
            <SinglePet key={pet.name} pet={pet} handleDelete={handleDelete}/>
          ))}
        </div>
      </>
    );
  }
}

export default PetList;
