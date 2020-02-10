import React from 'react';

import axios from 'axios';

function BoardForm(props, nextProps, brdstore, brdtitle, brdwriter) {

    /*
    const shouldComponentUpdate = () => {
        let selectedBoard = nextProps.selectedBoard;
        if (!selectedBoard.brdno) {
            brdtitle.value = "";
            brdwriter.value = "";
            return true;
        }

        brdtitle.value = selectedBoard.brdtitle;
        brdwriter.value = selectedBoard.brdwriter;
        return true;
    };
    */

    const componentDidMount = () => {
        _dbTest()
    };

    const _dbTest = async () => {
        const res = await axios.get('/api/test');
        console.log(res.data)
    };

    const handleSubmit = e => {
        e.preventDefault();
        let selectedBoard = props.selectedBoard;
        let data = {
            brdstore: brdstore.value,
            brdwriter: brdwriter.value,
            brdtitle: brdtitle.value
        }
        if (selectedBoard.brdno) {
            data.brdno = selectedBoard.brdno
            data.brddate = selectedBoard.brddate
        }
        props.onSaveData(data);
    };

    return (
        <form onSubmit={handleSubmit} align="center">
            <input placeholder="지점" ref={node => brdstore = node} />
            <input placeholder="주문자" ref={node => brdtitle = node} />
            <input placeholder="주문수" ref={node => brdwriter = node} />
            <button type="submit">확인</button>
        </form>
    );
};

export default BoardForm;

