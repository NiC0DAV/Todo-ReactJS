import { useState } from "react";

const TodoCreateComponent = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim().length > 0) {
            return setTitle("");
        }

        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 shadow-2xl transition-all duration-1000 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreateComponent;
