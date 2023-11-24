import * as X from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import iconFacebook from '../../assets/icon_facebook.png'
import iconTwitterX from '../../assets/icon_twitterX.png'
import iconInstagram from '../../assets/icon_instagram.png'

export const Header = () =>{
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () =>{
        setOpenMenu(!openMenu)
    }

    const handleCloseMenu = () =>{
        setOpenMenu(!openMenu)
    }

    return(
        <>
            <X.HeaderContainer>
                <Link to='/' className="logo"><h2>Coffee Shop</h2></Link>
                <nav className="navigation">
                    
                    <ul className={openMenu ? 'nav_menu active': 'nav_menu'} onClick={handleCloseMenu}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to=''><img src={iconFacebook} alt="Icon Facebook" /></Link></li>
                        <li><Link to=''><img src={iconTwitterX} alt="Icon Facebook" /></Link></li>
                        <li><Link to=''><img src={iconInstagram} alt="Icon Facebook" /></Link></li>
                    </ul>
                    <div className={openMenu ? 'menu active': 'menu'} onClick={handleOpenMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </X.HeaderContainer>
    </>
    )
}