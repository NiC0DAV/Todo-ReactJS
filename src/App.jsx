import HeaderComponent from "./components/HeaderComponent";
import TodoCreateComponent from "./components/Todo/TodoCreateComponent";
import TodoListComponent from "./components/Todo/TodoListComponent";
import TodoComputedComponent from "./components/Todo/TodoComputedComponent";
import TodoFilterComponent from "./components/Todo/TodoFilterComponent";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItems = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () =>
        setTodos(todos.filter((todo) => !todo.completed));

    const [filter, setFilter] = useState("all");

    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const changeFilterState = (param) => {
        setFilter(param);
    };

    return (
        <div
            className="min-h-screen bg-gray-300 bg-mobile-light bg-contain 
            bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-mobile-dark md:bg-desktop-light dark:md:bg-desktop-dark"
        >
            <HeaderComponent />
            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreateComponent createTodo={createTodo} />
                <TodoListComponent
                    todos={filterTodos()}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
                <TodoComputedComponent
                    computedItems={computedItems}
                    clearCompleted={clearCompleted}
                />
                <TodoFilterComponent
                    changeFilterState={changeFilterState}
                    filter={filter}
                />
            </main>

            <footer className="mt-8 text-center dark:text-gray-300">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
