import React, {Component} from 'react';

class UserBox extends Component {

    constructor(props) {
        super(props);

        this.state = {title: 'User', name: "david", age: "24"};
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
            </div>
        );
    }
}

export default UserBox;
