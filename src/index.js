import React from "react"
import ReactDOM from "react-dom"

// 全家桶
import App from "./app.jsx"

// const react = "react"

// () :如果存在标签结构,并且标签结构需要换行 需要()换行
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello world</h1>
//       <h2>It is{new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(
//     // JSX语法
//     // <App />,
//     element,
//     // document.get() 获取要插入的容器
//     document.getElementById("root")
//   )
// }

// setInterval(tick, 1000)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

ReactDOM.render(<App></App>, document.getElementById("root"))
