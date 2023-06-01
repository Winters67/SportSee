import React from 'react';
import { Link } from 'react-router-dom';
import bodybuilding from "../../assets/icons/bodybuilding.png"
import cycling from "../../assets/icons/cycling.png"
import swimming from "../../assets/icons/swimming.png"
import yoga from "../../assets/icons/yoga.png"
import "../SideBar/SideBar.scss"



/**
 * SideBar Component
 * 
 * This component is responsible for rendering the sidebar with links to the various routes.
 * Each link is represented by an icon for a particular sport.
 *
 * @component
 * @returns {ReactElement} JSX element
 */

const SideBar = () => {
    return (
        <div className='sideBarContainer'>
            <div className='LogoContainer'>

                <Link to="/" >
                    <img src={yoga} alt="Logo yoga" />
                </Link>
                <Link to="/" >
                    <img src={swimming} alt="Logo swimming" />
                </Link>
                <Link to="/" >
                    <img src={cycling} alt="Logo cycling" />
                </Link>
                <Link to="/" >
                    <img src={bodybuilding} alt="Logo bodybuilding" />
                </Link>
            </div>
            <div className='copyright'>
                <p>Copyright, SportSee 2020</p>

            </div>
        </div>
    );
};

export default SideBar;