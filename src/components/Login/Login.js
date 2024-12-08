import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // 필요한 경우 스타일 추가
import axios from 'axios';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://52.78.26.92:3000/login', {
                user_id: id,
                password,
            });

            if (response.status === 200) {
                const { token } = response.data;
                alert(`로그인 성공! 토큰: ${token}`);
                // 로그인 후 필요한 동작 추가 (예: 토큰 저장, 페이지 이동 등)
                navigate('/dashboard'); // 로그인 성공 후 대시보드로 이동
            } else {
                alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('로그인 중 문제가 발생했습니다.');
        }
    };

    return (
        <div className="login-container">
            <h1>로그인</h1>
            <input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>로그인</button>
        </div>
    );
};

export default Login;
