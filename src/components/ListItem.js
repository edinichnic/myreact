import React, { Component } from 'react';

class ListItem extends Component{
    state = {
        active: 0
    }

    render(){
        return (
            <div onClick={this.props.onchange} active={this.props.active}>{this.props.children}</div>
        );
    }


}

export default ListItem;