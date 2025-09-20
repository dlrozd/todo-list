import {Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: Task[]
    date?: string
}

export const TodolistItem = ({title, tasks, date}: Props) => {

    return (
        <div>
            <h3>{title}</h3>
            {tasks.length === 0 ? (
                <p>0 tasks</p>
            ) : (
                <ul>
                    {tasks.map((task) => {

                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button title={"All"}></Button>
                <Button title={"Active"}></Button>
                <Button title={"Completed"}></Button>
            </div>
            <div>{date}</div>
        </div>
    )
}

