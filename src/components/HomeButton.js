import {Link} from 'react-router-dom';

function HomeButton(){
  return(
    <>
      <div>
        <button className="toHomeButton">
          <Link to="/PNU_React_project6_weather" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            홈
          </Link>
        </button>
      </div>
    </>
  );
}

export default HomeButton;