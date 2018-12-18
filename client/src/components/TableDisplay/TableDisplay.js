import React, {Component} from 'react';
import Item from './Item/Item';
import Header from "./Header/Header";

class TableDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: {"94303": "0", "94088": "0", "95062": "0", "96803": "0"},
            items: [
                 {id: "94303", name: "Сергей"},
                 {id: "94088", name: "Антон"},
                 {id: "95062", name: "Боря"},
                 {id: "96803", name: "Игорь"},
            ],
        }
    }

    onChange = (e, id = 0) => {
        //console.log(id);
        //let newActive = this.state.active;
       // newActive[id] = newActive[id] == "1" ? "0" : "1";

       //this.setState({active: newActive});
    }

    render() {
        const items = this.state.items;
        const active = this.state.active;
        return (
            <div>
                <h1>Displaying some Weather!</h1>
                <Header> </Header>
                {items.map(item => <Item id={item.id} onChange={(e) => this.onChange(e)}>{item.name}</Item>)}
            </div>
        );
    }
}

export default TableDisplay;