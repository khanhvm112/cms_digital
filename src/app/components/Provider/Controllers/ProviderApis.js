import axios from "../../../../axios";

const listProviderApi = (data) => {
  let result = axios.post("/listProvider", data);
  return result;
};

export { listProviderApi };
