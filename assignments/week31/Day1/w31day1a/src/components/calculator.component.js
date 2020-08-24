import React, { Component } from 'react'

export class calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expression: "",
            error: ""
        };
    };

    insertHandler = (e) => {
        this.state.error && this.setState({ error: "" });
        this.state.expression.length < 15 && this.setState({ expression: this.state.expression + e.target.name });
    };

    clearInput = (e) => {
        this.setState({ expression: "", error: "" });
    };

    backspaceHandler = (e) => {
        this.state.error && this.setState({ error: "" });
        this.setState({ expression: this.state.expression.substring(0, this.state.expression.length - 1) });
    };

    computeHandler = (e) => {
        try {
            this.setState({ expression: `${eval(this.state.expression)}`.substring(0, 15) });
        } catch {
            this.setState({ expression: "", error: "Invalid input !!!" });
        }
    };

    render() {
        const { expression, error } = this.state;
        return (
            <div className="auth-inner">
                <div id="bg-body">
                    <h2 className="aboutus-title">Calculator</h2>
                    <div className="main-container">
                        <div className="calc-container">
                            <div id="input">
                                {error && <h6 id="error">{error}</h6>}
                                {expression}
                            </div>
                            <div id='buttons-container'>

                                <button className="btn_calc btn-operator " onClick={this.clearInput}><i className="far fa-trash-alt"></i></button>
                                <button className="btn_calc btn-operator " onClick={this.backspaceHandler}><i className="fas fa-backspace"></i></button>
                                <button className="btn_calc btn-operator " name={'/'} onClick={this.insertHandler}><i className="fas fa-divide"></i></button>
                                <button className="btn_calc btn-operator " name={'*'} onClick={this.insertHandler}><i className="fas fa-times"></i></button>

                                <button className="btn_calc btn-num" name={'7'} onClick={this.insertHandler}>7</button>
                                <button className="btn_calc btn-num" name={'8'} onClick={this.insertHandler}>8</button>
                                <button className="btn_calc btn-num" name={'9'} onClick={this.insertHandler}>9</button>
                                <button className="btn_calc btn-operator " name={'-'} onClick={this.insertHandler}><i className="fas fa-minus"></i></button>

                                <button className="btn_calc btn-num" name={'4'} onClick={this.insertHandler}>4</button>
                                <button className="btn_calc btn-num" name={'5'} onClick={this.insertHandler}>5</button>
                                <button className="btn_calc btn-num" name={'6'} onClick={this.insertHandler}>6</button>
                                <button className="btn_calc btn-operator " name={'+'} onClick={this.insertHandler}><i className="fas fa-plus"></i></button>

                                <button className="btn_calc btn-num" name={'1'} onClick={this.insertHandler}>1</button>
                                <button className="btn_calc btn-num" name={'2'} onClick={this.insertHandler}>2</button>
                                <button className="btn_calc btn-num" name={'3'} onClick={this.insertHandler}>3</button>
                                <button className="btn_calc btn-operator equal " onClick={this.computeHandler}><i className="fas fa-equals"></i></button>
                                <button className="btn_calc btn-num dot" name={'0'} onClick={this.insertHandler}>0</button>
                                <button className="btn_calc btn-num" name={'.'} onClick={this.insertHandler}>.</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default calculator
