import WeatherDay from "./WeatherDay";
import { useState } from "react";
import Style1 from "./Style1.css";
import HomeButton from "./HomeButton";

function WeatherMain(){
  
  let [day, setDay] = useState(3);

  const selectDay = (e) => {
    setDay(day = e);
  }

  
  return(
    <div>
      <div className="nav1">날씨예보 - 중기예보</div>
      <HomeButton />
      <form>
        <button className="button1" type="submit" onClick={(e) => {e.preventDefault(); selectDay(3);}}>3일 후 날씨</button>
        <button className="button1" type="submit" onClick={(e) => {e.preventDefault(); selectDay(4);}}>4일 후 날씨</button>
        <button className="button1" type="submit" onClick={(e) => {e.preventDefault(); selectDay(5);}}>5일 후 날씨</button>
        <button className="button1" type="submit" onClick={(e) => {e.preventDefault(); selectDay(6);}}>6일 후 날씨</button>
        
      </form>
      <WeatherDay day={day} />
    </div>
  );
}

export default WeatherMain;