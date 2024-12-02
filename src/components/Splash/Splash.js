import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css'; // CSS 파일 경로 반영

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 2000); // 2초 후 로그인 화면으로 이동
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="splash">
            <img src="/Images/logo.png" alt="Logo" />
        </div>
    );
};

export default Splash;
