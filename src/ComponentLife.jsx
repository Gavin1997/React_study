import React from "react"
export default class ComponentLife extends React.Component {
  componentWillMount() {
    console.log("componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  shouldComponentUpdate() {
    return true
    console.log("showCompoentUpdate")
  }
  componentWillUpdate() {
    console.log("componentWillUpdate")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
  //   组件中的状态: state
  // 以前我们操作页面的元素的变化,都是修改DOM,操作DOM
  // 但是有了React的框架,我们不在推荐DOM,页面元素的改变使用State进行处理
  constructor(props) {
    super(props)
    // 定义
    this.state = {
      count: 10,
      flag: true,
    }
  }
  changeHandler = () => {
    this.setState({
      count: (this.state.count += 1),
    })
  }
  clickChange = () => {
    this.props.clickChanges("我是儿子的数据-传递")
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h1>
          生命周期函数:{count}-{this.props.title}
        </h1>
        <button onClick={this.changeHandler}>修改</button>
        <button onClick={this.clickChange}>修改title</button>
      </div>
    )
  }
}
