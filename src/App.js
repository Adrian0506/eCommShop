
import './App.css';
import Navs from './Components/navBar.jsx';
import PopUp from './Components/PopUp';
import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: null,
      adminPriv: false,
      shopItems: []
    }
  }

  render() {
   /*  if (this.state.username !== null && this.state.adminPriv === true) {
      // render user logon
    } */
    return ( 
    <div className="App">
    <PopUp/>
    </div>
  );
 }

}

export default App;

