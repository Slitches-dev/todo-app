type Todo = {
    id: number;
    title: string;
    complete: boolean;
};

type togleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: Todo) => void;
