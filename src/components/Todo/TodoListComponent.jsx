import TodoItemComponent from "./TodoItemComponent";

const TodoListComponent = ({ todos }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItemComponent key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoListComponent;
