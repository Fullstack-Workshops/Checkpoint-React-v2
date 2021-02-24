import React from 'react';
import axios from 'axios';

const DeletePet = (props) => {
  const {handleDelete, petId} = props;
  const handleClick = async () => {
    try {
      await axios.delete(`/api/pets/${petId}`);
      handleDelete(petId);
    } catch (err) {
      console.error(err.message);
    }
  }
   return (
      <button className="delete-pet" onClick={handleClick}>Delete</button>
  )
};

export default DeletePet;
