import React, { Component } from 'react';

class GithubUser extends Component{
    state = {
        userinfo: {}
    };

    render(){
        return(
            <div className='user-info-container'>
                <h1>User Info Here...</h1>
            </div>
        );
    }
};

export default GithubUser;