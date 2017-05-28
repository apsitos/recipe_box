import React, { Component } from 'react';
import axios from 'axios';

export default class Add_Recipe extends Component {

  // addRecipe() {
  //   axios.post('http://localhost:3000/api/v1/recipes', {
  //     title: ,
  //     author: ,
  //     url: ,
  //     notes:
  //   })
  // }

  render () {
    return (
      <div id="new_recipe">
        <input id="title" type="text" placeholder="Recipe Title" />
        <input id="author" type="text" placeholder="Recipe Author" />
        <input id="url" type="text" placeholder="URL" />
        <input id="notes" type="text" placeholder="Cooking Notes" />
      </div>
    )
  }
}
