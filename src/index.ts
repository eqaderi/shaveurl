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

async function shortenWith1pt(
  url: string,
  customShort?: string
): Promise<string> {
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

async function shortenWithCleanUri(url: string): Promise<string> {
  const cleanUriEndpoint = "https://cleanuri.com/api/v1/shorten";

  try {
    const response: AxiosResponse<{ result_url: string }> = await axios.post<{
      result_url: string;
    }>(cleanUriEndpoint, `url=${encodeURIComponent(url)}`);

    if (response.data && response.data.result_url) {
      return response.data.result_url;
    }

    throw new Error("Failed to shorten URL with CleanUri");
  } catch (error) {
    console.error(
      "An error occurred while shortening the URL with CleanUri:",
      error
    );
    throw error;
  }
}

type ShorteningService = "1pt" | "cleanuri"; // Extend this as needed
type ShorteningFunction = (
  url: string,
  customShort?: string
) => Promise<string>;

const shortenWithService: Record<ShorteningService, ShorteningFunction> = {
  "1pt": shortenWith1pt,
  cleanuri: shortenWithCleanUri,
};

export async function shortenUrl(
  url: string,
  service: ShorteningService = '1pt',
  customShort?: string
): Promise<string> {
  const shortenFunction = shortenWithService[service];

  if (shortenFunction) {
    return shortenFunction(url, customShort);
  }

  throw new Error("Unsupported shortening service");
}
