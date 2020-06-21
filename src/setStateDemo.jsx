import React from "react"
export default class SetStateDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  async increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count)
    //   }
    // )
    await this.setStateAsync({ count: this.state.count + 1 })
    console.log(this.state.count)
  }
  setStateAsync(state) {
    return new Promise((resolve, reject) => {
      this.setState(state)
      resolve()
    })
  }
  render() {
    let { count } = this.state
    return (
      <div>
        setState是同步还是异步
        <p>{count}</p>
        <button onClick={this.increment.bind(this)}>增加</button>
      </div>
    )
  }
}
