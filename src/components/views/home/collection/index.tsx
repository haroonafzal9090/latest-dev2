import CollectionItem from "@/components/views/home/collection/CollectionItem";
import SwiperImages from "@/components/views/home/collection/SwiperImages";
import { slideImages } from "@/components/views/home/collection/data";
//slideImages is array of objects contain data
const Collection = () => {
  return (
    // there are two main divs and one will run at a time.
    // one for large screen i.e. collections of four components called "CollectionItem"
    // one for small screen i.e. swiper and component name is "SwiperImages"
    <>
      <div className="hidden md:block">
        <div className="grid sm:grid-cols-5 grid-cols-1 text-gray-50 ">
          <div className="grid col-span-2">
            <CollectionItem obj={slideImages[0]} />

            {/* Here We pass first object of array */}
          </div>
          <div className="sm:grid col-span-3 hidden ">
            <CollectionItem obj={slideImages[1]} />
          </div>
          <div className="sm:grid col-span-3 hidden ">
            <CollectionItem obj={slideImages[2]} />
          </div>
          <div className="sm:grid col-span-2 hidden ">
            <CollectionItem obj={slideImages[3]} />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <SwiperImages />
      </div>
    </>
  );
};

export default Collection;
