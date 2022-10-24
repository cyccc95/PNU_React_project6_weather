import WeatherMain from './components/WeatherMain';
import WeatherMain2 from './components/WeatherMain2';
import Home from './components/Home';
import Nav from './components/HomeButton';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<WeatherMain />} />
      <Route path="/page2" element={<WeatherMain2 />} />
    </Routes>
  );
}

export default App;
