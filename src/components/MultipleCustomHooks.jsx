import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  // Se modifico la url por que arrojaba problemas de CORS y estaba largo resolverlo
  const { data, isLoading, hasError } = useFetch(
    `https://api.giphy.com/v1/gifs/search?api_key=fqLHp3DpsBWEpmXsS5I6Z0z45Mby23mb&q=${counter}&limit=25&offset=0&rating=g&lang=en`
  );

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <blockquote>
          <p>{data[0]?.id}</p>
          <footer>{data[0]?.title}</footer>
        </blockquote>
      )}

      <button onClick={() => increment()}>Next Quote</button>
    </>
  );
};
