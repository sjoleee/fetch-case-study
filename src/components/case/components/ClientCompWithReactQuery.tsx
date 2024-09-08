"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { pokemonOptions } from "../utils/queryOptions";

const ClientCompWithReactQuery = () => {
  const { data: response } = useSuspenseQuery(pokemonOptions);

  console.log(response.message);

  return <div>{JSON.stringify(response.name)}</div>;
};

export default ClientCompWithReactQuery;
