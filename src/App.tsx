import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';

const App = () => {
    const [todos, setTodos] = useState<Array<Todo>>([
        {
            id: 1,
            title: 'Create todos',
            complete: false,
        },
        {
            id: 2,
            title: 'Create comments',
            complete: true,
        },
        {
            id: 3,
            title: 'Create product page',
            complete: true,
        },
    ]);

    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const addTodo: AddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="container">
            <Header />
            <TodoInput addTodo={addTodo} />
            <TodoList items={todos} toggleTodo={toggleTodo} />
        </div>
    );
};

export default App;
