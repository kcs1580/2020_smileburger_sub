import React from "react";
import Layout from "../../layout/Layout";
import burger from "../../img/burger.jpg";
import chicken from "../../img/chicken.jpg";
import coke from "../../img/coke.jpg";
import set from "../../img/set.jpg";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class Product extends React.Component {
  handleClick(name) {
    console.log("click!!! ==>> " + name);
  }
  render() {
    return (
      <span className="listtest">
        <TableCell style={{ textAlign: "center" }}>
          <img
            src={this.props.src}
            alt="menu"
            style={{ width: 250 }}
            onClick={() => this.handleClick(this.props.name)}
          />
          <br></br>
          {this.props.name}
        </TableCell>
      </span>
    );
  }
}
const products = [
  { key: "1", src: burger, name: "햄버거임", price: "6000" },
  { key: "2", src: chicken, name: "치킨임", price: "17000" },
  { key: "3", src: coke, name: "콜라임", price: "2500" },
  { key: "4", src: set, name: "세트묵자", price: "20000" }
];

const productData = [
  { key: "4", src: set, name: "세트묵자", price: "20000" },
  { key: "1", src: burger, name: "햄버거임", price: "6000" },
  { key: "2", src: chicken, name: "치킨임", price: "17000" },
  { key: "3", src: coke, name: "콜라임", price: "2500" }
];
const testPageForDB = props => {
  const index = 0;
  // state = {
  //   data: []
  // };
  return (
    <Layout>
      <div>
        DB Test page
        <br></br>
        등록페이지...
        <Table>
          <TableHead>rr</TableHead>
          <TableBody>
            {products.map(p => {
              return <Product key={p.key} src={p.src} name={p.name}></Product>;
            })}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
};
// C:\Users\multicampus\git\s02p12c103\web\src\pages\test\test1_db.jsx
// C:\Users\multicampus\git\s02p12c103\web\src\img\burger.jpg
export default testPageForDB;
