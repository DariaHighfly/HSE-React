import {Component} from "react";
import React from "react";
import "./style.css"

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortByName: false,
            maxId : 3,
            tasks: [
                {
                    id: 1,
                    name: "Task name 3",
                    description: "Task description Task description",
                    priority: 1
                },
                {
                    id: 2,
                    name: "Task name 2",
                    description: "Task description Task description",
                    priority: 2
                },
                {
                    id: 3,
                    name: "Task name 1",
                    description: "Task description Task description Task description Task description",
                    priority: 3
                }
            ],
            inputValueName: "",
            inputValueDescription: "",
            inputValuePriority: "",
        };
    }
    sortArray = () => {
        let task_list = [].concat(this.state.tasks);
        if (this.state.sortByName) {
            task_list.sort((a,b) => (a.name).localeCompare(b.name));
        } else {
            task_list.sort((a,b) => a.priority - b.priority);
        }
        this.setState({tasks: task_list});
    };

    changeOrderByName = () => {
        this.setState({sortByName: true}, () => {
            this.sortArray()
        })
    };

    changeOrderByPriority = () => {
        this.setState({sortByName: false}, () => {
            this.sortArray()
        })
    };

    addTask = () => {
        let task_list = [].concat(this.state.tasks);
        task_list.push({
            id: this.state.maxId + 1,
            name: this.state.inputValueName,
            description: this.state.inputValueDescription,
            priority: this.state.inputValuePriority,
        });
        this.setState({tasks: task_list}, () => {
            this.sortArray()
        });
        this.setState({maxId: this.state.maxId + 1});
        this.setState({inputValueName: ""});
        this.setState({inputValueDescription: ""});
        this.setState({inputValuePriority: ""});
    };

    updateTaskName = (event) => {
        this.setState({inputValueName: event.target.value});
    };

    updateTaskDescription = (event) => {
        this.setState({inputValueDescription: event.target.value});
    };

    updateTaskPriority = (event) => {
        this.setState({inputValuePriority: event.target.value});
    };

    deleteItem = (event) => {
        let array = [...this.state.tasks];
        let index = array.findIndex((elem) => { return Number(elem.id) === Number(event.target.value)});
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({tasks: array});
        }
    };

    render() {
        return (
            <div className="tracker">
                <div className="tracker-content">
                    <div className="input">
                        <div className="column">
                            <p className="column_title">Name</p>
                            <input className="inputFormName input-field" placeholder="Name"
                                   value={this.state.inputValueName} onChange={this.updateTaskName} />
                        </div>
                        <div className="column">
                            <p className="column_title">Priority</p>
                            <select className="inputValuePriority input-field" placeholder="1"
                                    value={this.state.inputValuePriority} onChange={this.updateTaskPriority}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="column">
                            <p className="column_title" >Description</p>
                            <input className="inputFormDescription input-field" placeholder="Description"
                                      value={this.state.inputValueDescription} onChange={this.updateTaskDescription} />
                        </div>
                        <br/>
                        <button className="button add__button" onClick={this.addTask}>Add task</button>
                        <div className="column order">
                            <p className="column_title" >Order by</p>
                            <span>
                                <button
                                    className={`button order__button " ${this.state.sortByName ? "order__button_selected" : ""}`}
                                    onClick={this.changeOrderByName}>Name</button>
                                <button
                                    className={`button order__button " ${this.state.sortByName ? "" : "order__button_selected"}`}
                                    onClick={this.changeOrderByPriority}>Priority</button>
                            </span>
                        </div>
                    </div>
                    <ul className="task-list">
                        {this.state.tasks.map((value) => {
                            return <li key={value.id} className="task-list_item">
                                <div>
                                    <span className="task-list_priority">
                                    {value.priority} &#8226;
                                </span>
                                    <span className="task-list_name"> {value.name}</span>
                                    <div className="task-list_description">{value.description}</div>
                                </div>
                                <div>
                                    <button className="task-list_item__delete-button"
                                            value={value.id} onClick={this.deleteItem}> ✕ </button>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
