import React, { Component } from 'react';
import axios from 'axios';

class GithubUser extends Component{
    state = {
        userinfo: {}
    };

    componentDidMount(){
        this.getUser('dtebo');
    }

    getUser = username => {
        const BASE_URL = 'https://api.github.com/users';

        axios.get(`${BASE_URL}/${username}`)
            .then(resp => {
                this.setState({
                    userinfo: resp.data
                });

                console.log('dt: Github: getUser: ', this.state.userinfo);
            })
            .catch(err => {
                console.log('dt: GithubUser: getUser: error: ', err.message);
            });
    }

    render(){
        return(
            <div className='user-info-container'>
                <h1>User Info Here...</h1>
            </div>
        );
    }
};

export default GithubUser;