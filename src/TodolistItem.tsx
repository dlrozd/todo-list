import {Task} from "./App.tsx";

type Props = {
    title: string
    tasks: Task[]
    date?: string
}

export const TodolistItem = ({title, tasks, date}: Props) => {

    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {tasks.map((task) => {

                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                            </li>)
                    }
                )}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div>{date}</div>
        </div>
    )
}

