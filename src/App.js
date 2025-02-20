import logo from './logo.svg';
// import './App.css';
import { Home } from './component/Home';
import { About } from './component/About';
import { ChnageName } from './component/ChnageName';
import Chnagecolor from './component/Chnagecolor';
import Fetchdata from './component/Fetchdata';
import Change from './component/Change';
import Chnagebg from './component/Chnagebg';
// import ContactUs from './ContactUs';

function App() {
  // const user = {name: "Alice", age: 25, contry: "USA"};
  let x = "hello"
  return (
    <div>
      {/* <Home data={x}></Home>
      <About></About> */}

      {/* <ChnageName></ChnageName>*/}

      {/* <Chnagecolor></Chnagecolor> */}

      {/* <Fetchdata></Fetchdata> */}

      {/* <Change></Change> */}

      <Chnagebg></Chnagebg>
    </div>
  );
}

export default App;
