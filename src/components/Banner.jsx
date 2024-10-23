const Banner = () => {
    return (
        <div className="bg-cover  bg-no-repeat rounded-3xl md:w-full  h-full   md:h-[35.5rem] mb-10   "
            style={{
                backgroundImage: "url(https://i.ibb.co.com/3kYtv41/banner.png)",
            }}>
            <div className="w-9/12  mx-auto flex flex-col justify-center items-center, text-center h-full  space-y-6 py-4">
                <h1 className="text-white md:text-[3.25rem]">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-white text-lg font-normal">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div>
                    <button className="btn font-bold btn-outline hover:bg-[#0BE58A] hover:text-black rounded-full text-white">Explore Now</button>
                    <button className="btn font-bold btn-outline md:ml-5 hover:bg-[#0BE58A] hover:text-black rounded-full text-white">Secondary</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;