const TodoComputedComponent = ({ computedItems, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800">
            <span className="text-gray-400 dark:text-gray-300">
                {computedItems} items left
            </span>
            <button
                className="text-gray-400 dark:text-gray-300"
                onClick={clearCompleted}
            >
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputedComponent;
