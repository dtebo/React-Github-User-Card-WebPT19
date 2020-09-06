import React from 'react';

const Follower = props => {
    const { follower } = props;

    return(
        <div className='follower'>
            <p>{follower.login}</p>
        </div>
    );
};

export default Follower;