import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Redirect } from "react-router-dom";

import HomeLayoutHoc from "./HOC/Home.hoc";

//HOC
import HomeLayout from "./layouts/Homepage.layout";

//Pages
import HomePage from "./pages/HomePage";


function App() {
  return (
      <>
    
        {/* <HomeLayoutHoc exact component={HomePage} path="/"/> */}
        <Redirect from="/" to="/delivery" />
        <HomeLayoutHoc exact component ={HomePage} path="/:type" />
       
      </>
  );
}

export default App;