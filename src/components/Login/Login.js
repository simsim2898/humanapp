import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const loginData = { username, password };
        try {
            const response = await fetch('http://13.124.16.188:3000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                alert(`로그인 성공! 토큰: ${data.token}`);
                setUsername('');
                setPassword('');
            } else {
                alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
            }
        } catch (error) {
            console.error('로그인 중 오류:', error);
            alert('로그인 중 문제가 발생했습니다.');
        }
    };

    return (
        <div>
            <h1>로그인</h1>
            <input
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
