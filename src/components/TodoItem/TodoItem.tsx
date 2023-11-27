import { FC, useState } from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    const { id, title, complete } = todo;
    const [status, setStatus] = useState(complete);

    const toggleStatus = () => setStatus(!status);

    return (
        <div
            className={styles.todo}
            onClick={toggleStatus}
            onChange={() => toggleTodo(id)}
        >
            <span
                className={
                    status === false
                        ? styles.round
                        : `${styles.round} ${styles.active}`
                }
            >
                {status && <img src="/images/icon-check.svg" />}
            </span>
            <p
                className={
                    status === false
                        ? styles.title
                        : `${styles.title} ${styles.active}`
                }
            >
                {title}
            </p>
        </div>
    );
};

export default TodoItem;
