import MoonIcon from "./icons/MoonIcon";

const HeaderComponent = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
                    Todo
                </h1>
                <button>
                    <MoonIcon />
                </button>
            </div>
        </header>
    );
};

export default HeaderComponent;
