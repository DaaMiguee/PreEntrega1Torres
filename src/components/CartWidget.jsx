import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
const CartWidget = () => {
    return (
        <div>
            <button className='cart-button'>
                <FontAwesomeIcon icon={faBagShopping} />
                <span className='count'>1</span>
            </button>
        </div>
    )
}

export default CartWidget