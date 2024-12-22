import React, { Component } from 'react'
import './index.css'
import Item from '../Item/Item'

 class Main extends Component {
    render() {
        const { todos } = this.props;
        return (
            <ul className="todo-main">
                {todos.map(todo => (<Item key={todo.id} todo={todo}/>))}
            </ul>
        )
    }

}
export default Main;
