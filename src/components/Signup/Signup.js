import React, { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = async () => {
        const userData = { name, username, password, phone };
        try {
            const response = await fetch('http://13.124.16.188:3000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert('회원가입 성공!');
                setName('');
                setUsername('');
                setPassword('');
                setPhone('');
            } else {
                alert('회원가입 실패. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('회원가입 중 오류:', error);
            alert('회원가입 중 문제가 발생했습니다.');
        }
    };

    return (
        <div>
            <h1>회원가입</h1>
            <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
            <input
                type="text"
                placeholder="전화번호"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleRegister}>회원가입</button>
        </div>
    );
};

export default Signup;
