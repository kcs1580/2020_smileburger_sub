import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { addlist } from '../modules/Order'
import TestButton from './testButton'

const TestUpload = () => {
    const dispatch = useDispatch()

    const store = useSelector(state => ({
        orderList: state.Order.orderList
    }))
    console.log(store)

    const onClick = () => {
        axios
            .get('http://localhost:3001/test/', {
                params: {
                    menu: "상하이 스파이시",
                    cost: 4000,
                    ea: 1,
                    // allcost: 4000,
                    // isPack: true
                }
            })
            .then((res) => {
                const { data } = res;
                dispatch(addlist(data))
            })
            .catch((err) => {
                console.log(err)
            })

    }



    return (
        <TestButton click={onClick} />

    )
}

export default TestUpload




// const TestUpload = () => {
//     
// }

// export default TestUpload