import React from 'react';

import './header.css';

const Header = props => {
    return(
        <div className='header'>
            <section className='logo'>
                <h1>GithubUser</h1>
            </section>
            <section className='nav-container'>
                <nav>
                    <a href='#'>Home</a>
                </nav>
            </section>
        </div>
    );
};

export default Header;