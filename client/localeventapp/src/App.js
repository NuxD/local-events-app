// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Local Events App</h1>
      </header>
      <main>
        <div className="innerBox">
          <h1>Your City, Your Events</h1>
          <input className="locsearch"type="text" placeholder="Enter Your City or Postcode"></input>
        </div>
      </main>
    </div>
  );
}
export default App;
