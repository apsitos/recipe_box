import React, { Component } from 'react';
import axios from 'axios';

export default class Add_Recipe extends Component {

  addRecipe() {
    axios.post('http://localhost:3000/api/v1/recipes', {
      title: ,
      author: ,
      url: ,
      notes:
    })
  }

  render () {
    return (

    )
  }
}
