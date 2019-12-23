import React from 'react';
function Home(props) {
    return(
        <div className={`dashboard`}>
            <h1>Home: </h1>
            <h1>Status: {props.isLoggedIn ? 'USER_LOGGED_IN' : 'USER_NOT_LOGGED_IN'}</h1>
        </div>
    )
}

export default Home;