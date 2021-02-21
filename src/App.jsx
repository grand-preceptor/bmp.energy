import React from 'react';

import Home from './page/Home';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log('---------------------------------------');
    console.log('|    DEVELOPED BY: ████████ █████     |');
    console.log('|    DATE OF DEVELOPMENT: ████-██-██  |');
    console.log('|    EMAIL: █████@███████████.com     |');
    console.log('|    PHONE: +███████████              |');
    console.log('---------------------------------------');
  }

  render() {
    return <Home/>;
  }
}

export default App;
