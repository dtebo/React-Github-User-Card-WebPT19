import React from 'react';

const Follower = props => {
    const { follower } = props;

    return(
        <>
            <p>{follower.login}</p>
        </>
    );
};

export default Follower;