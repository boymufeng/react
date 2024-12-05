import './index.css'
import React from 'react'

export default function Item() {
    return (
        <li>
            <label>
                <input type="checkbox" />
                <span>xxxxx</span>
            </label>
            <button class="btn btn-danger">删除</button>
        </li>
    )
}
