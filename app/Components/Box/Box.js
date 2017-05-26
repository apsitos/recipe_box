import React from 'react';

export default class Box extends React.Component {

  showRecipes() {
    return this.props.recipes.map(recipe => {
      return(
        <div className="recipe_card" key={recipe.id}>
          <a href={recipe.url}><h1 className="recipe_title">{recipe.title}</h1></a>
          <h2 className="recipe_author">{recipe.author}</h2>
          <p className="recipe_notes">{recipe.notes}</p>
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
