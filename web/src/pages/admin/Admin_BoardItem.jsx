import React from 'react';

import axios from 'axios';

function BoardRow(props) {

    const handleRemove = () => {
        const { row, onRemove } = props;
        onRemove(row.brdno);
    };

    const handleSelectRow = () => {
        const { row, onSelectRow } = props;
        onSelectRow(row);
    };

    const componentDidMount = () => {
        _dbTest()
    };

    const _dbTest = async () => {
        const res = await axios.get('/test');
        console.log(res.data)
        console.log("#################@@@@@@@@@@@@@@@@@@@@@############################")
    };

    return (
        <tr>
            <td>{props.row.brdno}</td>
            <td>{props.row.brdstore}</td>
            <td><a onClick={handleSelectRow}>{props.row.brdtitle}</a></td>
            <td>{props.row.brdwriter}</td>
            <td>{props.row.brdcost}</td>
            <td>{props.row.brddate.toLocaleString('ko-KR')}</td>
            <td><button onClick={handleRemove}>X</button></td>
        </tr>
    );
};

export default BoardRow