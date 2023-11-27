import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { FC } from 'react';

interface TodoListProps {
    items: Todo[];
    toggleTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ items, toggleTodo }) => {
    return (
        <div className={styles.todoList}>
            {items.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </div>
    );
};

export default TodoList;
