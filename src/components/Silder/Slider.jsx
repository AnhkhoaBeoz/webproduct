    import React from 'react';
    import './Silder.scss'
    import IPHONE from '../../assets/images/iphone-14-pro.webp'

    function Slider() {
        return (
            <section className='slider_section'>
                <div className="slider_details">
                    <h2 className="slider_heading">BUY 14 PROMAX</h2>
                    <h4 className="slider_description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam</h4>
                    <button className="slider_btn">BUY NOW</button>
                </div>
                <div className="section_right"><img src={IPHONE} alt="" className="section_img"/></div>

            </section>
        );
    }

    export default Slider;