import React from 'react'
import ReactDOM from 'react-dom'

let content = document.getElementById('content');

class App extends React.Component {
  render() {
    return (
      <div>Cookie Lee</div>
    )
  }
}

ReactDOM.render(<App />, content);
