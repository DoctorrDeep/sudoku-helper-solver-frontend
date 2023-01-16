import './App.css';
import AboutMe from './components/AboutMe';
import SudokuGrid from './components/SudokuGrid';

function App() {
  return (
    <div className="App">
      <h1>Solve the Sudoku Grid</h1>
      <SudokuGrid />
      <AboutMe />
    </div>
  );
}

export default App;
