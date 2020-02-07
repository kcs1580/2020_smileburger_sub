import React from 'react';

function BoardRow(props) {

    const handleRemove = () => {
        const { row, onRemove } = props;
        onRemove(row.brdno);
    };

    const handleSelectRow = () => {
        const { row, onSelectRow } = props;
        onSelectRow(row);
    };

    return (
        <tr>
            <td>{props.row.brdno}</td>
            <td><a onClick={handleSelectRow}>{props.row.brdtitle}</a></td>
            <td>{props.row.brdwriter}</td>
            <td>{props.row.brdcost}</td>
            <td>{props.row.brddate.toLocaleString('ko-KR')}</td>
            <td><button onClick={handleRemove}>X</button></td>
        </tr>
    );
};

export default BoardRow