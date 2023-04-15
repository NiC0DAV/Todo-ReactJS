import TodoItemComponent from "./TodoItemComponent";

const TodoListComponent = ({ todos, updateTodo, removeTodo }) => {
    return (
        <div className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItemComponent
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default TodoListComponent;
