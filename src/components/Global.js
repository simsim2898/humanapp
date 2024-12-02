import React from 'react';
import Layout from './NavBar/Layout';

const Global = () => {
    return (
        <Layout>
            <div className="global">
                <h1>Global Page</h1>
                <p>여기에 글로벌 관련 데이터를 표시합니다.</p>
            </div>
        </Layout>
    );
};

export default Global;
