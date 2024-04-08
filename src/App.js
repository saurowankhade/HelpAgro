import Header from "./Component/Header/Header";
import Post from "./Component/Home/Post";
import ProblemCard from "./Component/Home/ProblemCard";
import SearchProfile from "./Component/Home/Search_Profile";

function App() {
  return (
    <div className="mx-28">
      <div className="flex flex-row   ">  
      <div className="sticky h-full top-0 w-fit  ">
        <Header />
      </div>

      <div className=" border w-[600px]">
        <Post />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
        <ProblemCard />
      </div>

      <div>
        <SearchProfile />
      </div>

      

      </div>
    </div>
  );
}

export default App;
