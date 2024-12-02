import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // CSS 파일 경로 반영

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // 로그인 로직
        navigate('/home'); // 로그인 성공 시 홈으로 이동
    };

    return (
        <div className="login-container">
            <div className="login-logo">
                <img src="/Images/logo.png" alt="Logo" />
            </div>
            <div className="login-form">
                <input
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="PW"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>로그인</button>
                <p className="signup-link" onClick={() => navigate('/signup')}>
                    회원가입
                </p>
            </div>
        </div>
    );
};

export default Login;
