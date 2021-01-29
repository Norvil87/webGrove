import axios from "axios";

export const post = async (url: string, data: any): Promise<any> => {
  const response = await axios({
    url: url,
    method: "POST",
    data,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return response.data;
};
