import { NavBar, NumResults, Search } from "./NavBar";
import { Main, Box, MovieList, WatchedSummary, WatchedMovieList } from "./Main";
import { useState } from "react";
import { tempMovieData, tempWatchedData } from "../data/MovieData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
