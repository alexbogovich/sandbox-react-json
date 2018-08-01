import React, {Component} from "react"


const jsonToRest = (jsonElements, props) =>
  jsonElements.map((e, i) =>
    e.type ? React.createElement(e.type, {key: e.type + i, ...e.settings}, e.children ? jsonToRest(e.children, props) : null) : e)



class JsonSandbox extends Component {
  render() {
    return jsonToRest([{
      type: "div",
      settings: {style: {textAlign: "right"}, onClick: () => console.log("hello")},
      children: [{type: "p", children: ["hello"]}],
    }])
  }
}

export default JsonSandbox