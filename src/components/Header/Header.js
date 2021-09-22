import React from 'react';

const Header = () => {
   const aStyle={
        margin:'10px'
    }

    const liStyle = {
        backgroundColor : "yellow",
        padding:"10px"
    }


    return (
        <div>
            <ul>
                <li style={liStyle}><a style={aStyle} href="#">Home</a></li>
                <li style={liStyle}><a href="">Country</a></li>
                <li style={liStyle}><a href="">About</a></li>
            </ul>
        </div>
    );
};

export default Header;