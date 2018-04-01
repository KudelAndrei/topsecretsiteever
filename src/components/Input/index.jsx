import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = { value: '' };
        this.changeInput = this.changeInput.bind(this);
    }

    changeInput(event){
        this.setState({ value: event.target.value }, () => {
            this.props.onChange(this.props.typeInput, this.state.value);
        });
    }
    render(){
        return(
            <input
                onChange={this.changeInput}
                type={this.props.type}
                placeholder={this.props.placeholder}
                required />
        );
    }
}