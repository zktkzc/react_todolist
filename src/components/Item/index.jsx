import React, {Component} from "react"
import './index.css'

export default class App extends Component {

    state = {mouse: false} // 鼠标移入移出的状态

    // 鼠标移入、移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    // 删除一个todo的回调
    handleDelete = (id) => {
        if (window.confirm('确定删除吗？')) {
            this.props.deleteTodo(id)
        }
    }

    // 勾选、取消勾选某一个todo的回调
    handleCheck = (id) => {
        return (event) => {
            const {target} = event
            this.props.updateTodo(id, target.checked)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}
                style={{backgroundColor: mouse ? '#ddd' : 'white'}}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}
                        onClick={() => this.handleDelete(id)}>删除
                </button>
            </li>
        )
    }
}
