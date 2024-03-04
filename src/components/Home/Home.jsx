import React from 'react';
import FuturedProducts from "../FuturedProducts/FuturedProducts.jsx";
import Slider from "../Silder/Slider.jsx";

function Home() {
    return (
        <div>
            <Slider/>
            <FuturedProducts/>
            <Slider/>

        </div>
    );
}

export default Home;