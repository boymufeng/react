import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Foot from '../Foot/Foot'

class TodoList extends Component {

    state = {
        todos: [
            {
                id: nanoid(),
                title: "吃饭",
                isDone: false
            },
            {
                id: nanoid(),
                title: "睡觉",
                isDone: true
            },
        ]
    }

    render() {
        let {todos}=this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    <Main todos={todos}/>
                    <Foot todos={todos} />
                </div>
            </div>

        )
    }
}
export default TodoList;
