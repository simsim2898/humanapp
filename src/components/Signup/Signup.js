import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            // 서버로 회원가입 데이터 전송
            const response = await axios.post('http://52.78.26.92:3000/signup', {
                name,
                user_id: id,
                password,
                phone,
            });

            if (response.status === 201) {
                alert('회원가입 완료!');
                navigate('/login'); // 성공 시 로그인 페이지로 이동
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert('이미 존재하는 ID입니다.');
            } else {
                alert('회원가입 중 문제가 발생했습니다.');
            }
            console.error('Signup error:', error);
        }
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
