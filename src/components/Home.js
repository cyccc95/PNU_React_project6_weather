import Style from './Style.css';
import {Link} from 'react-router-dom';

function Home(){
  return(
    <>
      <div className='homeNav'>일기예보</div>
      <div className='homeContent'>
        <button className='homeButton'>
          <Link to="/page2" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            단기예보
          </Link>
        </button>
        <button className='homeButton'>
          <Link to="/page1" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            중기예보
          </Link>
        </button>
      </div>
    </>
  );
}

export default Home;