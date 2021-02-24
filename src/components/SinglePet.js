import React from 'react';

class SinglePet extends React.Component {
  constructor() {
    super();
    this.state = {
      adopted: false
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange() {
    this.setState((prevState) => ({adopted: !prevState.adopted}))
  }

  render() {
    const { name, description, species } = this.props.pet
    const { adopted } = this.state;
    return <div className={`single-pet ${adopted ? 'adopted' : ''}`}>
      <div>{name}</div>
      <div>{description}</div>
      <div>{species}</div>
      {adopted ? 'Adopted!' : 'Available'}
      <button onClick={this.handleChange}>Toggle Status</button>
    </div>;
  }
}

export default SinglePet;
