import logo from './logo.svg';
import './App.css';
import { Home } from './component/Home';
import { About } from './component/About';
import { ChnageName } from './component/ChnageName';
// import ContactUs from './ContactUs';

function App() {
  // const user = {name: "Alice", age: 25, contry: "USA"};
  let x = "hello"
  return (
    <div className="App">
      {/* <Home data={x}></Home>
      <About></About> */}

      <ChnageName></ChnageName>
    </div>
  );
}

export default App;
