// import logo from './logo.svg';
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import ProgrammerList from "./Component/ProgrammerList/ProgrammerList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProgrammerList></ProgrammerList>
      <Footer></Footer>
    </div>
  );
}

export default App;
