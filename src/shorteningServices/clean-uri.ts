import axios, { type AxiosResponse } from "axios";
import { handleError } from '../handleError';

type CleanUriResponseType = {
  result_url: string;
};

export async function shortenWithCleanUri(url: string): Promise<string> {
  const cleanUriEndpoint = "https://cleanuri.com/api/v1/shorten";

  try {
    const response: AxiosResponse<CleanUriResponseType> =
      await axios.post<CleanUriResponseType>(
        cleanUriEndpoint,
        `url=${encodeURIComponent(url)}`
      );

    if (response.data && response.data.result_url) {
      return response.data.result_url;
    }

    throw new Error("Failed to shorten URL with CleanUri");
  } catch (error) {
    handleError("CleanUri", error)
  }
}
