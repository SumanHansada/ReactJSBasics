import logo from "./logo.svg";
import "./App.css";
import { Welcome } from "./components/Welcome";
import { Hello } from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
