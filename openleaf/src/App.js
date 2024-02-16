
import './App.css';
import Nav from './components/Nav';
import Rtosavings from './components/Rtosavings';
import Sidebar from './components/Sidebar';
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="h-screen w-screen bg-bg-color">
      <div className=" sm:flex sm:w-full">
        <Sidebar />
        <div className="flex flex-col items-center sm:w-full sm:gap-5">
          <Nav />
          <Rtosavings />
        </div>
      </div>     
    </div>
  );
}

export default App;
