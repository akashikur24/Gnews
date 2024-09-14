/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { createContext } from "react";
import { handleError } from "../utility/handleError";
import debounce from "lodash.debounce";

export const NewsContext = createContext();

export const NextContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [sortOrder, setSortOrder] = useState("publishedAt");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ismodal, setIsmodal] = useState(false);
  const maxPage = 10;

  const debouncedFetchNews = useCallback(
    debounce(async () => {
      if (searchQuery) {
        const apiUrl = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=${
          language || "en"
        }&country=${
          country || "us"
        }&max=${maxPage}&sortby=${sortOrder}&apikey=${
          import.meta.env.VITE_API_URL
        }`;
        setLoading(true);
        setError(null);
        try {
          const res = await axios.get(apiUrl);
          if (res.status === 200) {
            setNews(res.data.articles);
            setLoading(false);
          }
        } catch (err) {
          let retErr;
          if (err.response) {
            retErr = handleError(err.response.status, setError);
            alert(retErr);
            setError(retErr);
          } else {
            setError("An unexpected error occurred.");
            alert("An unexpected error occurred.");
          }
          setLoading(false);
        }
      }
    }, 500),
    [searchQuery, language, country, sortOrder]
  );

  useEffect(() => {
    if (!searchQuery) {
      topNews();
      return;
    }
    debouncedFetchNews();
    return () => {
      debouncedFetchNews.cancel();
    };
  }, [searchQuery, language, country, sortOrder, debouncedFetchNews]);

  useEffect(() => {
    topNews();
  }, [language, country, sortOrder]);

  const topNews = async () => {
    setLoading(true);
    const apiUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=${
      language || "en"
    }&country=${country || "us"}&max=${maxPage}&apikey=${
      import.meta.env.VITE_API_URL
    }`;
    try {
      const res = await axios.get(apiUrl);
      if (res.status === 200) {
        setNews(res.data.articles);
        setLoading(false);
      }
    } catch (err) {
      let retErr;
      if (err.response) {
        retErr = handleError(err.response.status, setError);
        alert(retErr);
        setError(retErr);
      } else {
        setError("An unexpected error occurred.");
        alert("An unexpected error occurred.");
      }
      setLoading(false);
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const clearFilter = () => {
    setSearchQuery("");
    setLanguage("");
    setCountry("");
    topNews();
  };

  return (
    <NewsContext.Provider
      value={{
        news,
        searchQuery,
        setSearchQuery,
        language,
        setLanguage,
        country,
        setCountry,
        sortOrder,
        handleSort,
        loading,
        error,
        clearFilter,
        setIsmodal,
        ismodal,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
