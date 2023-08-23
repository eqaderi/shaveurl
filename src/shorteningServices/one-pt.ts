import axios, { type AxiosResponse } from "axios";
import { handleError } from "../handleError";

type onePtResponseType = {
  message: string;
  short: string;
  long: string;
};

type ParamsTypeFor1pt = {
  long: string;
  short?: string;
};

export async function shortenWith1pt(
  url: string,
  customShort?: string
): Promise<string> {
  const shorteningEndpoint =
    "https://csclub.uwaterloo.ca/~phthakka/1pt-express/addURL";

  const params: ParamsTypeFor1pt = {
    long: url,
  };

  if (customShort) {
    params.short = customShort;
  }

  try {
    const response: AxiosResponse<onePtResponseType> =
      await axios.post<onePtResponseType>(
        shorteningEndpoint,
        null,
        { params } // Pass params as query parameters
      );

    if (response.data && response.data.short) {
      return `https://1pt.co/${response.data.short}`;
    }

    throw new Error("Failed to shorten URL with 1pt");
  } catch (error) {
    handleError("1pt", error);
  }
}
