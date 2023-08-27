// import Search from "./questions/search";
// import ReturnExchange from "./questions/return&exchange";
// import Sustainability from "./questions/sustainability";
// import Ordering from "./questions/ordering";
// import Shipping from "./questions/shipping";
// import Link from "next/link";

// function FaqsQuestions() {
//   return (
//     <div className="flex">

//       {/* Quick links - Fixed on the left side */}
//       <div className=" py-4">
       
       
//       </div>

//       {/* Search & Questions - Scroll vertically on the right side */}
//       <div className="flex flex-col flex-1">
       
//         <div className="px-4">
//           <Search />
//         </div>

//         <div className="px-4">
         
//           <div className="mb-8" id="ordering">
//             <Ordering />
//           </div>

//           <div className="mb-8" id="shipping">
//             <Shipping />
//           </div>

//           <div className="mb-8" id="returns">
//             <ReturnExchange />
//           </div>

//           <div className="mb-8" id="sustainability">
//             <Sustainability />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FaqsQuestions;


import Search from "../questions/search";
import ReturnExchange from "../questions/return&exchange";
import Sustainability from "../questions/sustainability";
import Ordering from "../questions/ordering";
import Shipping from "../questions/shipping";

function FaqsQuestions() {
  return (
      <div className="flex flex-col flex-1 mx-4">
        <div>
          <Search />
        </div>

        <div>
          <div className="mb-8" id="ordering">
            <Ordering />
          </div>

          <div className="mb-8" id="shipping">
            <Shipping />
          </div>

          <div className="mb-8" id="returns">
            <ReturnExchange />
          </div>

          <div className="mb-8" id="sustainability">
            <Sustainability />
          </div>
        </div>
      </div>
    
  );
}

export default FaqsQuestions;
