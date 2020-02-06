import React, { useState, useCallback } from 'react'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import Admin_menu from './Admin_menu'
import Admin_login from './Admin_login'

const contentStyles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
}

const Admin_main = () => {

    var iscan = false;

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = useCallback(() => {
        setMenuOpen(true);
    }, [menuOpen]);
    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, [menuOpen]);

    return (
        <div>
            <br></br>
            <CheeseburgerMenu
                isOpen={menuOpen}
                closeCallback={closeMenu}>
                <Admin_menu />
            </CheeseburgerMenu>

            <HamburgerMenu
                isOpen={menuOpen}
                menuClicked={openMenu}
                width={50}
                height={50}
                strokeWidth={10}
                rotate={0}
                color='blue'
                borderRadius={0}
                animationDuration={0.5}
            />

            <div style={contentStyles}>
                <h1>솔라시 키오스크 관리</h1>
                <p>관리자 페이지에 오신것을 환영합니다.</p>
                <br></br>
                <img src="admin_img.png" alt="admin Image"></img>
                <Admin_login></Admin_login>
            </div>
        </div>
    );
};

export default Admin_main