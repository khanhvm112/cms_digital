import axios from "../../../../axios";

const listServiceApi = (data) => {
  let result = axios.post("/public/listService", data);
  return result;
};

export { listServiceApi };
