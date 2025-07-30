import React, { Component } from 'react';
import Base from './base';
import { connect } from "react-redux"
import DigitButton from './calculate/digitButton';
import OperationButton from './calculate/operationButton.jsx';
import Actions from '../../redux/action.js';

class Calculator extends Component {
    state = { 
        formatter: Intl.NumberFormat("en-us") //JS提供的格式化数字函数
    }

    format = (number) => {
        const [Integer, Decimal] = number.split('.');
        if(Decimal === undefined)
            return this.state.formatter.format(Integer);
        return `${this.state.formatter.format(Integer)}.${Decimal}`;
    }

    render() {
        let lastOperand = this.props.lastOperand;
        let currentOperand = this.props.currentOperand;
        let operation = this.props.operation;
        return (
            <Base>
                <div className="calculator">
                    <div className="output">
                        <div className="last-output">
                            {lastOperand !== "" ? this.format(lastOperand) : ""} {operation}
                        </div>
                        <div className="current-output">
                            {currentOperand !== "" ? this.format(currentOperand) : ""}
                        </div>
                    </div>
                    <button onClick={this.props.clear} className='button-ac'>AC</button>
                    <button onClick={this.props.delete_digit}>Del</button>
                    <OperationButton operation="÷" />
                    <DigitButton digit="7" />
                    <DigitButton digit="8" />
                    <DigitButton digit="9" />
                    <OperationButton operation="×" />
                    <DigitButton digit="4" />
                    <DigitButton digit="5" />
                    <DigitButton digit="6" />
                    <OperationButton operation="-" />
                    <DigitButton digit="1" />
                    <DigitButton digit="2" />
                    <DigitButton digit="3" />
                    <OperationButton operation="+" />
                    <DigitButton digit="0" />
                    <DigitButton digit="." />
                    <button onClick={this.props.evaluate} className='button-equal'>=</button>
                </div>
            </Base>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation
    }
}

const mapDispatchToProps = {
    delete_digit: () => {
        return {
            type: Actions.DELETE_DIGIT,
        }
    },

    clear: () => {
        return {
            type: Actions.CLEAR,
        }
    },

    evaluate: () => {
        return {
            type: Actions.EVALUATE,
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);