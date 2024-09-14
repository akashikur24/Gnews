import { useContext } from "react";
import { NewsContext } from "../contex/newCopntext";
import NewsList from "./NewsList";
import { ArrowBigDownDash, ArrowBigUpDash, Eraser, Filter } from "lucide-react";

const Dashboard = () => {
  const { handleSort, clearFilter, sortOrder, setIsmodal } =
    useContext(NewsContext);

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-14 sticky top-0 z-10 w-full flex items-center justify-end max-lg:justify-between bg-gray-100">
        <div
          className="pl-7 cursor-pointer hidden max-lg:block "
          onClick={() => setIsmodal((prev) => !prev)}
        >
          <Filter />
        </div>
        <div>
          <p className="text-2xl font-bold text-blue-900 hidden max-lg:block">
            ACONEWS
          </p>
        </div>
        <div className="pr-2 flex gap-x-3">
          <button
            onClick={() => clearFilter()}
            className="px-4 py-1 border-gray-500 border rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 max-md:px-2"
          >
            <p className="max-md:hidden">Clear filter</p>
            <p className="hidden max-md:block">
              <Eraser size={20} />
            </p>
          </button>
          <button
            onClick={() => {
              if (sortOrder == "relevance") {
                handleSort("publishedAt");
              } else {
                handleSort("relevance");
              }
            }}
            className="px-4 py-1 border-gray-500 border rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 max-md:px-2"
          >
            <p className="max-md:hidden">
              {sortOrder == "relevance"
                ? "Sort by PublishedAt"
                : "Sort by Relevance"}
            </p>
            <p className="hidden max-md:block">
              {sortOrder == "relevance" ? (
                <ArrowBigUpDash />
              ) : (
                <ArrowBigDownDash />
              )}
            </p>
          </button>
        </div>
      </div>
      <NewsList />
    </div>
  );
};

export default Dashboard;
