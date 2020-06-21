import React from "react"
export default class FromDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      value: "",
    }
  }
  handelSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.value)
  }
  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChangeHandler}></input>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}
