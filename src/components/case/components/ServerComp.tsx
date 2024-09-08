import { getData } from "../utils/apis";

const ServerComp = async () => {
  const response = await getData();

  console.log(response.message);

  return <div>{JSON.stringify(response.name)}</div>;
};

export default ServerComp;
