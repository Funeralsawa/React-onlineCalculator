import React, { Component } from 'react';
import Actions from "../../../redux/action.js"
import { connect } from "react-redux"

class DigitButton extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={() => this.props.add_digit(this.props.digit)}>
                {this.props.digit}
            </button>
        );
    }
}

const mapDispatchToProps = {
    add_digit: digit => {
        return {
            type: Actions.ADD_DIGIT,
            digit: digit,
        }
    }
}

export default connect(null, mapDispatchToProps)(DigitButton);