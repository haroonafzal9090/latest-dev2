import Link from "next/link"

function QuestionLinks(){
    return(
        <div className="mb-6">

        {/* Question links */}

        <ul className="ml-16 mt-8 space-y-3 hidden md:block">
         <li><Link href="">Quick links</Link></li>
          <li><Link href="#ordering">Ordering</Link></li>
          <li><Link href="#shipping">Shipping</Link></li>
          <li><Link href="#returns">Returns & Exchanges</Link></li>
          <li><Link href="#sustainability">Sustainability</Link></li>
        </ul>
      </div>
    )
}
export default QuestionLinks;