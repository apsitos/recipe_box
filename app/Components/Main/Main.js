import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Box from '../Box/Box';
import Add_Recipe from '../Add_Recipe/Add_Recipe'
import '../../reset.css';
import '../../styles.css';

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  getRecipes() {
    axios.get('http://localhost:3000/api/v1/recipes', {})
      .then(response => {
        this.setState({ recipes: response.data })
      })
  }

  render() {
    return(
      <div>
        <Header />
        <Add_Recipe />
        {this.getRecipes()}
        <Box recipes={this.state.recipes}/>
      </div>
    )
  }
}
