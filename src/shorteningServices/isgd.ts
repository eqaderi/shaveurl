import axios, { type AxiosResponse } from "axios";
import { handleError } from "../handleError";

type IsGdResponseType = {
  shorturl?: string;
  errorcode?: number;
  errormessage?: string;
};
export type IsgdParamsType = {
  url: string;
  format: "json" | "xml" | "simple" | "web";
  shorturl?: string;
  logstats?: 1;
};

export async function shortenUrlWithIsgd(
  url: string,
  customShort?: string,
  format: IsgdParamsType["format"] = "json",
  logstats?: boolean
): Promise<string> {
  const apiURL = "https://is.gd/create.php";
  const params: IsgdParamsType = {
    url,
    format,
  };

  if (customShort) {
    params.shorturl = customShort;
  }

  if (logstats) {
    params.logstats = 1;
  }

  try {
    const response: AxiosResponse<IsGdResponseType> =
      await axios.get<IsGdResponseType>(apiURL, { params });

    if (response.data.shorturl) {
      return response.data.shorturl;
    } else {
      throw new Error(
        response.data.errormessage || "Failed to shorten URL with IsGd"
      );
    }
  } catch (error) {
    handleError("IsGd", error);
  }
}
