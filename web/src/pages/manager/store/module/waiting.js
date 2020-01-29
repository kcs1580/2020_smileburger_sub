// orederList: [
//     {
//         orederNum: 1,
//         itemList: [
//             {
//                 menu: '상스치콜',
//                 cost: 10000,
//                 ea:1
//             },
//             {
//                 menu: '상스치콜',
//                 cost: 10000,
//                 ea:1
//             }
//         ]
//     }
// ]

const ADDLIST = 'order/ADDLIST';

export const addlist = (order) => ({
    type: ADDLIST,
    data: order
});

const initialState = {
    orderNum: 100,
    orderList: []
};

export default function ListUpdate(state = initialState, action) {
    switch (action.type) {
        case ADDLIST:
            const additem = {
                orderNum: state.orderNum,
                itemList: action.data
            }
            return {
                orderNum: state.orderNum + 1,
                orederList: state.orderList.concat(additem)
            };
        default:
            return state;
    }
}