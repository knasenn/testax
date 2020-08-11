import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import readme from './view/README.md'

class Report extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(readme).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div className="content">
        <h3><a href="https://github.com/knasenn/jsramverk">Github link</a></h3>
        <ReactMarkdown source={this.state.terms} />
      </div>
    )
  }
}

export default Report
