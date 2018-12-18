import React, {Component} from 'react';

class Item extends Component {
    render() {
        const mode = 'view';
        return (
            mode == 'view' ?

                <div onClick={this.props.onChange} active={this.props.active}>{this.props.children}
                    <a  className={"edit"}>_!_</a>
                    <a className={"delete"}>_-_</a>
                </div>
                :
                <div><input type={"text"} value={this.props.children}/></div>
        );
    }
}

export default Item;