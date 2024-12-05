import React, { Component, createRef } from 'react'

export default class App extends Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    console.log(e.target.name)
    console.log(e.target.value)


  }
  render() {
    return (
      <div>
        <form action='' onSubmit={this.handleSubmit}>
          <input type="text" name='username' />
          <input type="text" name='password' />
          <button>提交</button>
        </form>
      </div>
    )

  }
}
