import React, { Component } from 'react';
import axios from 'axios';

import Follower from './Follower';

import './followers.css';

class FollowerList extends Component{
    constructor(props){
        super(props);
        this.state = {
            followers: []
        };
    }

    componentDidMount(){
        this.getFollowers(this.props.url);
    }

    componentDidUpdate(prevProps){
        if(this.props.username !== prevProps.username){
            this.getFollowers(this.props.username);
        }
    }

    getFollowers(url){
        axios.get(url)
            .then(resp => {
                this.setState({
                    followers: resp.data
                });
            })
            .catch(err => {
                console.error('dt: FollowerList: getFollowers: error: ', err);
            });
    }

    render(){
        return(
            <div className='follower-list'>
                {this.state.followers && this.state.followers.map(follower => {
                    return <Follower follower={follower} />
                })}
            </div>
        );
    }
};

export default FollowerList;