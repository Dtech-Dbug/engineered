import logo from "./logo.svg";
import "./index.css";
import Board from "./UI_Components/Board";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <div id="header">
        <Header />
        <figcaption>to get you</figcaption>
      </div>
    </div>
  );
}

export default App;
