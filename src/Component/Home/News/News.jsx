import GovNews from "./GovNews";
import LeastedNews from "./LeastedNews";
const News = ()=>{
    return (
        <div className="">
        <h2 className="bg-white sticky top-0 w-full h-fit z-30 p-3 font-medium border" >Govt. Scheme</h2>
          <div className="p-1">
          <GovNews />
          </div>
           <h2 className="bg-white sticky top-0 w-full h-fit z-30 p-3 font-medium border" >News</h2>
           <LeastedNews />
           <LeastedNews />
           <div className="h-16"></div>
        </div>
    );
};

export default News;