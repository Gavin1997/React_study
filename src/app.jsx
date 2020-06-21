import React from "react"
// import Home from "./Home"
// import MyNav from "./MyNav"
// import StateComponent from "./StateComponent"

// import ComponentLife from "./ComponentLife"
// import SetStateDemo from "./setStateDemo"
// import IfDemo from "./IfDemo"
// import KeyDemo from "./KeyDemo"
// import FromDemo from "./FromDemo"
// import RefsAndDom from "./RefsAndDom"
import RefsForm from "./RefsForm"
// 用类的形式创建组件,Hook形式
class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  clickChanges = (data) => {
    this.setState({
      title: data,
    })
  }
  // 渲染函数
  render() {
    // const nav1 = ["首页", "视频", "学习"]
    // const nav2 = ["web", "java", "Node"]
    return (
      <div>
        {/* <h1>Hello React Component</h1> */}
        {/* <h3>学习react,最终重要的是,心态</h3> */}
        {/* <Home />
        <MyNav nav={nav1} title="路径导航"></MyNav>
        <MyNav nav={nav2} title="学习导航"></MyNav> */}
        {/* <StateComponent></StateComponent> */}
        {/* <ComponentLife
          title={this.state.title}
          clickChanges={this.clickChanges}></ComponentLife> */}
        {/* <SetStateDemo></SetStateDemo> */}
        {/* <IfDemo></IfDemo> */}
        {/* <KeyDemo></KeyDemo> */}
        {/* <FromDemo></FromDemo>
         */}
        {/* <RefsAndDom></RefsAndDom>
         */}
        <RefsForm></RefsForm>
      </div>
    )
  }
}

export default App
