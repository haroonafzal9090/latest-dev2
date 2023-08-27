import FaqsMain from "@/components/views/faqs";
import FaqHero from "@/components/views/faqs/hero";
import Faq from "@/components/views/faq/faq";
import Subscribe1 from "@/components/views/ourStory/subscribe";



export default function Faqs() {
    return (
        <div>
            <FaqHero />
            <FaqsMain />
            <Faq />
            <Subscribe1 />
        </div>
    )
}