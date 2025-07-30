import React, { Component } from 'react';
import Actions from '../../../redux/action.js';
import { connect } from 'react-redux';

class OperationButton extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={() => {
                this.props.choose_operation(this.props.operation)
            }}>
                {this.props.operation}
            </button>
        );
    }
}

const mapDispatchToProps = {
    choose_operation: operation => {
        return {
            type: Actions.CHOOSE_OPERATION,
            operation: operation
        }
    }
}
 
export default connect(null, mapDispatchToProps)(OperationButton);