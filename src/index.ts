import axios, { AxiosResponse } from "axios";

type ShortenResponse = {
  message: string;
  short: string;
  long: string;
};

type ShortenParams = {
  long: string;
  short?: string;
};

export async function shortenUrl(url: string, customShort?: string): Promise<string> {
  const shorteningEndpoint =
    "https://csclub.uwaterloo.ca/~phthakka/1pt-express/addURL";

  const params: ShortenParams = {
    long: url,
  };

  if (customShort) {
    params.short = customShort;
  }

  try {
    const response: AxiosResponse<ShortenResponse> =
      await axios.post<ShortenResponse>(
        shorteningEndpoint,
        null,
        { params } // Pass params as query parameters
      );

    if (response.data && response.data.short) {
      return `https://1pt.co/${response.data.short}`;
    }

    throw new Error("Failed to shorten URL");
  } catch (error) {
    console.error("An error occurred while shortening the URL:", error);
    throw error;
  }
}
