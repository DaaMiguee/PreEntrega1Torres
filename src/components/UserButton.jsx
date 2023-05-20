import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const UserButton = () => {
    return (
        <button className='user-button'>
            <FontAwesomeIcon icon={faUser} />
        </button>
    )
}

export default UserButton