import { FC, useEffect, useRef, useState } from 'react';
import styles from './TodoInput.module.css';

interface TodoInputProps {
    addTodo: AddTodo;
}

const TodoInput: FC<TodoInputProps> = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') createTodo();
    };

    const createTodo = () => {
        if (title) {
            addTodo({ id: Date.now(), title, complete: false });
            setTitle('');
        }
    };

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Create a new todo..."
                className={styles.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={inputRef}
            />
        </div>
    );
};

export default TodoInput;
