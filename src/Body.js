import React from 'react';
import Carousel from './Carousel';

const openMenu = () => {

}

const Body = () => {
    return (
        <div>
            <div className="brand-header">
                <h2 className="brand-name">Welcome to Momoriyan</h2>
                <h4 className="sub-brand">Feeding your Foodie Soul</h4>
                <div className="btn-group">
                    <button className="buttonFilled" onClick={openMenu}>Explore Our Menu</button>
                    {/* <button>Learn More</button> */}
                </div>
            </div>
            {/* <div className="scroll-group">
                <div className="divider"></div>
                <div>
                    
                </div>
            </div> */}
            {/* <Carousel /> */}
        </div>
    )
}

export default Body