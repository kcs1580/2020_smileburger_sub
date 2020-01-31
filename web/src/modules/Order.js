// Action 타입 정의
const ADDLIST = 'Order/ADDLIST';
const READYNOW = 'Order/READYNOW';

// addlist에 액션 생성 함수
export const addlist = (order) => ({
    type: ADDLIST,
    data: order
});


// 초기값 설정
const initialState = {
    allNumber: 100,
    orderList: []
};

export default function Order(state = initialState, action) {
    switch (action.type) {
        case ADDLIST:
            const additem = {
                orderNum: state.allNumber,
                itemList: action.data,
                isReady: false
            }
            return {
                allNumber: state.allNumber + 1,
                orderList: state.orderList.concat(additem)
            };
        default:
            return state;
    }
}


// orederList: [
//     {
//         orederNum: 1,
//         itemList: [
//             {
//                 menu: '상스치콜',
//                 cost: 10000,
//                 ea: 1
//             },
//             {
//                 menu: '상스치콜',
//                 cost: 10000,
//                 ea: 1
//             }
//         ]
//     }
// ]