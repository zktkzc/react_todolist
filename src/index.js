// 引入 React 核心库
import React from "react"
// 引入 ReactDom
import {createRoot} from 'react-dom/client'
// 引入 App 组件
import App from './App'

// 渲染 App 组件到页面
const root = createRoot(document.getElementById('root'))
root.render(<App/>)
