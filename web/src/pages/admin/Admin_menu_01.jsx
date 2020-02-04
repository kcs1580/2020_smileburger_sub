/*

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Admin_menu.css'

class Admin_menu extends Component {
    constructor(props) {
        super(props)

        this.items = []
        // for (let i = 1; i <= 5; i++) {
        this.items.push(1)
        // }
    }

    render() {
        return (
            <div className="menu">
                {this.items.map(i => <div className="menu-item" key={i}>
                    <a
                        href="/Admin_order_list"
                        onClick={this.props.closeCallback}
                        target="_blank">
                        주문 목록
                    </a>
                </div>)}

                {this.items.map(i => <div className="menu-item" key={i}>
                    <a
                        href="/Admin_order_list"
                        onClick={this.props.closeCallback}
                        target="_blank">
                        매장 관리
                    </a>
                </div>)}

                {this.items.map(i => <div className="menu-item" key={i}>
                    <a
                        href="/Admin_order_list"
                        onClick={this.props.closeCallback}
                        target="_blank">
                        키오스크 관리
                    </a>
                </div>)}

                <p className="hint">관리하고자 하는 메뉴를<br></br> 클릭해 주세요</p>
            </div>
        )
    }
}

Admin_menu.propTypes = {
    closeCallback: PropTypes.func.isRequired,
}

export default Admin_menu

*/