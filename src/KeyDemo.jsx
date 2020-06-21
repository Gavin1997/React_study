import React from "react"
export default class KeyDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      userInfo: [
        {
          name: "gavin",
          age: 20,
          sex: "男",
          jobs: [11, 22, 33],
        },
        {
          name: "gavin2",
          age: 18,
          sex: "女",
          jobs: [11, 22, 33],
        },
        {
          name: "gavin3",
          age: 16,
          sex: "女",
          jobs: [11, 22, 33],
        },
      ],
    }
  }
  clickHandler = () => {
    this.setState({
      userInfo: this.state.userInfo.concat({
        name: "gavin4",
        age: 80,
        sex: "那女",
        jobs: [55, 66, 77],
      }),
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
        <h1>keyDemo</h1>
        <ul>
          {this.state.userInfo.map((ele, index) => {
            return (
              <li key={index}>
                <span>{ele.name}</span>
                <span>{ele.age}</span>
                <span>{ele.sex}</span>
                <div>
                  {ele.jobs.map((item, chidIndex) => {
                    return <span key={chidIndex}>{item}</span>
                  })}
                </div>
              </li>
            )
          })}
        </ul>
        <button onClick={this.clickHandler}>添加</button>
      </div>
    )
  }
}
