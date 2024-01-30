import React, { useEffect, useState } from "react";
import CatService from "../API/CatService";
import Loader from "../components/UI/Loader/Loader";
import Grid from "../components/UI/Grid/Grid";
import Window from "../components/UI/Window/Window";
import CatImg from "../components/UI/CatImg/CatImg";
import { useFetching } from "../hooks/useFetching";
import { useCookies } from "react-cookie";

const LikedCats = () => {
  const [cookies] = useCookies(["liked"]);
  const [cats, setCats] = useState([]);

  const [fetchCats, isLoading, error] = useFetching(async () => {
    if (cookies.liked) {
      let cats = [];
      for (const id of cookies.liked) {
        const response = await CatService.getCat(id);
        cats.push(response.data);
      }
      setCats(cats);
    }
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
        {cats.map((cat) => (
          <CatImg key={cat.id} src={cat.url} id={cat.id} liked={true} />
        ))}
      </Grid>
    </Window>
  );
};

export default LikedCats;
