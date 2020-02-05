import React, { useState } from 'react';
import BoardForm from './App_BoardForm';
import BoardItem from './App_BoardItem';

function App() {

    const [state, setState] = useState({
        maxNo: 2,
        boards: [
            {
                brdno: 1,
                brdwriter: '5',
                brdtitle: '솔라시',
                brddate: new Date()
            },
        ],
        selectedBoard: {}
    });

    const handleSaveData = (data) => {
        if (!data.brdno) {
            // new : Insert
            setState({
                maxNo: state.maxNo + 1,
                boards: state.boards.concat({ brdno: state.maxNo, brddate: new Date(), ...data }),
                selectedBoard: {}
            });
        } else if (data.brdno) {                                                        // Update
            setState({
                maxNo: state.maxNo,
                boards: state.boards.map(row => data.brdno === row.brdno ? { ...data } : row),
                selectedBoard: {}
            })
        }
    };

    const handleRemove = (brdno) => {
        setState({
            maxNo: state.maxNo,
            boards: state.boards.filter(row => row.brdno !== brdno),
            selectedBoard: {}
        })
    };

    const handleSelectRow = (row) => {
        setState({
            maxNo: state.maxNo,
            boards: state.boards,
            selectedBoard: row
        });
    };

    return (
        <div className="App-BoardForm">
            <h1>관리자 페이지 - 주문 목록 페이지 입니다.</h1>
            <BoardForm selectedBoard={state.selectedBoard} onSaveData={handleSaveData} />
            <table classname="App-table" border="2">
                <tbody>
                    <tr align="center">
                        <td width="50">번호</td>
                        <td width="100">주문자</td>
                        <td width="100">주문수</td>
                        <td width="200">날짜</td>
                    </tr>
                    {
                        state.boards.map(row =>
                            (<BoardItem key={row.brdno} row={row} onRemove={handleRemove} onSelectRow={handleSelectRow} />)
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default App;