import React, {Component} from "react"
import JsonSandbox from "../JsonSandbox/JsonSandbox"
import {jsonToReact} from "../../util/core"

class Layout extends Component {
  render() {
    return jsonToReact(null, {tag: "div", content: [{tag: JsonSandbox}]})
  }
}

export default Layout