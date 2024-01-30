import React, { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import CatService from "../API/CatService";
import Loader from "../components/UI/Loader/Loader";
import Grid from "../components/UI/Grid/Grid";
import Window from "../components/UI/Window/Window";
import CatImg from "../components/UI/CatImg/CatImg";
import { useCookies } from "react-cookie";

const Cats = () => {
  const [cookies] = useCookies(["liked"]);
  const [cats, setCats] = useState([]);

  const [fetchCats, isLoading, error] = useFetching(async () => {
    const response = await CatService.getRandomCats();
    setCats(response.data);
  });

  useEffect(() => {
    fetchCats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Window>
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      <Grid>
        {cats.map((cat) => {
          let liked = false;
          if (cookies.liked && cookies.liked.includes(cat.id)) liked = true;
          return (
            <CatImg key={cat.id} src={cat.url} id={cat.id} liked={liked} />
          );
        })}
      </Grid>
    </Window>
  );
};

export default Cats;
