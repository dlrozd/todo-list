import './App.css'
import {TodolistItem} from './TodolistItem'

export const App = () => {

    return (
        <div className="app">
            <TodolistItem title="What to learn"/>
            <TodolistItem title="Songs"/>
            <TodolistItem title="Books"/>
        </div>
    )
}

export default App
