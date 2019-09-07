import React   from 'react';
import logo    from '../images/UCT.svg';

const Home = () => {
    return (
        <div className="uct-logo center-align" >
            <img src={logo} alt="uct-logo"/>
            <h3 >"Welcome to the School of IT"</h3>
      </div>
    );
}

export default Home;