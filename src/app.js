import React from 'react'
import ReactDOM from 'react-dom'

import { TextField } from 'material-ui'

let marseCode = require('json!./morse-code.json')

let content = document.getElementById('content');

const contentStyle = {
  display: "flex",
  padding: "10rem",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center"
}

const itemStyle = {
  flex: "0 1 100%"
}

const orangeStyle = {
  marginRight: "0.4rem",
  color: "orange",
  fontSize: "1.4rem"
}

const greenStyle = {
  marginRight: "0.4rem",
  color: "limegreen",
  fontSize: "1.4rem"
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { sourceText: '', targetText: '' }
  }

  render() {
    let sourceText = this.state.sourceText
    let targetText = this.state.targetText

    return (
      <div style={contentStyle}>
        <h2 style={itemStyle}>Hi Cookie, here is the translator for you.</h2>

        <TextField multiLine={true}
                   floatingLabelText="You could input cookie"
                   style={itemStyle}
                   value={sourceText}
                   onChange={this._onSourceChange.bind(this)} />

        <p style={itemStyle}>{ targetText }</p>
      </div>
    )
  }

  _onSourceChange(e) {
    let value = e.currentTarget.value

    this.setState({ sourceText: value, targetText: this._translate(value) })
  }

  _translate(source) {
    let ret = []

    for (let i = 0; i < source.length; i++) {
      let v = marseCode[source[i]]
      if (v) {
        let style = i % 2 === 0 ? orangeStyle : greenStyle
        ret.push(<span style={style}>{v}</span>)
      }
    }

    return ret
  }
}

ReactDOM.render(<App />, content);
