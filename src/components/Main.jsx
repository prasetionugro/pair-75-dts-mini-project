import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movies);

  return (
    <div>
      <div className="w-full h-[600px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="my-4"></div>
            <p className="text-gray-400 text-sm">
              Released: {movie?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {movie?.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
