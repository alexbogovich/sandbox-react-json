import {createElement} from "react"

export const jsonToReact = (props, ...jsonElements) =>
  jsonElements.map((e, i) =>
    e.tag ? createElement(e.tag, {key: e.tag + i, ...e.props}, e.content ? jsonToReact(props, ...e.content) : null) : e)