import './App.css';
import WeatherCard from './components/Card';
import Sunny from './components/sunny';


function App() {
  return (
    <div className="App">
      <WeatherCard />
      <Sunny/>
    </div>
  );
}

export default App;
