import React from 'react';
import OrderContainer from '../containers/OrderContainer';
import Salesdetail from './Salesdetail'
import TestUpload from './TestUpload';


const BodyControl = (props) => {
    switch (props.idx) {
        case 0:
            return (<OrderContainer />)
        case 1:
            return (<Salesdetail />)
        case 2:
            return (<TestUpload />)
        case 3:
            return (<OrderContainer />)
        default:
            return (<OrderContainer />)
    }

}

export default BodyControl