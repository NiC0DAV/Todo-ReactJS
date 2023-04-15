import CheckIcon from "../icons/CheckIcon";
import CrossIcon from "../icons/CrossIcon";

const TodoItemComponent = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed
                        ? `grid flex-none place-content-center 
                        rounded-full border-2 bg-gradient-to-r from-indigo-500
                            via-purple-500 to-pink-500`
                        : "nline-block "
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <CheckIcon />}
            </button>
            <p
                className={`grow text-gray-600 dark:text-gray-300 ${
                    completed && "line-through"
                }`}
            >
                {title}
            </p>
            <button
                className="ml-auto flex-none"
                onClick={() => removeTodo(id)}
            >
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItemComponent;
