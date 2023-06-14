import React from "react";
import img1 from './resource/home_01.png';
import img2 from './resource/home_02.png';
import img3 from './resource/home_03.png';

const Home = () => {
    return (
        <div className="home_images">
            <div>
                <img className={"image horizontal"} src={img1} alt={"img1"}/>
            </div>
            <div>
                <img className={"image vertical"} src={img2} alt={"img2"}/>
                <img className={"image vertical"} src={img3} alt={"img3"}/>
            </div>
        </div>
    );
}

export default Home;
