import { MdOutlineChat } from 'react-icons/md';
import { LuShoppingBag } from 'react-icons/lu';
import { FaRegThumbsUp } from 'react-icons/fa';

function Betty() {
    return <div className="md:max-w-[90%] max-w-[100%] mx-auto my-20">
        {/* Heading */}
        <div>
            <h1 className="text-center text-3xl text-[#686666]">Why choose Betty?</h1>
        </div>

        {/* icons */}
        <div className="grid md:grid-cols-3 gap-y-10 place-items-center mt-14">
            {/* Pont 1 */}
            <div className="md:max-w-[50%] max-w-[100%]">
                <FaRegThumbsUp className="mx-auto w-14 h-14 md:w-12 md:h-12 text-gray-600" />
                <h1 className="text-center text-2xl mt-4">100 days return</h1>
                <p className="text-center mt-2">No questions asked</p>
            </div>

            {/* Point 2 */}
            <div className="md:max-w-[60%] max-w-[100%]">
                <LuShoppingBag className="mx-auto w-14 h-14 md:w-12 md:h-12 text-gray-600" />
                <h1 className="text-center text-2xl mt-4">Lifetime Warranty</h1>
                <p className="text-center mt-2">For original owners</p>
            </div>

            {/* Point 3 */}
            <div className="md:max-w-[60%] max-w-[100%]">
                <MdOutlineChat className="mx-auto w-14 h-14 md:w-12 md:h-12 text-gray-600" />
                <h1 className="text-center text-2xl mt-4">Customer Service</h1>
                <p className="text-center mt-2">Our priority</p>
            </div>
        </div>
    </div>
}

export default Betty;
