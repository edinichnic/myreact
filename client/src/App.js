import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TableDisplay from './components/TableDisplay/TableDisplay';

class App extends Component {


    render() {
        return (
            <div className="App">
                <TableDisplay></TableDisplay>
            </div>
        );
    }
}

export default App;
