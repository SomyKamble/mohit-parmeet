import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "308b0169c7254dba801e66e3edc9b86c";

  useEffect(() => {
    axios
      .get(
        // `https://newsapi.org/v2/everything?q=mahindra&apiKey=308b0169c7254dba801e66e3edc9b86c`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
