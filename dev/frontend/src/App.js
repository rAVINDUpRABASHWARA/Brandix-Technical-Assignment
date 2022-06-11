import React, {Fragment} from 'react';
import './App.css';

//components
import AddEmployee from "./components/AddEmployee"
import ViewEmployee from "./components/ViewEmployee"

function App() {
  return (
    // <div className="App">
    //   <h1>Brandix Assignment</h1>
    // </div>
    <Fragment>
        <h1 className="main">Brandix Assignment</h1>
          <div className="container">
            <AddEmployee/>
            <ViewEmployee/>
          </div>
    </Fragment>
  );
}

export default App;
