import instance from "./instance";
import { useQuery } from "react-query";

const getAllDevice = () => {
  return instance.get(`device/get-all`);
};

export const useGetAllDevice = () => {
  return useQuery(["get-all-device"], getAllDevice, {
    refetchInterval: 20000,
  });
};
