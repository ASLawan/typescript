// import './App.css'
import Child from "./components/Child";
import Greet from "./components/Greet";
import Name from "./components/Name";
import NameList from "./components/NameList";
import Parent from "./components/Parent";
import Status from "./components/Status";

function App() {
  const names = [
    { firstName: "Austin", lastName: "Lawan", isMarried: false },
    { firstName: "Desmon", lastName: "Laiven", isMarried: false },
    { firstName: "Kingsley", lastName: "Wirba", isMarried: true },
    { firstName: "Joel", lastName: "Njodzeka", isMarried: false },
    { firstName: "Capwell", lastName: "Echo", isMarried: false },
    { firstName: "Joe", lastName: "Nchila", isMarried: true },
    { firstName: "Patrick", lastName: "Ngum", isMarried: true },
  ];
  return (
    <>
      <div>
        <h1>TypeScript is Awesome!</h1>
      </div>
      {/* <Greet name={"Lawan"} />
      <Name name={{ firstName: "Austin", lastName: "Lawan" }} />
      <NameList names={names} />
      <Status status={"loading"} /> */}
      <Parent>
        <Child>I am the Sub-child</Child>
      </Parent>
    </>
  );
}

export default App;
