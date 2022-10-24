import WeatherMain from './components/WeatherMain';
import WeatherMain2 from './components/WeatherMain2';
import Home from './components/Home';
import Nav from './components/HomeButton';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/PNU_React_project6_weather" element={<Home />} />
      <Route path="/PNU_React_project6_weather/page1" element={<WeatherMain />} />
      <Route path="/PNU_React_project6_weather/page2" element={<WeatherMain2 />} />
    </Routes>
  );
}

export default App;
