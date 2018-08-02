import React, {Component} from "react"
import {jsonToReact} from "../../util/core"


class JsonSandbox extends Component {
  render() {
    return jsonToReact(null, {
      tag: "div",
      props: {style: {textAlign: "left"}, onClick: () => console.log("hello")},
      content: [{tag: "p", content: ["hello"]}],
    })
  }
}

export default JsonSandbox