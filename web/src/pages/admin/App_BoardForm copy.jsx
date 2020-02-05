import React, { Component } from 'react';


class BoardForm extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        let selectedBoard = nextProps.selectedBoard;
        if (!selectedBoard.brdno) {
            this.brdtitle.value = "";
            this.brdwriter.value = "";        
            return true;
        }
        
        this.brdtitle.value = selectedBoard.brdtitle;
        this.brdwriter.value = selectedBoard.brdwriter;        
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard;
        let data = {
            brdwriter: this.brdwriter.value,
            brdtitle: this.brdtitle.value
        }
        if (selectedBoard.brdno) {
            data.brdno = selectedBoard.brdno
            data.brddate = selectedBoard.brddate
        }        
        this.props.onSaveData(data);
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="주문자" ref={node => this.brdtitle = node}/>
                <input placeholder="주문수" ref={node => this.brdwriter = node}/>
                <button type="submit">확인</button>
            </form>
        );
    }
}

export default BoardForm;

