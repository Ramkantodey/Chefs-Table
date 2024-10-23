const Header = () => {
    return (
        <div className="my-4">
            <nav className="flex items-center justify-between gap-5 flex-col md:flex-row">
                <div>
                    <h1 className="text-xl md:text-3xl font-bold">Recipe Calories</h1>
                </div>
                <div className="flex items-center gap-12">

                    <h1 className="text-[#5B546A] cursor-pointer"><a>Recipes</a></h1>
                    <h1 className="text-[#5B546A] cursor-pointer"><a>About</a></h1>
                    <h1 className="text-[#5B546A] cursor-pointer"><a>Home</a></h1>

                </div>
                <div className="flex items-center gap-5">
                    <label className="input input-bordered flex items-center gap-2 rounded-full">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-12 rounded-full">
                            <span>R.k</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;