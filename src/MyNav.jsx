import React from "react"
// props不可以被修改
export default class MyNav extends React.Component {
  render() {
    console.log(this.props.nav)
    return (
      <div>
        {/* jsx语法*/}
        <ul>
          {this.props.nav.map((ele, index) => {
            return <li key={index}>{ele}</li>
          })}
        </ul>
      </div>
    )
  }
}
