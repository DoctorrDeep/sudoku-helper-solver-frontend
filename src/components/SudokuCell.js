import React, { Component } from "react";
import styles from "./sudokuGridStyles.module.css";

class SudokuCell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.cval >=0 && props.cval <= 9 ? props.cval : 0,
            locked: props.cval >=1 && props.cval <= 9 ? true : false,
        }

        this.changeNum = this.changeNum.bind(this)
    }
    changeNum() {
        if (this.state.value === 9 && this.state.locked === false) {
            this.setState({ value: 0 })
        }
        else if (this.state.locked === false) {
            this.setState({ value: this.state.value + 1 })
        }
    }

    render() {
        if (this.state.value === 0) {
            return <React.Fragment>
                <div className={styles.emptycell} onClick={this.changeNum}>{this.state.value}</div>
            </React.Fragment>
        }
        if (this.state.locked) {
            return <React.Fragment>
                <div className={styles.lockedcell}>{this.state.value}</div>
            </React.Fragment>
        }
        return <React.Fragment>
            <div onClick={this.changeNum}>{this.state.value}</div>
        </React.Fragment>
    }
}

export default SudokuCell