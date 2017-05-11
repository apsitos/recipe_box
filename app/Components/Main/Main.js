import React from 'react';
import Header from '../Header/Header';
import Box from '../Box/Box';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Header />
        <Box />
      </div>
    )
  }
}
