import weather from '../jsonData/weather.json';
import Stlye1 from "./Style1.css";

function WeatherDay(props){
  const weatherData = weather.response.body.items.item[0];
  
  let keys = [`rnSt${props.day}Am`,`rnSt${props.day}Pm`,`wf${props.day}Am`,`wf${props.day}Pm`]

  // let items = [];
  // for(let k of keys){
  //   items.push(weatherData[k])
  // }
  // console.log(items)
  return(
    <div className='main1'>
      <div className='content1'>
        <div>{props.day}일 후</div>
        <div>오전 강수량</div>
        <div>{weatherData[keys[0]]}%</div>
      </div>
      <div className='content1'>
        <div>{props.day}일 후</div>
        <div>오후 강수량</div>
        <div>{weatherData[keys[1]]}%</div>
      </div>
      <div className='content1'>
        <div>{props.day}일 후</div>
        <div>오전 날씨예보</div>
        <div>{weatherData[keys[2]]}</div>
      </div>
      <div className='content1'>
        <div>{props.day}일 후</div>
        <div>오후 날씨예보</div>
        <div>{weatherData[keys[3]]}</div>
      </div>
    </div>
  );
}

export default WeatherDay;