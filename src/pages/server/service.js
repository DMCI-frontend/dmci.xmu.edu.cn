import axios from "axios";

export const getGpuStat = () => {
  return axios.get("/api/gpus");
};
