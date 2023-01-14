import React, { Component } from "react";
import SudokuCell from "./SudokuCell";

class SudokuGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: [
                [5, 7, 1, 3, 4, 9, 6, 2, 8],
                [8, 3, 9, 6, 2, 5, 7, 4, 1],
                [2, 6, 0, 8, 7, 1, 9, 3, 5],
                [6, 8, 7, 9, 5, 2, 3, 1, 4],
                [3, 1, 2, 7, 6, 4, 8, 5, 9],
                [9, 4, 5, 1, 3, 8, 0, 6, 7],
                [1, 0, 3, 4, 8, 6, 5, 7, 2],
                [4, 5, 6, 2, 9, 7, 1, 8, 3],
                [7, 2, 8, 5, 1, 3, 4, 9, 6],
            ]
        }
        this.fetchTableValues = this.fetchTableValues.bind(this)
    }

    fetchTableValues () {
        console.log(this.state.values[2]);
    }

    render() {
        return <React.Fragment><table>
            <tbody>
                {this.state.values.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, index) => (
                            <td key={index}>
                                <SudokuCell cval={cell} />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={this.fetchTableValues}>Is this correct?</button>
        </React.Fragment>
    }

}

export default SudokuGrid
