import { queryOptions } from "@tanstack/react-query";
import { getData } from "./apis";

export const pokemonOptions = queryOptions({
  queryKey: ["pokemon"],
  queryFn: () => getData(),
});
