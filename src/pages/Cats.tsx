import { useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import CatService from "../API/CatService";
import Loader from "../components/Loader/Loader";
import Grid from "../components/Grid/Grid";
import Window from "../components/Window/Window";
import CatImg from "../components/CatImg/CatImg";
import { useCookies } from "react-cookie";
import { useObserver } from "../hooks/useObserver";
import {Cat} from '../interfaces/CatType';

const Cats = () => {
  const [cookies] = useCookies();
  const [page, setPage] = useState(0);
  const [cats, setCats] = useState<Cat[]>([]);

  const [isLoading, error] = useFetch(async () => {
    const response = await CatService.getCats(page);
    setCats([...cats, ...response.data]);
  }, page);

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
