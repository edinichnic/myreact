import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';

class App extends Component {


    render() {
        return (
            <div className="App">
                <WeatherDisplay></WeatherDisplay>
            </div>
        );
    }
}

export default App;
