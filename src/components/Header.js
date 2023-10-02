import React from 'react'

import Main from './Main'
import './Header.css'

const Header = () => {
    return (
        <div className='body'>
            <header>
                <i class="fa-solid fa-chevron-left"></i>
                <div className='header-title'>Reviews</div>
                <i class="fa-solid fa-circle-plus"></i>
            </header>
            <Main />
        </div>

    )
}

export default Header