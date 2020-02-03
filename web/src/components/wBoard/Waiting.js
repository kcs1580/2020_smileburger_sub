import React, { useState } from "react";
import socketio from "socket.io-client";

let onum = [1075];
let num = 1;

const socket = socketio.connect("http://localhost:3001");

const data = [101, 102, 103, 104];
const Waiting = () => {
  const [li, setLi] = useState(0);
  const list = data.map(nu2 => {
    return <div>{nu2}</div>;
  });

  (() => {
    socket.emit("init", { name: onum });
    socket.on("welcome", msg => {
      num = msg;
      console.log(num);
      setLi(num);
    });
  })();

  return (
    <div>
      <div>{num}</div>

      <br />
    </div>
  );
};

export default Waiting;
