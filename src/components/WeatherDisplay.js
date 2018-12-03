import React, {Component} from 'react';
import ListItem from './ListItem';

class WeatherDisplay extends Component {
    state = {
        places : [
            {name: "Palo Alto", zip: "94303"},
            {name: "San Jose", zip: "94088"},
            {name: "Santa Cruz", zip: "95062"},
            {name: "Honolulu", zip: "96803"}
        ]
    }
    down = () => console.log('пришло снизу');
    render() {
        return (
            <div>
                <h1>Displaying some Weather!</h1>
                {this.state.places.map(place => <ListItem active={0} onchange={this.down}>{place.name}</ListItem>)}
            </div>
        );
    }

}

export default WeatherDisplay;