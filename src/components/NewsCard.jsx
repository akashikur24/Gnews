/* eslint-disable react/prop-types */
const NewsCard = ({ data }) => {
  const date = new Date(data.publishedAt);
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col justify-between ">
      <div className="relative">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-48 object-cover rounded-lg p-1"
        />
      </div>
      <div className="p-6">
        <h1 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition duration-300">
          {data.title}
        </h1>
        <p className="mt-2 text-gray-600 text-sm line-clamp-3">
          {data.description}
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-100 flex justify-between items-center ">
        <div>
          <p className="text-sm text-gray-500">
            {formattedDate.split("at")[0]}
          </p>
          <p className="text-sm text-gray-500">
            {"at" + formattedDate.split("at")[1]}
          </p>
        </div>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
