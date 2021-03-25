import { NETWORK } from "./types";

export const network = (data) => {
  return {
    type: NETWORK,
    payload: data,
  };
};
