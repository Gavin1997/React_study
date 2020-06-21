import React from "react"
export default class IfDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogin: false,
      names: ["iwen", "gavin"],
    }
  }
  clickHandler = () => {
    this.setState({
      isLogin: true,
    })
  }
  render() {
    /**
     * 常用的应用:
     *1. 对视图条件进行切换
     * 2. 做缺省值
     */
    const { names } = this.state
    let showView = this.state.isLogin ? <div>iwen</div> : <div>请登录</div>
    return (
      <div>
        <h1>条件渲染:{showView}</h1>
        <button onClick={this.clickHandler}>登录</button>
        {names.length > 0 ? (
          <div>
            {names.map((ele, index) => {
              return <p key={index}>{ele}</p>
            })}
          </div>
        ) : (
          <div>请等待数据正在请求....</div>
        )}
      </div>
    )
  }
}
