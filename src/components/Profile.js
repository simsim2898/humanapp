import React from 'react';
import Layout from './NavBar/Layout';

const Profile = () => {
    return (
        <Layout>
            <div className="profile">
                <h1>Profile Page</h1>
                <p>사용자 정보를 표시하는 페이지입니다.</p>
            </div>
        </Layout>
    );
};

export default Profile;
