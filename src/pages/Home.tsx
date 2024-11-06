import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "../components/Navbar";
const Home = () => {
  return (

      <div className="container home__content">
        <div>
          <p className="upper-case">
            So, you want to travel to
          </p>
          <p className="txt-1 upper-case">
            Space
          </p>
          <p className="txt-9">
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className="home__button flex flx-col fl-col-center">
          <NavLink to="destination" className="btn">explore</NavLink>

          {/* <a className="btn" href="destination-moon.html">explore</a> */}
        </div>
      </div>
   
  );
};
export default Home;
