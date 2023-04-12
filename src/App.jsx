import HeaderComponent from "./components/HeaderComponent";
import TodoCreateComponent from "./components/Todo/TodoCreateComponent";
import TodoListComponent from "./components/Todo/TodoListComponent";
import TodoComputedComponent from "./components/Todo/TodoComputedComponent";
import TodoFilterComponent from "./components/Todo/TodoFilterComponent";

// TODO -- SIEMPRE SE DEBE ELABORAR MOBILE FIRST IMP
const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <HeaderComponent />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreateComponent />
                <TodoListComponent />
                <TodoComputedComponent />
                <TodoFilterComponent />
            </main>

            <footer className="mt-8 text-center">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
