import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import markdown from './view/MARKDOWN.md'

class Markdown extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(markdown).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.terms} />
      </div>
    )
  }
}

export default Markdown
