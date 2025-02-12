import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
// import ContactUs from './ContactUs';

function App() {
  // const user = {name: "Alice", age: 25, contry: "USA"};
  let x = "hello"
  return (
    <div className="App">
      <Home data={x}></Home>
      <About></About>
    </div>
  );
}

export default App;
