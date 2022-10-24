import {Link} from 'react-router-dom';

function HomeButton(){
  return(
    <>
      <div>
        <button className="toHomeButton">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            홈
          </Link>
        </button>
      </div>
    </>
  );
}

export default HomeButton;