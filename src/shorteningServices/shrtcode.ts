import axios, { type AxiosResponse } from "axios";
import { wrapWithTryCatch } from "../tryCatchWrapper";

export const shortenWithShrtcode = wrapWithTryCatch("shrtcode", shortenUrlWithShrtcode);

const apiURL = "https://api.shrtco.de/v2/shorten";

type ShrtcodeResponseType = {
  ok: boolean;
  result: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2?: string;
    full_short_link2?: string;
    share_link?: string;
    full_share_link?: string;
    original_link: string;
  };
};

async function shortenUrlWithShrtcode(url: string): Promise<string> {
  const response: AxiosResponse<ShrtcodeResponseType> =
    await axios.get<ShrtcodeResponseType>(`${apiURL}?url=${encodeURIComponent(url)}`);

  if (response.data.ok && response.data.result.full_short_link) {
    return response.data.result.full_short_link;
  }

  throw new Error("Failed to shorten URL with shrtcode");
}
