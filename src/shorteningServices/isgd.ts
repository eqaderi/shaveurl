import axios, { type AxiosResponse } from "axios";
import { wrapWithTryCatch } from "../tryCatchWrapper";

export const shortenWithIsgd = wrapWithTryCatch("isgd", shortenUrlWithIsgd);

const apiURL = "https://is.gd/create.php";

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

async function shortenUrlWithIsgd(
  url: string,
  customShort?: string,
  format: IsgdParamsType["format"] = "json",
  logstats?: boolean
): Promise<string> {
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

  const response: AxiosResponse<IsGdResponseType> =
    await axios.get<IsGdResponseType>(apiURL, { params });

  if (response.data.shorturl) {
    return response.data.shorturl;
  } else {
    throw new Error(
      response.data.errormessage || "Failed to shorten URL with IsGd"
    );
  }
}
