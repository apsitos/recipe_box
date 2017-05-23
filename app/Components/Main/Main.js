import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Box from '../Box/Box';

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  getRecipes() {
    axios.get('/api/v1/recipes', {})
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
      })
      .then()
  }

  render() {
    return(
      <div>
        <Header />
        {this.getRecipes()}
        <Box />
      </div>
    )
  }
}
