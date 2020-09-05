import React, { Component } from 'react';
import axios from 'axios';

class FollowerList extends Component{
    state = {
        followers: []
    };

    getFollowers(url){
        axios.get(url)
            .then(resp => {
                this.setState({
                    followers: resp.data
                });
            })
            .catch(err => {
                console.log('dt: FollowerList: getFollowers: error: ', err.message);
            });
    }

    render(){
        return(
            <>
                <h1>Followers here...</h1>
            </>
        );
    }
};

export default FollowerList;