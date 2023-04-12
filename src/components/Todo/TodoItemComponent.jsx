import CheckIcon from "../icons/CheckIcon";
import CrossIcon from "../icons/CrossIcon";

const TodoItemComponent = ({ todo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                <CheckIcon />
            </button>
            <p className="grow text-gray-500">{title}</p>
            <button className="ml-auto flex-none">
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItemComponent;
