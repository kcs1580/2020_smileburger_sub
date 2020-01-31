import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Wating from '../components/wBoard/Wating'

const WaitingContainer = () => {
    const orderlist = useSelector(state => state.Order.orderList)
    return <Wating orderlist={orderlist} />
}

export default WaitingContainer