import weather2 from '../jsonData/weather2.json';
import item from '../jsonData/item.json';
import Style2 from './Style2.css';
import HomeButton from './HomeButton';
import Home from './Home';

function WeatherMain2(){
  const wData = weather2.response.body.items.item;
  const items = item;

  const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
  const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };
  
  console.log(wData)

  // object.entries : key, value 쌍 => m[0] : key, m[1] : value
  // const lis = Object.entries(wData).map((m) => 
  //   <div className='content' key={m[1].category}>
  //     <div>{items[m[1].category][0]}</div>
  //     <div>{m[1].obsrValue} {items[m[1].category][1]}</div>
  //   </div>
  // )
  const lis = Object.entries(wData).map((m) => 
    (m[1].category === 'PTY')
      ?
    <div className='content2' key={m[1].category}>
      <div>{items[m[1].category][0]}</div>
      <div>{pty[m[1].obsrValue]}</div>
    </div>
      : (m[1].category === 'SKY') ?
    <div className='content2' key={m[1].category}>
      <div>{items[m[1].category][0]}</div>
      <div>{pty[m[1].obsrValue]}</div>
    </div>
      :  
    <div className='content2' key={m[1].category}>
      <div>{items[m[1].category][0]}</div>
      <div>{m[1].obsrValue} {items[m[1].category][1]}</div>
    </div>  
  )
  

  
  

  return (
    <>
      <div className='nav2'>날씨예보 - 단기예보</div>
      <HomeButton />
      <div className='main2'>
        {lis}
      </div>
    </>
  );

}

export default WeatherMain2;