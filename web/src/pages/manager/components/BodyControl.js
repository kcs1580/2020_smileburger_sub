import React from 'react';
import Orderdetail from './Orderdetail';
import Salesdetail from './Salesdetail'

const BodyControl = (props) => {
    switch (props.idx) {
        case 0:
            return (<Orderdetail />)
        case 1:
            return (<Salesdetail />)
        case 2:
            return (<Orderdetail />)
        case 3:
            return (<Orderdetail />)
        default:
            return (<Orderdetail />)
    }

}

export default BodyControl