import React from 'react'
import './index.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Foot from '../Foot/Foot'

export default function TodoList() {
    return (
        <div class="todo-container">
            <div class="todo-wrap">
                <Header />
                <Main />
                <Foot />
            </div>
        </div>
    )
}
