import HeaderComponent from "./components/HeaderComponent";
import TodoCreateComponent from "./components/Todo/TodoCreateComponent";
import TodoListComponent from "./components/Todo/TodoListComponent";
import TodoComputedComponent from "./components/Todo/TodoComputedComponent";
import TodoFilterComponent from "./components/Todo/TodoFilterComponent";
import { useState } from "react";

const initialStateTodos = [
    {
        id: 1,
        title: "Go to  the gym",
        completed: true,
    },
    {
        id: 2,
        title: "Complete ReactJS course",
        completed: false,
    },
    {
        id: 3,
        title: "Check JS course to study",
        completed: false,
    },
    {
        id: 4,
        title: "10 minuted meditation",
        completed: false,
    },
    {
        id: 5,
        title: "Pick up groceries",
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

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

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <HeaderComponent />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreateComponent createTodo={createTodo} />
                <TodoListComponent
                    todos={todos}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
                <TodoComputedComponent
                    computedItems={computedItems}
                    clearCompleted={clearCompleted}
                />
                <TodoFilterComponent />
            </main>

            <footer className="mt-8 text-center">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
