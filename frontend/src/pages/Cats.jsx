import React, { useEffect, useRef, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import CatService from "../API/CatService";
import Loader from "../components/UI/Loader/Loader";
import Grid from "../components/UI/Grid/Grid";
import Window from "../components/UI/Window/Window";
import CatImg from "../components/UI/CatImg/CatImg";
import { useCookies } from "react-cookie";
import { useObserver } from "../hooks/useObserver";

const Cats = () => {
  const [cookies] = useCookies();
  const [page, setPage] = useState(0);
  const [cats, setCats] = useState([]);

  const [fetchCats, isLoading, error] = useFetching(async () => {
    const response = await CatService.getCats(page);
    setCats([...cats, ...response.data]);
  });

  useEffect(() => {
    fetchCats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const observerTarget = useRef(null);

  useObserver(
    observerTarget,
    () => {
      setPage(page + 1);
    },
    isLoading
  );

  return (
    <>
      <Window>
        <Grid>
          {cats.map((cat) => {
            let liked = false;
            if (cookies.liked && cookies.liked.includes(cat.id)) liked = true;
            return (
              <CatImg key={cat.id} src={cat.url} id={cat.id} liked={liked} />
            );
          })}
        </Grid>
        {isLoading && <Loader />}
        {error && <h1>{error}</h1>}
      </Window>
      <div ref={observerTarget}></div>
    </>
  );
};

export default Cats;
