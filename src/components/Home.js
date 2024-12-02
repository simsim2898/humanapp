import React from 'react';
import Layout from './NavBar/Layout';

const Home = () => {
    return (
        <Layout>
            <div className="home">
                <h1>이 솔</h1>
                <p>운동량: 0 걸음</p>
                <p>운동 기록: 0:00 시간</p>
                <p>소비 칼로리: 0 칼로리</p>
                <p>주간 분석: 7777 평균 걸음 수</p>
            </div>
        </Layout>
    );
};

export default Home;

