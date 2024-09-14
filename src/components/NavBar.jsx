import { useContext } from "react";
import { Search, X } from "lucide-react";
import { NewsContext } from "../contex/newCopntext";

const NavBar = () => {
  const {
    searchQuery,
    setSearchQuery,
    language,
    setLanguage,
    country,
    setCountry,
    setIsmodal,
    ismodal,
  } = useContext(NewsContext);

  return (
    <div
      className={`h-full bg-gray-100 max-lg:fixed flex flex-col items-center pt-20 gap-y-10 z-50 transition-transform duration-500 ease-in-out transform ${
        ismodal ? "max-lg:translate-x-0 " : "max-lg:-translate-x-full "
      } w-full max-w-xs max-lg:w-1/3 max-md:w-1/2 max-sm:w-[80%]`}
    >
      <div
        className="absolute top-5 right-5 hidden max-lg:block cursor-pointer"
        onClick={() => setIsmodal((prev) => !prev)}
      >
        <X size={30} />
      </div>
      <h1 className="text-2xl font-bold text-blue-900">ACONEWS</h1>
      <div className="flex flex-col px-5 gap-y-5">
        <div className="flex flex-col">
          <label className="block text-base font-medium leading-6 text-gray-500">
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full py-1 rounded-lg pl-11 pr-4 text-gray-700 bg-white border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium leading-6 text-gray-500">
            Choose a language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full py-1 rounded-lg text-gray-700 bg-white border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none"
          >
            <option value="" disabled>
              Choose a language
            </option>
            <option value="ar">Arabic</option>
            <option value="zh">Chinese</option>
            <option value="nl">Dutch</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="el">Greek</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ml">Malayalam</option>
            <option value="mr">Marathi</option>
            <option value="no">Norwegian</option>
            <option value="pt">Portuguese</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
            <option value="sv">Swedish</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="uk">Ukrainian</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="block text-base font-medium leading-6 text-gray-500">
            Choose a country
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full py-1 rounded-lg text-gray-700 bg-white border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none"
          >
            <option value="" disabled>
              Choose a country
            </option>
            <option value="au">Australia</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="in">India</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="nl">Netherlands</option>
            <option value="no">Norway</option>
            <option value="pk">Pakistan</option>
            <option value="pe">Peru</option>
            <option value="ph">Philippines</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="ru">Russian Federation</option>
            <option value="sg">Singapore</option>
            <option value="es">Spain</option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland</option>
            <option value="tw">Taiwan</option>
            <option value="ua">Ukraine</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
