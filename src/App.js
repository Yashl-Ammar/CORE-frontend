import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import About from './Components/About';
import Curriculum from './Components/Curriculum';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header />
      <About />
      <Curriculum />
    </div>
  );
}

export default App;
