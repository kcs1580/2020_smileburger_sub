import React, {useEffect} from 'react';

const data = [10,11,12,13,14];
const Wating = ({ orderlist }) => {

    const list = data.map((num) => {
        return(<div>{num}</div>)
    })

    console.log(list)

    return (
        <div>
            {list}
        </div>
    );
        
};

export default Wating;
