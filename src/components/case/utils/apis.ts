"use server";

export const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const where = typeof window === "undefined" ? "server" : "client";
  console.log(where);

  // 에러 테스트용. 50% 확률로 에러 발생
  if (Math.random() * 10 > 5) {
    throw new Error("error");
  }

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
  return response.json();
};
