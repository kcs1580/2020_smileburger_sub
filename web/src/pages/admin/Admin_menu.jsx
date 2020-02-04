import React, { useState } from 'react'
import './Admin_menu.css'

const Admin_menu = () => {
    return (
        <div className="menu" >
            <div className="menu-item">
                <a
                    href="/Admin_order_list"
                    target="_blank">
                    주문 목록
                </a>
            </div>

            <div className="menu-item">
                <a
                    href="/Admin_order_list"
                    target="_blank">
                    매장 관리
                </a>
            </div>

            <div className="menu-item">
                <a
                    href="/Admin_order_list"
                    target="_blank">
                    키오스크 관리
                </a>
            </div>
            <p className="hint">관리하고자 하는 메뉴를<br></br> 클릭해 주세요</p>
        </div >
    );
};

export default Admin_menu
