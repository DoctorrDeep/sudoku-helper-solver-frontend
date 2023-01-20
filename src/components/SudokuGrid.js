import React, { Component } from "react";
import axios from "axios";
import UserButtons from "./UserButtons";
import cloneDeep from 'lodash.clonedeep';
import styles from "./sudokuGridStyles.module.css";


class SudokuGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: [],
            originalValues: [],
            solutionValues: [],
            errorMsg: "",
        }
        this.correctTableValues = this.correctTableValues.bind(this)
        this.changeVal = this.changeVal.bind(this)
    }

    componentDidMount() {
        // This is to prevent re-render. WIthout it, the grid will load twice (with new version of grid)
        if (this.first) { return }
        this.first = true

        // Use axios to load a new puzzle(hardocded to easy-settings by default)
        axios.get("http://ambardas.nl:8000/create/easy")
            .then(response => {
                this.setState({ values: response.data, originalValues: cloneDeep(response.data) })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: "Error retrieving data" })
            })
        // TODO: Experiment with moving this code to App.js
    }

    changeVal(rowIndex, colIndex) {
        // If the cell from the original puzzle did nto have a zero then it was part of the
        // problem definition. Ni changes to be made here if clicked by user.
        if (this.state.originalValues[rowIndex][colIndex] !== 0) { return }

        // Cycle through all values from 0 to 9 and update the current version of the grid to the state
        const newValue = this.state.values[rowIndex][colIndex] === 9 ? 0 : this.state.values[rowIndex][colIndex] + 1
        let newGrid = this.state.values.slice()
        newGrid[rowIndex][colIndex] = newValue
        this.setState({ values: newGrid, errorMsg: "", })
    }

    correctTableValues() {
        // Given the current state of the grid fetch the solution from the endpoint and update the grid + known solutuion
        // TODO: known solutuion i.e. solutionValues seems unnecessary. Either load it when creating the puzzle or remove it
        const wrongSolutionResponse = "No Solution found! Check the values filled in so far."
        axios.post("http://ambardas.nl:8000/solve", this.state.values)
            .then(response => {
                this.setState({ values: cloneDeep(response.data), solutionValues: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: wrongSolutionResponse })
            })
    }

    render() {
        const { values, errorMsg } = this.state
        return <React.Fragment>
            <table>
                <tbody>
                    {values.length ? this.state.values.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex}>
                                    <div className={this.state.values[rowIndex][colIndex] === 0 ? styles.emptycell : this.state.originalValues[rowIndex][colIndex] === 0 ? '' : styles.lockedcell} onClick={() => this.changeVal(rowIndex, colIndex)}>{cell}</div>
                                </td>
                            ))}
                        </tr>
                    )) : null}
                </tbody>
            </table>
            {
                errorMsg ? <div className={styles.alert}>{errorMsg}</div> : null
            }
            <UserButtons correctTableValues={this.correctTableValues} />
        </React.Fragment>
    }
}

export default SudokuGrid
