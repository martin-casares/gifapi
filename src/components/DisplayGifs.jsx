import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";

import { GifItem } from "./GifItem";

export const DisplayGifs = ({ category }) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=H16T6haP90n5vkksysehdAGP48rjBJzn&q=${category}&limit=10`
      );
      setGifs(res.data.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <div className="container-gifs">
      {isLoading ? (
        <HashLoader color="white" size="100"/>
      ) : (
        gifs.map((gif) => (
          <GifItem title={gif.title} url={gif.images.downsized_medium.url} />
        ))
      )}
    </div>
  );
};
