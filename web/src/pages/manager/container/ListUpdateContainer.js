import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Counter from '../components/Counter';
import { addlist } from '../store/module/waiting';

const ListUpdateContainer = (props) => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state., []);
}


// class ListUpdateContainer extends Component { //3

//     handleaddlist = () => {
//         this.props.addlist();
//     };

//     render() {
//         const { number } = this.props;
//         return (
//             <Counter
//                 value={number}
//                 onaddlist={this.handleaddlist}
//             />
//         );
//     }
// }


// const mapStateToProps = ({ counter }) => ({  //2
//     number: counter.number,
// });

// const mapDispatchToProps = { addlist }; //1

// export default connect( // 스토어와 연결
//     mapStateToProps,
//     mapDispatchToProps
// )(CounterContainer);