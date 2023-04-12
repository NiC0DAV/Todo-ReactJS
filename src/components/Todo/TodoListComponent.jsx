import TodoItemComponent from "./TodoItemComponent";

const TodoListComponent = ({ todos, updateTodo, removeTodo }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
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
