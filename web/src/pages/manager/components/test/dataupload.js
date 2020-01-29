import axios from 'axios';

export default function testInput() {
    return (
        axios
            .get('http://localhost:3001/test/', {
                params: {
                    menu: "상하이 스파이시",
                    cost: 4000,
                    ea: 1,
                    allcost: 4000,
                    isPack: true
                }
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    )
}
