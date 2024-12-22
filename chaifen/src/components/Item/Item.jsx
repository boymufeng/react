import './index.css'
import React, { Component } from 'react'

export default class Item extends Component {
    render(){
        const {todo}=this.props;
        return (
            <li>
                <label>
                    <input type="checkbox" checked={todo.isDone} />
                    <span>{todo.title}</span>
                </label>
                <button className="btn btn-danger">删除</button>
            </li>
        )
    }
    
}
