import React, {Component} from 'react';
import ListItem from './ListItem';

class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: {"94303": "0", "94088": "0", "95062": "0", "96803": "0"},
            places: [
                {name: "Palo Alto", zip: "94303"},
                {name: "San Jose", zip: "94088"},
                {name: "Santa Cruz", zip: "95062"},
                {name: "Honolulu", zip: "96803"}
            ],
        }
    }

    onChange = (e, id) => {
        console.log(id);
        let newActive = this.state.active;
        newActive[id] = newActive[id] == "1" ? "0" : "1";

        this.setState({active: newActive}, console.log(this.state));
    }

    render() {
        const places = this.state.places;
        const active = this.state.active;
        return (
            <div>
                <h1>Displaying some Weather!</h1>
                {places.map(place => <ListItem active={active[place.zip]}
                                               onChange={(e) => this.onChange(e, place.zip)}>{place.name}</ListItem>)}
            </div>
        );
    }
}

export default WeatherDisplay;