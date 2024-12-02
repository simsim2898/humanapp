import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // CSS 파일 경로 반영

const Signup = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        // 회원가입 로직
        alert('회원가입 완료!');
        navigate('/login'); // 회원가입 완료 후 로그인 화면으로 이동
    };

    return (
        <div className="signup-container">
            <div className="signup-logo">
                <img src="/Images/logo.png" alt="Logo" />
            </div>
            <div className="signup-form">
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <input
                    type="text"
                    placeholder="전화번호"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button onClick={handleSignup}>가입 완료</button>
            </div>
        </div>
    );
};

export default Signup;
