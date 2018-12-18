import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div onClick={this.props.onChange} active={this.props.active}>{this.props.children}</div>
        );
    }
}

export default Header;