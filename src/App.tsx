import './App.css'
import {TodolistItem} from './TodolistItem'

export type Task = {
    id: number,
    title: string,
    isDone: boolean,
}

export const App = () => {

    const tasks1: Task[]  = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'TypeScript', isDone: false},
        {id: 6, title: 'NodeJS', isDone: false},
    ]
    const tasks2: Task[] = []

    return (
        <div className="app">
            <TodolistItem title="What to learn" tasks={tasks1} date={ '21-09-2025'}/>
            <TodolistItem title="Songs" tasks={tasks2} />
        </div>
    )
}

export default App
