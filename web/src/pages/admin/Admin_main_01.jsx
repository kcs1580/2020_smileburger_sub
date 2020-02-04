import React, { Component } from 'react'
import { render } from 'react-dom'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import Admin_menu from './Admin_menu'

const contentStyles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
}

class Admin_main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
        }
    }

    openMenu() {
        this.setState({ menuOpen: true })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }

    render() {
        return <div>
            <br></br>
            <CheeseburgerMenu
                isOpen={this.state.menuOpen}
                closeCallback={this.closeMenu.bind(this)}>
                <Admin_menu closeCallback={this.closeMenu.bind(this)} />
            </CheeseburgerMenu>

            <HamburgerMenu
                isOpen={this.state.menuOpen}
                menuClicked={this.openMenu.bind(this)}
                width={50}
                height={50}
                strokeWidth={10}
                rotate={0}
                color='blue'
                borderRadius={0}
                animationDuration={0.5}
            />

            <div style={contentStyles}>
                <br></br>
                <h1>솔라시 키오스크 관리</h1>
                <p>관리자 페이지에 오신것을 환영합니다.</p>
                <br></br><br></br>
                <img src="admin_img.png" alt="admin Image"></img>
            </div>
        </div>
    }
}

render(<Admin_main />, document.getElementById('root'))

export default Admin_main;  