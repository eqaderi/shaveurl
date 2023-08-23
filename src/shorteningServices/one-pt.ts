import axios, { type AxiosResponse } from "axios";
import { wrapWithTryCatch } from "../tryCatchWrapper";

export const shortenWith1pt = wrapWithTryCatch("1pt", shortenUrlWith1pt);

const apiUrl = "https://csclub.uwaterloo.ca/~phthakka/1pt-express/addURL";

type onePtResponseType = {
  message: string;
  short: string;
  long: string;
};

type ParamsTypeFor1pt = {
  long: string;
  short?: string;
};

async function shortenUrlWith1pt(
  url: string,
  customShort?: string
): Promise<string> {
  const params: ParamsTypeFor1pt = {
    long: url,
  };

  if (customShort) {
    params.short = customShort;
  }

  const response: AxiosResponse<onePtResponseType> =
    await axios.post<onePtResponseType>(
      apiUrl,
      null,
      { params } // Pass params as query parameters
    );

  if (response.data && response.data.short) {
    return `https://1pt.co/${response.data.short}`;
  }

  throw new Error("Failed to shorten URL with 1pt");
}
