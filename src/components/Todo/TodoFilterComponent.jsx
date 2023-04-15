const TodoFilterComponent = ({ changeFilterState, filter }) => {
    const filterElements = ["all", "active", "completed"];
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
                {filterElements.map((item) => (
                    <button
                        key={item}
                        className={`${
                            filter === item
                                ? "font-bold text-blue-600 hover:text-gray-400 hover:dark:text-gray-300"
                                : "text-gray-400 hover:text-blue-600 dark:text-gray-300"
                        }`}
                        onClick={() => changeFilterState(item)}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default TodoFilterComponent;
