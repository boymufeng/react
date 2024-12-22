import React, { Component } from 'react'
import './index.css'
class Foot extends Component {
    render() {
        let { todos } = this.props;
        if (!todos) {
            console.log('todos is undefined');
            return null;
        }
        let total = todos.length;
        let doneNum = todos.reduce((pre, cur) => pre + (cur.isDone ? 1 : 0), 0);

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>已完成{doneNum}</span> / 全部 {total}
                </span>
                <button className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }

}
export default Foot;
