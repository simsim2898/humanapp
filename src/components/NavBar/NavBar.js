import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css'; // CSS 파일 경로 반영

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <img
                src="/Images/home-outline.svg"
                alt="Home"
                className="nav-icon"
                onClick={() => navigate('/home')}
            />
            <img
                src="/Images/globe-outline.svg"
                alt="Global"
                className="nav-icon"
                onClick={() => navigate('/global')}
            />
            <img
                src="/Images/person-outline.svg"
                alt="Profile"
                className="nav-icon"
                onClick={() => navigate('/profile')}
            />
        </div>
    );
};

export default NavBar;
