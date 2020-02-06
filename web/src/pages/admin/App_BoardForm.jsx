import React from 'react';

function BoardForm(props, nextProps, brdtitle, brdwriter) {

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

    const handleSubmit = e => {
        e.preventDefault();
        let selectedBoard = props.selectedBoard;
        let data = {
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
            <input placeholder="주문자" ref={node => brdtitle = node} />
            <input placeholder="주문수" ref={node => brdwriter = node} />
            <button type="submit">확인</button>
        </form>
    );
};

export default BoardForm;

