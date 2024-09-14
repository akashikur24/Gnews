import { useContext } from "react";
import { NewsContext } from "../contex/newCopntext";
import NewsCard from "./NewsCard";
import { HashLoader } from "react-spinners";

const NewsList = () => {
  const { news, loading } = useContext(NewsContext);

  if (loading) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <HashLoader color="#6366f1" />;
      </div>
    );
  }

  if (news.length == 0) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div>No news Found</div>
      </div>
    );
  }
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-7 py-5">
        {news.map((item, index) => (
          <NewsCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
