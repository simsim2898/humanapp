import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="content">{children}</div>
            <NavBar /> {/* 하단 네비게이션 바 */}
        </div>
    );
};

export default Layout;
