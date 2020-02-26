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
                    name: "Task name 1",
                    description: "Task description Task description",
                    priority: 3
                },
                {
                    id: 2,
                    name: "Task name 2",
                    description: "Task description Task description",
                    priority: 2
                },
                {
                    id: 3,
                    name: "Task name 3",
                    description: "Task description Task description Task description Task description",
                    priority: 1
                }
            ],
            inputValueName: "",
            inputValueDescription: "",
            inputValuePriority: "",
            priorityLabels: [ " ", "!!!", "!!", "!"]
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

    render() {
        return (
            <div className="tracker">
                <div className="tracker-content">
                    <div className="order">
                        <button className="order--button" onClick={this.changeOrderByName}>Order by name </button>
                        <button className="order--button" onClick={this.changeOrderByPriority}> Order by priority </button>
                    </div>
                    <ul className="task-list">
                        {this.state.tasks.map((value) => {
                            return <li key={value.id} className="task-list_item">
                                <span className="task-list_priority">
                                    {this.state.priorityLabels[value.priority] ? this.state.priorityLabels[value.priority] : this.state.priorityLabels[0]}
                                </span>
                                <span className="task-list_name"> {value.name}</span>
                                <div className="task-list_description">{value.description}</div></li>
                        })}
                    </ul>
                    <div className="input">
                        <p className="input-title"> Add new task</p>
                        <input className="inputFormName input-field" placeholder="Name" value={this.state.inputValueName} onChange={this.updateTaskName} />
                        <input className="inputValuePriority input-field" placeholder="Priority" value={this.state.inputValuePriority} onChange={this.updateTaskPriority} />
                        <textarea className="inputFormDescription input-field" placeholder="Description" value={this.state.inputValueDescription} onChange={this.updateTaskDescription} />
                        <button className="order--button" onClick={this.addTask}> Add task</button>
                    </div>
                </div>
            </div>
        );
    }
}
