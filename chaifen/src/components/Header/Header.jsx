import './index.css'

import React from 'react'

export default function Header() {
    return (
        <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    )
}
