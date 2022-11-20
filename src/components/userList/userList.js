import React from 'react';

function UsersList(props) {

    console.log(props)

    return (
        <div>
            {props.usersList.map(user => <p>{user}</p>)}
        </div>
    );
}

export default UsersList;