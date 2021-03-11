import "./App.css";
import Counter from "./components/Counter";

function App() {
  // const clickHandler = (e) => {
  //   // console.log(e.target);
  //   console.log("clicked!!!");
  // };
  return (
    <div className="App">
      <h1>Hello from React App!</h1>
      {/* <button onClick={(e) => clickHandler(e)}>Click me!</button> */}
      <Counter hello="world" wood="wide web" />
    </div>
  );
}

export default App;
