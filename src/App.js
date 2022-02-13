import logo from "./logo.svg";
import "./App.css";
import { Welcome } from "./components/Welcome";
import { Hello } from "./components/Hello";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Women" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Women" />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
