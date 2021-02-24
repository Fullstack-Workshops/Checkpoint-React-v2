import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: null,
      pets: []
    }
    this.fetch = this.fetch.bind(this);
  }

  async fetch() {
    try {
      this.setState({loading: true});
      const {data} = await axios.get('/api/pets');
      this.setState({pets: data, loading: false});
    } catch (err) {
      this.setState({loading: false, error: err.message});
      console.log('Could not fetch pets', err);
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const {loading, error, pets} = this.state;
    return (
      <>
        {loading && <div>Loading</div>}
        {error && <div>Error: {error}</div>}
        <h1>Adoption Center</h1>
        <PetList pets={pets} />
      </>
    );
  }
}

export default Root;
