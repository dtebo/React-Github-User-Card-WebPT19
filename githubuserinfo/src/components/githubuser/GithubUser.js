import React, { Component } from 'react';
import axios from 'axios';

import * as MUI from '../../materialui/index';

import FollowerList from '../followers/FollowerList';

import './githubuser.css';

class GithubUser extends Component{
    state = {
        userinfo: null
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
        const { userinfo } = this.state;

        return(
            <div className='user-info-container'>
                {userinfo ? (
                    <>
                        <MUI.Card
                            className='user-card'
                        >
                            <MUI.CardHeader
                                avatar={
                                    <MUI.Avatar
                                        aria-label="user"
                                        className='avatar'
                                    >
                                        DT
                                    </MUI.Avatar>
                                }
                                title={
                                    <>
                                        <MUI.Typography
                                            variant='h4'
                                            component='h4'
                                        >
                                            {userinfo.login}
                                        </MUI.Typography>
                                        <MUI.Typography
                                            variant='h5'
                                            component='h5'
                                        >
                                            {userinfo.location}
                                        </MUI.Typography>
                                        <MUI.Typography
                                            variant='body1'
                                            component='body1'
                                            className='bio-text'
                                        >
                                            {userinfo.bio}
                                        </MUI.Typography>
                                    </>
                                }
                            />
                            <MUI.CardContent className='card-content'>
                                <h2>Followers</h2>
                                <FollowerList url={userinfo.followers_url} />
                            </MUI.CardContent>
                        </MUI.Card>
                    </>
                ) : (
                    <h2>No user info found!</h2>
                )}
            </div>
        );
    }
};

export default GithubUser;