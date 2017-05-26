import React from 'react';

export default class Box extends React.Component {

  showRecipes() {
    return this.props.recipes.map(recipe => {
      return(
        <div key={recipe.id}>
          <h1>{recipe.title}</h1>
          <h2>{recipe.author}</h2>
          <p>{recipe.notes}</p>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        {this.showRecipes()}
      </div>
    )
  }
}
