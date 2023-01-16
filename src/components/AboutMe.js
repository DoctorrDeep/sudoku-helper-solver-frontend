import React from 'react'
import styles from "./sudokuGridStyles.module.css";


function AboutMe() {
    return (
        <div>
            <h3>Backend API</h3>
            <ul>
                <li>Endpoint <a href="http://ambardas.nl:8000">http://ambardas.nl:8000</a></li>
                <li>API docs <a href="http://ambardas.nl:8000/docs">http://ambardas.nl:8000/docs</a></li>
            </ul>
            <h3>Source</h3>
            <ul>
                <li>Infrastructure-as-code <a href="https://github.com/DoctorrDeep/sudoku-helper-solver-iac">Github</a></li>
                <li>Frontend in React <a href="https://github.com/DoctorrDeep/sudoku-helper-solver-frontend">Github</a></li>
                <li>Backend in Python <a href="https://github.com/DoctorrDeep/sudoku-helper-solver-backend">Github</a></li>
            </ul>
            <h3>Author Details</h3>
            <ul>
                <li>Github <a href="https://github.com/DoctorrDeep">DoctorrDeep</a></li>
                <li>LinkedIn <a href="https://www.linkedin.com/in/ambardas/">ambardas</a></li>
            </ul>
        </div>
    )
}

export default AboutMe
