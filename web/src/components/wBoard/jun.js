import React,{Fragment} from 'react';



const data = [1,2,3,4,5,6,7];

const jun = () => {

    const list = data.map((num) => (<div>{num}</div>)
    );
    return (
        <div >
          
        {list}
        
    </div>
        
    );
};

export default Done;

