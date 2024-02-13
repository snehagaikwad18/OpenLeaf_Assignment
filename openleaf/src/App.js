
import './App.css';
import Nav from './components/Nav';
import Rtosavings from './components/Rtosavings';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="bg-gray-200 h-screen w-screen flex">
      <Sidebar />
      <div className="flex flex-col items-center w-full gap-5 ">      
        <Nav />
        <Rtosavings/>
      </div>
      
    </div>
  );
}

export default App;
