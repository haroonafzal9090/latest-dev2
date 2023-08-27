import { BsArrowRight } from 'react-icons/bs';

function Search() {
    return <div className='py-36'>
        <div>
            <h1 className="text-center md:text-4xl text-3xl">
                Search
            </h1>
        </div>
        <div className="flex justify-center">
            <div className="h-[3px] w-9 bg-gray-900 mt-4"></div>
        </div>
        <div className="flex items-center mx-auto gap-x-3 border-b-2 border-black pb-2 md:w-[30%] w-[70%] mt-10">
            <input
                type="text"
                className="px-2 focus:outline-none placeholder-gray-950 w-[100%] bg-transparent"
                size={20}
                placeholder="Type to search"
            />
            <BsArrowRight size={30} />
        </div>
    </div>;
}

export default Search;



