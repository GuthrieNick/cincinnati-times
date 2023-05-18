import React from "react";
import './Banner.css';
import {FaBars, FaUser, FaAngleDown} from 'react-icons/fa';
import {Outlet} from 'react-router-dom';

const Banner = () => (
    <>
        <div id='banner'>
            <div id='banner-content'>
                <FaBars size='25' id='banner-bars'/>
                <h1 id='banner-title'><a href='/'>The Cincinnati Times</a></h1>
                <FaUser size='25' id='banner-user' color='white'/>
                <FaAngleDown size='18' id='banner-user-more'/>
            </div>
            <hr/>
        </div>
        <Outlet/>
    </>
)

export default Banner;
