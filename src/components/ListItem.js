import React, { Component } from 'react';

class ListItem extends Component{
    render(){
        return (
            <div onClick={this.props.onChange} active={this.props.active}>{this.props.children}</div>
        );
    }
}

export default ListItem;