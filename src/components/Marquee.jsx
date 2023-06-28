import React, { useEffect, useState } from "react";

export default function Marquee() {
  const len = 8;
  const cells = [];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((v) => {
        if (v < len - 1) {
          return v + 1;
        }
        return 0;
      });
    }, 2000);
    return () => clearInterval(timer); //组件销毁时秦楚定时器
  }, []);

  for (let i = 0; i < len; i++) {
    cells.push(
      <h1
        style={{
          transform: `translate3D(0,${index === i ? "0" : "-100"}%,0)`,
          transition: `${index === i ? "transform .8s ease" : "none"}`
        }}
        key={i}
      >
        你好啊，这是第{i}次！
      </h1>
    );
  }

  return (
    <div className="App">
      <h1>跑马灯效果</h1>
      <div className="main"> {cells}</div>
    </div>
  );
}
