import { useState } from "react";
import CatService from "../API/CatService";
import Loader from "../components/Loader/Loader";
import Grid from "../components/Grid/Grid";
import Window from "../components/Window/Window";
import CatImg from "../components/CatImg/CatImg";
import { useFetch } from "../hooks/useFetch";
import { useCookies } from "react-cookie";
import {Cat} from '../interfaces/CatType';

const LikedCats = () => {
  const [cookies] = useCookies(["liked"]);
  const [cats, setCats] = useState<Cat[]>([]);

  const [isLoading, error] = useFetch(async () => {
    if (cookies.liked) {
      const cats = [];
      for (const id of cookies.liked) {
        const response = await CatService.getCat(id);
        cats.push(response.data);
      }
      setCats(cats);
    }
  }, null);

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
