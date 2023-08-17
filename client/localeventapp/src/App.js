// import logo from './logo.svg';
import "./App.css";
import DataDisplay from "./components/DataDisplay";


function App() {
  return (
    <div>
      <header>
        <h1>Your City, Your Events</h1>
      </header>
      <main>
        <div className="innerBox">
          <h1>Find events near you</h1>
          <input
            className="locsearch"
            type="text"
            placeholder="Enter Your City or Postcode"
          ></input>
      <button>Search</button>
        </div>
      </main>
      <DataDisplay/>
    </div>
  );
}
export default App;
