import React from 'react'
import ReactDOM from 'react-dom'

import { TextField } from 'material-ui'

let marseCode = require('json!./morse-code.json')

let content = document.getElementById('content');

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { sourceText: '', targetText: '' }
  }

  render() {
    let sourceText = this.state.sourceText
    let targetText = this.state.targetText

    return (
      <div>
        <TextField multiLine={true}
                   floatingLabelText="You could input cookie"
                   value={sourceText}
                   onChange={this._onSourceChange.bind(this)} />

        <p>{ targetText }</p>
      </div>
    )
  }

  _onSourceChange(e) {
    let value = e.currentTarget.value

    this.setState({ sourceText: value, targetText: this._translate(value) })
  }

  _translate(source) {
    let ret = ''

    for (let i = 0; i < source.length; i++) {
      let v = marseCode[source[i]]
      if (v) {
        ret += v + ' '
      }
    }

    return ret
  }
}

ReactDOM.render(<App />, content);
