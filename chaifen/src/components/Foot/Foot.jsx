import React from 'react'
import './index.css'

export default function Foot() {
    return (
        <div class="todo-footer">
            <label>
                <input type="checkbox" />
            </label>
            <span>
                <span>已完成0</span> / 全部2
            </span>
            <button class="btn btn-danger">清除已完成任务</button>
        </div>
    )
}
