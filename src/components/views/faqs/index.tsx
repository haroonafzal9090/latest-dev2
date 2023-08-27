import FaqsQuestions from "./faq";
import QuestionLinks from "./questionlinks";

function FaqsMain() {
    return (
        <div className="flex justify-between items-start mx-4 md:mx-32">
            <div className="w-1/4 hidden md:block sticky top-20 h-screen overflow-y-auto pr-4">
                <QuestionLinks />
            </div>
            <div className="w-full md:w-3/4 pl-4 overflow-y-auto">
                <FaqsQuestions />
            </div>
        </div>
    );
}

export default FaqsMain;
