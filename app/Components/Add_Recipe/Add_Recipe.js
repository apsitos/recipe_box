import React, { Component } from 'react';
import axios from 'axios';

export default class Add_Recipe extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      author: '',
      url: '',
      notes: ''
    }
  }

  getInfo(e) {
    const { id, value} = e.target
    this.setState({ [id]: value })
  }

  addRecipe(e) {
    axios.post('http://localhost:3000/api/v1/recipes', {
      title: this.state.title,
      author: this.state.author,
      url: this.state.url,
      notes: this.state.notes
    })
  }

  render () {
    return (
      <div id="new_recipe">
        <input  id="title"
                type="text"
                placeholder="Recipe Title"
                onChange={this.getInfo.bind(this)}
              />
        <input  id="author"
                type="text"
                placeholder="Recipe Author"
                onChange={this.getInfo.bind(this)}
              />
        <input  id="url"
                type="text"
                placeholder="URL"
                onChange={this.getInfo.bind(this)}
              />
        <input  id="notes"
                type="text"
                placeholder="Cooking Notes"
                onChange={this.getInfo.bind(this)}
              />
        <button onClick={(e) => {this.addRecipe(e)}}>
          Save Recipe
        </button>
      </div>
    )
  }
}
