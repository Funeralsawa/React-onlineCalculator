import operationButton from "../components/content/calculate/operationButton.jsx";
import Actions from "./action.js"

const evaluate = (state) => {
    let {lastOperand, currentOperand, operation} = state;
    let last = parseFloat(lastOperand);
    let current = parseFloat(currentOperand);

    let res = "";

    switch(operation) {
        case '+':
            res = last + current;
            break;
        case '-': 
            res = last - current;
            break;
        case '×':
            res = last * current;
            break;
        case '÷':
            res = last / current;
            break;
        default: 
            res = "无法计算";
    }

    return res.toString();
}

const reducer = (state={
    currentOperand: "",
    lastOperand: "",
    operation: "",
    overwrite: false
}, action) => {
    if(state.overwrite) {
        state = {
            ...state,
            currentOperand: "",
            lastOperand: "",
            operation: "",
            overwrite: false
        }
    }
    switch(action.type) {
        case Actions.ADD_DIGIT:
            if(state.currentOperand === '0' && action.digit === '0')
                return state;
            if(state.currentOperand === '0' && action.digit !== '.')
                return {
                    ...state,
                    currentOperand: action.digit
                }
            if(action.digit === '.' && state.currentOperand.includes('.'))
                return state;
            if(action.digit === '.' && state.currentOperand === "")
                return {
                    ...state,
                    currentOperand: "0."
                }
            return {
                ...state,
                currentOperand: state.currentOperand + action.digit
            }
        case Actions.DELETE_DIGIT:
            if(state.currentOperand === "") return state;
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1) //删除从0开始的-1个元素，也就是0前面的元素，也就是最后一个元素
            }
        case Actions.CHOOSE_OPERATION:
            if(state.lastOperand === "" && state.currentOperand === "") return state;
            if(state.lastOperand === "")
                return {
                    ...state,
                    lastOperand: state.currentOperand,
                    operation: action.operation,
                    currentOperand: "",
                }
            if(state.currentOperand === "")
                return {
                    ...state,
                    operation: action.operation,
                }
            return {
                ...state,
                lastOperand: evaluate(state),
                operation: action.operation,
                currentOperand: "",
            }
        case Actions.CLEAR:
            return {
                ...state,
                currentOperand: "",
                lastOperand: "",
                operation: ""
            }
        case Actions.EVALUATE:
            return {
                ...state,
                currentOperand: evaluate(state),
                lastOperand: "",
                operation: "",
                overwrite: true
            }
        default:
            return state;
    }
}

export default reducer;