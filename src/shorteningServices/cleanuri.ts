import axios, { type AxiosResponse } from "axios";
import { wrapWithTryCatch } from "../tryCatchWrapper";

export const shortenWithCleanUri = wrapWithTryCatch(
  "cleanuri",
  shortenUrlWithCleanUri
);

const apiURL = "https://cleanuri.com/api/v1/shorten";

type CleanUriResponseType = {
  result_url: string;
};

async function shortenUrlWithCleanUri(url: string): Promise<string> {
  const response: AxiosResponse<CleanUriResponseType> =
    await axios.post<CleanUriResponseType>(
      apiURL,
      `url=${encodeURIComponent(url)}`
    );

  if (response.data && response.data.result_url) {
    return response.data.result_url;
  }

  throw new Error("Failed to shorten URL with CleanUri");
}
