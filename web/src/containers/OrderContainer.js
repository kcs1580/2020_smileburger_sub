import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Orderdetail from '../components/Orderdetail'

const OrderContainer = () => {
    const orderlist = useSelector(state => state.Order.orderList)
    return <Orderdetail orderlist={orderlist} />
}

export default OrderContainer