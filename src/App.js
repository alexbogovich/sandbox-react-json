import React, {Component} from "react"
import "./App.css"
import {jsonToReact} from "./util/core"
import logo from "./logo.svg"
import Layout from "./components/Layout/Layout"

class App extends Component {
  render() {
    return jsonToReact(null, {
      tag: "div",
      props: {className: "App"},
      content: [
        {
          tag: "header", props: {className: "App-header"},
          content: [
            {tag: "img", props: {src: logo, className: "App-logo", alt: "logo"}},
            {tag: "h1", props: {className: "App-title"}, content: ["Welcome to React"]},
          ],
        },
        {
          tag: "main",
          content: [{tag: Layout}],
        },
      ],
    })

  }
}

export default App
