import React from 'react'

function tracingGrid(props) {
    const { users = [] } = props || [];
    console.log(users, 'from grid')
    return (
        <div>
            Smart Tracing

            <ul>
                { users.length > 0 ? users.map(user => <li key={user._id}>{user.name}</li>) : <span>no data</span> }
            </ul>
        </div>
    )
}

export default tracingGrid
